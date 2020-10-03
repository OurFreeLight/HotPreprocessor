import { MySQLSchemaField, MySQLSchemaFieldResult } from "./MySQLSchemaField";
import { HotDBGenerationType } from "../HotDBSchema";
import { HotDBMySQL } from "../HotMySQL";

/**
 * The database table.
 */
export class MySQLSchemaTable
{
	/**
	 * The name of the table.
	 */
	name: string;
	/**
	 * The table's description.
	 */
	description: string;
	/**
	 * The fields in the table.
	 */
	fields: MySQLSchemaField[];
	/**
	 * The table's engine to use.
	 */
	engine: string;
	/**
	 * The table's charset to use.
	 */
	charset: string;

	constructor (name: string = "", fields: MySQLSchemaField[] = [])
	{
		this.name = name;
		this.description = "";
		this.fields = fields;
		this.engine = "InnoDB";
		this.charset = "utf8";
	}

	/**
	 * Add a field.
	 */
	addField (field: MySQLSchemaField): void
	{
		this.fields.push (field);
	}

	/**
	 * Add a field.
	 */
	addFields (fields: MySQLSchemaField[]): void
	{
		for (let iIdx = 0; iIdx < this.fields.length; iIdx++)
		{
			let field: MySQLSchemaField = this.fields[iIdx];
			this.fields.push (field);
		}
	}

	/**
	 * Generate the db command. If type is set to modify, you must pass a db with an 
	 * active connection. Since field parsing isn't completely implemented yet, not all 
	 * fields will be modified correctly. Use modifiying with caution. This will 
	 * skip checking for:
	 * * Binary column
	 * * unique
	 * * zero-filled
	 */
	async generate (type: HotDBGenerationType = HotDBGenerationType.Create, db: HotDBMySQL = null): Promise<string>
	{
		let result: string = "";

		if (type === HotDBGenerationType.Create)
		{
			let primaryKeys: string[] = [];
			let keys: string[] = [];

			result = `CREATE TABLE IF NOT EXISTS ${this.name} (\n`;

			// Generate the fields.
			for (let iIdx = 0; iIdx < this.fields.length; iIdx++)
			{
				let field: MySQLSchemaField = this.fields[iIdx];
				let fieldResult: MySQLSchemaFieldResult = await field.generate ();

				if (fieldResult.primaryKey !== "")
					primaryKeys.push (fieldResult.primaryKey);

				if (fieldResult.key !== "")
					keys.push (fieldResult.key);

				result += `${fieldResult.field},\n`;
			}

			// Generate the primary keys.
			if (primaryKeys.length > 0)
			{
				result += "PRIMARY KEY (";

				for (let iIdx = 0; iIdx < primaryKeys.length; iIdx++)
				{
					let primaryKey: string = primaryKeys[iIdx];

					result += `\`${primaryKey}\`,`;
				}

				result = result.substr (0, (result.length - 1));
				result += "),\n";
			}

			// Generate the keys.
			if (keys.length > 0)
			{
				for (let iIdx = 0; iIdx < keys.length; iIdx++)
				{
					let key: string = keys[iIdx];

					result += `${key},\n`;
				}
			}

			result = result.substr (0, (result.length - 2));
			result += `) ENGINE=${this.engine} DEFAULT CHARSET=${this.charset};\n\n`;
		}

		if (type === HotDBGenerationType.Modify)
		{
			if (db == null)
				throw new Error ("Cannot modify a database structure when db is null.");

			let dbresult = await db.query ("describe testTable;");
			let existingFields: MySQLSchemaField[] = [];

			// Get the fields.
			for (let iIdx = 0; iIdx < dbresult.results.length; iIdx++)
			{
				let jsonField = dbresult.results[iIdx];
				let dbfield: MySQLSchemaField = MySQLSchemaField.parse (jsonField);

				existingFields.push (dbfield);
			}
debugger;
			/**
			 * Check for any differences between the two tables.
			 * Since MySQLSchemaField.parse is missing some fields, this will 
			 * skip checking for:
			 * * Binary column
			 * * unique
			 * * zero-filled
			 */
			for (let iIdx = 0; iIdx < existingFields.length; iIdx++)
			{
				let existingField: MySQLSchemaField = existingFields[iIdx];
				let existingFieldName: string = existingField.name.toLowerCase ();
				let existingFieldDataType: string = existingField.dataType.toLowerCase ();

				if (this.fields[iIdx] != null)
				{
					let newField: MySQLSchemaField = this.fields[iIdx];
					let newFieldName: string = newField.name.toLowerCase ();
					let newFieldDataType: string = newField.dataType.toLowerCase ();

					let tempAlter: string = `ALTER TABLE ${this.name} CHANGE COLUMN \`${existingField.name}\` `;

					if (newFieldName !== existingFieldName)
						tempAlter += `\`${newField.name}\` `;
					else
						tempAlter += `\`${existingField.name}\` `;

					if (newField.autoIncrement === true)
						tempAlter += `AUTO_INCREMENT `;

					if (newFieldDataType !== existingFieldDataType)
						tempAlter += `\`${newField.dataType}\` `;
					else
						tempAlter += `\`${existingField.dataType}\` `;

					if (newField.unsignedDataType === true)
						tempAlter += `UNSIGNED `;

					if (newField.notNull === true)
						tempAlter += `NOT NULL `;
					else
						tempAlter += `NULL `;

					if (newField.defaultValue !== existingField.defaultValue)
						tempAlter += `DEFAULT ${newField.defaultValue} `;

					if (newField.primaryKey !== existingField.primaryKey)
					{
						tempAlter += `\n`;

						if (existingField.primaryKey === true)
						{
							if (newField.primaryKey === true)
							{
								// Do nothing.
							}
							else
							{
								tempAlter += `DROP PRIMARY KEY `;
							}
						}
						else
						{
							if (newField.primaryKey === true)
							{
								tempAlter += `ADD PRIMARY KEY (\`${newField.name}\`)`;
							}
							else
							{
								// Do nothing.
							}
						}
					}

					tempAlter += ';\n';
					result += tempAlter;
				}
			}
		}

		return (result);
	}
}