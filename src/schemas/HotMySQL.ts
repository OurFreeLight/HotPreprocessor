import * as mysql from "mysql";

import { HotDB } from "../HotDB";
import { HotDBConnectionInterface } from "../HotDBConnectionInterface";
import { MySQLSchema } from "./mysql/MySQLSchema";

/**
 * The MySQL database connection.
 */
export class HotDBMySQL extends HotDB
	<mysql.Connection, { results: any; fields: mysql.FieldInfo[]; }, MySQLSchema>
{
	constructor (db: mysql.Connection = null, type: string = "mysql", schema: MySQLSchema = null)
	{
		super (db, type, schema);
	}

	/**
	 * Connect to the database.
	 */
	async connect (connectionInfo: HotDBConnectionInterface): Promise<any[]>
	{
		return (new Promise<any[]> ((resolve, reject) =>
			{
				this.db = mysql.createConnection ({
						host: connectionInfo.server,
						user: connectionInfo.username,
						password: connectionInfo.password,
						port: connectionInfo.port,
						database: connectionInfo.database
					});
				this.db.connect ((err: mysql.MysqlError, ...args: any[]): void =>
					{
						if (err != null)
							throw err;

						resolve (args[0]);
					});
			}));
	}

	/**
	 * Checks to see if this has a database connection.
	 */
	protected dbCheck (): void
	{
		if (this.db == null)
			throw new Error ("Not connected to a database!");
	}

	/**
	 * The query to make.
	 */
	async query (queryString: string, values: any[] = []): Promise<{ results: any; fields: mysql.FieldInfo[]; }>
	{
		this.dbCheck ();

		let dbresults: { results: any, fields: mysql.FieldInfo[] } = 
			await new Promise<any> ((resolve, reject) =>
			{
				this.db.query (queryString, values, 
					(err: mysql.MysqlError, results: any, fields: mysql.FieldInfo[]) =>
					{
						resolve ({ results: results, fields: fields });
					});
			});

		return (dbresults);
	}

	/**
	 * Disconnect from the server.
	 */
	async disconnect (): Promise<void>
	{
		this.dbCheck ();

		this.db.destroy ();
	}
}