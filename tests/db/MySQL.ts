import "mocha";
import { expect, should } from "chai";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/HotPreprocessor";
import { HotHTTPServer } from "../../src/HotHTTPServer";
import { MySQLSchema } from "../../src/schemas/mysql/MySQLSchema";
import { HelloWorldAPI } from "../server/HelloWorldAPI";
import { MySQLSchemaTable } from "../../src/schemas/mysql/MySQLSchemaTable";
import { MySQLSchemaField } from "../../src/schemas/mysql/MySQLSchemaField";
import { HotDBMySQL } from "../../src/schemas/HotMySQL";
import { HotDBGenerationType } from "../../src/schemas/HotDBSchema";

/**
 * This needs more test cases!!
 * 
 * It needs to test adding, removing, moving, renaming, and more.
 */
describe ("Database - MySQL Tests", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let server: HotHTTPServer = null;
		let api: HelloWorldAPI = null;
		let url: string = "";

		before (async () =>
			{
				common = new Common ();

				processor = common.processor;
				server = common.server;

				await common.startServer ();
				url = common.getUrl ();

				api = new HelloWorldAPI (common.getUrl (), server);
				api.db = new HotDBMySQL ();
				server.setAPI (api);
			});
		after (async () =>
			{
				await common.shutdown ();
			});

		it ("should connect to the database", async () =>
			{
				await api.db.connect ({
						"server": process.env["DATABASE_SERVER"],
						"username": process.env["DATABASE_USERNAME"],
						"password": process.env["DATABASE_PASSWORD"],
						"port": parseInt (process.env["DATABASE_PORT"]) || 3306,
						"database": process.env["DATABASE_SCHEMA"]
					});
			});
		it ("should create a new table", async () =>
			{
				let schema: MySQLSchema = new MySQLSchema ("test");
				schema.addTable (new MySQLSchemaTable ("testTable", [
						new MySQLSchemaField ("id", "INT(5)", "", true, true, true, false, true, false, true)
					]));
				api.db.schema = schema;

				let tableExists: boolean =  await api.db.tableCheck ("testTable");
				let structure: string[][] = await schema.generateStructure ();
				let results = await api.db.query (structure[0][0], []);

				expect (results.results, "Did not create a table!");

				tableExists =  await api.db.tableCheck ("testTable");

				expect (tableExists, "Did not create a table!");
			});
		it ("should add new fields to the table", async () =>
			{
				let schema: MySQLSchema = (<MySQLSchema>api.db.schema);

				schema.addFieldsToTable ("testTable", [
						new MySQLSchemaField ("name", "VARCHAR(255)", ""),
						new MySQLSchemaField ("description", "VARCHAR(255)", "")
					]);

				let structure: string[][] = 
					await schema.generateStructure (HotDBGenerationType.Modify, (<HotDBMySQL>api.db));
				let results = await api.db.multiQuery (structure[0]);

				expect (results[0].results, "Did not create a table!");
			});
		it ("should drop the table", async () =>
			{
				let results = await api.db.query ("DROP TABLE testTable;", []);

				should ().equal (results.error, null, "Did not drop the table!");
			});
		it ("should recreate the testTable", async () =>
			{
				let schema: MySQLSchema = new MySQLSchema ("test");
				schema.addTable (new MySQLSchemaTable ("freeUsers", [
					new MySQLSchemaField ({ name: "id", dataType: "INT(5)", primaryKey: true, uniqueIndex: true, 
											unsignedDataType: true, autoIncrement: true }),
					new MySQLSchemaField ({ name: "emailHash", dataType: "VARCHAR(128)", defaultValue: "" }),
					new MySQLSchemaField ({ name: "passwordHash", dataType: "VARCHAR(512)", defaultValue: "" }),
					new MySQLSchemaField ({ name: "verifiedHash", dataType: "VARCHAR(64)", defaultValue: "0" }),
					new MySQLSchemaField ({ name: "userData", dataType: "MEDIUMTEXT", defaultValue: "" }),
					new MySQLSchemaField ({ name: "deleteOnDate", dataType: "DATETIME", notNull: false, defaultValue: null })
				]));
				schema.addTable (new MySQLSchemaTable ("authHashes", [
					new MySQLSchemaField ({ name: "id", dataType: "INT(5)", primaryKey: true, uniqueIndex: true, 
											unsignedDataType: true, autoIncrement: true }),
					new MySQLSchemaField ({ name: "loginDate", dataType: "DATETIME", 
						defaultValue: "CURRENT_TIMESTAMP", strAroundDefaultValue: "" }),
					new MySQLSchemaField ({ name: "authHash", dataType: "VARCHAR(64)", defaultValue: "" }),
					new MySQLSchemaField ({ name: "location", dataType: "VARCHAR(64)", defaultValue: "" })
				]));
				api.db.schema = schema;

				await api.db.syncAllTables ();

				let tableExists: boolean =  await api.db.tableCheck ("freeUsers");
				expect (tableExists, "Did not create a table!");

				tableExists =  await api.db.tableCheck ("authHashes");
				expect (tableExists, "Did not create a table!");
			});
		it ("should NOT alter or recreate the testTable", async () =>
			{
				let schema: MySQLSchema = new MySQLSchema ("test");
				schema.addTable (new MySQLSchemaTable ("freeUsers", [
					new MySQLSchemaField ({ name: "id", dataType: "INT(5)", primaryKey: true, uniqueIndex: true, 
											unsignedDataType: true, autoIncrement: true }),
					new MySQLSchemaField ({ name: "emailHash", dataType: "VARCHAR(128)", defaultValue: "" }),
					new MySQLSchemaField ({ name: "passwordHash", dataType: "VARCHAR(512)", defaultValue: "" }),
					new MySQLSchemaField ({ name: "verifiedHash", dataType: "VARCHAR(64)", defaultValue: "0" }),
					new MySQLSchemaField ({ name: "userData", dataType: "MEDIUMTEXT", defaultValue: "" }),
					new MySQLSchemaField ({ name: "deleteOnDate", dataType: "DATETIME", notNull: false, defaultValue: null })
				]));
				schema.addTable (new MySQLSchemaTable ("authHashes", [
					new MySQLSchemaField ({ name: "id", dataType: "INT(5)", primaryKey: true, uniqueIndex: true, 
											unsignedDataType: true, autoIncrement: true }),
					new MySQLSchemaField ({ name: "loginDate", dataType: "DATETIME", 
						defaultValue: "CURRENT_TIMESTAMP", strAroundDefaultValue: "" }),
					new MySQLSchemaField ({ name: "authHash", dataType: "VARCHAR(64)", defaultValue: "" }),
					new MySQLSchemaField ({ name: "location", dataType: "VARCHAR(64)", defaultValue: "" })
				]));
				api.db.schema = schema;

				await api.db.syncAllTables ();

				/// @fixme Needs additional verification that the fields have not moved. 
				/// This is mostly here to just catch exceptions.

				let tableExists: boolean =  await api.db.tableCheck ("freeUsers");
				expect (tableExists, "Did not create a table!");

				tableExists =  await api.db.tableCheck ("authHashes");
				expect (tableExists, "Did not create a table!");
			});
	});