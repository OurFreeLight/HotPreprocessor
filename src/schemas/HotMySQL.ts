import * as mysql from "mysql";

import { ConnectionStatus, HotDB } from "../HotDB";
import { HotDBConnectionInterface } from "../HotDBConnectionInterface";
import { HotDBGenerationType } from "./HotDBSchema";
import { MySQLSchema } from "./mysql/MySQLSchema";

/**
 * The database results.
 */
interface MySQLResults
{
	error: any;
	results: any;
	fields: mysql.FieldInfo[];
}

/**
 * The MySQL database connection.
 */
export class HotDBMySQL extends HotDB<mysql.Connection, MySQLResults, MySQLSchema>
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
				this.connectionStatus = ConnectionStatus.Connecting;
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
						{
							this.connectionStatus = ConnectionStatus.Disconnected;

							throw err;
						}

						this.connectionStatus = ConnectionStatus.Connected;
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
     * Synchronize all tables.
     */
	async syncAllTables (throwErrors: boolean = true): Promise<boolean>
	{
		this.dbCheck ();

		let madeModifications: boolean = false;

		for (let tableName in this.schema.tables)
		{
			let tempResult: boolean = await this.syncTable (tableName, throwErrors);

			if (tempResult === true)
				madeModifications = true;
		}

		return (madeModifications);
	}

    /**
     * Synchronize a table. This will create/modify the table based on whether it 
	 * exists, and if there's been any changes to any fields.
     */
	async syncTable (tableName: string, throwErrors: boolean = true): Promise<boolean>
	{
		this.dbCheck ();

		let tableExists: boolean =  await this.tableCheck (tableName);
		let madeModifications: boolean = false;

		if (tableExists === false)
		{
			let structure: string[] = await this.schema.generateTableStructure (tableName);
			// This should always be structure[0]. There should only be 1 string to process 
			// for a newly created table.
			let tempResults = await this.query (structure[0], []);

			if (tempResults.error == null)
				madeModifications = true;
			else
			{
				if (throwErrors === true)
					throw new Error (`Error while creating table ${tableName}: ${tempResults.error.message}`);
			}
		}
		else
		{
			let structure: string[] = await this.schema.generateTableStructure (
										tableName, HotDBGenerationType.Modify, this);
			let tempResults = await this.multiQuery (structure);

			for (let iIdx = 0; iIdx < tempResults.length; iIdx++)
			{
				let results = tempResults[iIdx];

				if (results.error != null)
				{
					madeModifications = false;

					if (throwErrors === true)
						throw new Error (`Error while creating table ${tableName}: ${results.error.message}`);
				}
				else
					madeModifications = true;
			}
		}

		return (madeModifications);
	}

	/**
	 * Checks if the table exists.
	 */
	async tableCheck (tableName: string): Promise<boolean>
	{
		this.dbCheck ();

		let tableExists: boolean = await new Promise<boolean> ((resolve, reject) =>
			{
				this.db.query ("SELECT table_name FROM information_schema.tables where table_name = ?;", [tableName], 
					(err: mysql.MysqlError, results: any, fields: mysql.FieldInfo[]) =>
					{
						let result: boolean = false;

						if (results.length > 0)
							result = true;

						resolve (result);
					});
			});

		return (tableExists);
	}

	/**
	 * The query to make.
	 */
	async query (queryString: string, values: any[] = []): Promise<MySQLResults>
	{
		this.dbCheck ();

		let dbresults: MySQLResults = await new Promise<MySQLResults> ((resolve, reject) =>
			{
				this.db.query (queryString, values, 
					(err: mysql.MysqlError, results: any, fields: mysql.FieldInfo[]) =>
					{
						resolve ({ error: err, results: results, fields: fields });
					});
			});

		return (dbresults);
	}

	/**
	 * Make multiple queries. **Warning! This can be a security vulnerability 
	 * if misused! Ideally this should only be used when make changes to tables!
	 * Additionally, this could overwhelm the server and each command sent is not 
	 * guaranteed to be done in order.**
	 */
	async multiQuery (queryStrings: string[] | { query: string; values: any[]; }[]): Promise<MySQLResults[]>
	{
		this.dbCheck ();

		let alldbresults: MySQLResults[] = [];
		let promises = [];

		for (let iIdx = 0; iIdx < queryStrings.length; iIdx++)
		{
			/// @fixme This could overwhelm the server, and each query most likely will 
			/// not be done in a deterministic order. Consider adding a 5-10ms delay between
			/// each query.
			promises.push (new Promise<MySQLResults> ((resolve, reject) =>
				{
					let queryString: string | { query: string; values: any[]; } = queryStrings[iIdx];
					let queryValues: any[] = [];

					if (typeof (queryString) !== "string")
					{
						queryValues = queryString.values;
						queryString = queryString.query;
					}

					this.db.query (queryString, queryValues, 
						(err: mysql.MysqlError, results: any, fields: mysql.FieldInfo[]) =>
						{
							resolve ({ error: err, results: results, fields: fields });
						});
				}));
		}

		alldbresults = await Promise.all (promises);

		return (alldbresults);
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