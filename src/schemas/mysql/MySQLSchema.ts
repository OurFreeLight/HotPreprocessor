import { MySQLSchemaTable } from "./MySQLSchemaTable";
import { MySQLSchemaField } from "./MySQLSchemaField";
import { HotDBSchema } from "../HotDBSchema";

/**
 * The MySQL schema.
 */
export class MySQLSchema extends HotDBSchema
{
	/**
	 * The tables in this schema.
	 */
	tables: { [name: string]: MySQLSchemaTable };

	constructor (name: string)
	{
		super (name);

		this.tables = {};
	}

	/**
	 * Add a table to this schema.
	 */
	addTable (table: MySQLSchemaTable): void
	{
		this.tables[table.name] = table;
	}

	/**
	 * Add a field to a table.
	 */
	addFieldToTable (tableName: string, field: MySQLSchemaField)
	{
		this.tables[tableName].fields[field.name] = field;
	}

	/**
	 * Generate the db structure.
	 */
	async generateStructure (): Promise<string>
	{
		let result: string = "";

		for (let key in this.tables)
		{
			let table: MySQLSchemaTable = this.tables[key];

			await table.generate ();
		}

		return (result);
	}
}