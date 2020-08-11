import { MySQLSchemaField, MySQLSchemaFieldResult } from "./MySQLSchemaField";

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
	fields: { [name: string]: MySQLSchemaField };
	/**
	 * The table's engine to use.
	 */
	engine: string;
	/**
	 * The table's charset to use.
	 */
	charset: string;

	constructor (name: string = "", fields: { [name: string]: MySQLSchemaField } = {})
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
		this.fields[field.name] = field;
	}

	/**
	 * Generate the db command.
	 */
	async generate (): Promise<string>
	{
		let result: string = `CREATE TABLE IF NOT EXISTS ${this.name} (\n`;
		let primaryKeys: string[] = [];
		let keys: string[] = [];

		// Generate the fields.
		for (let key in this.fields)
		{
			let field: MySQLSchemaField = this.fields[key];
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

		return (result);
	}
}