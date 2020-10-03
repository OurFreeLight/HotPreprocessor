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

				let structure: string = await schema.generateStructure ();
				let results = await api.db.query (structure, []);

				expect (results.results, "Did not create a table!");
			});
		it ("should add new fields to the table", async () =>
			{
				let schema: MySQLSchema = (<MySQLSchema>api.db.schema);

				schema.addFieldsToTable ("testTable", [
						new MySQLSchemaField ("name", "VARCHAR(255)", ""),
						new MySQLSchemaField ("description", "VARCHAR(255)", "")
					]);

				let structure: string = await schema.generateStructure (
						HotDBGenerationType.Modify, (<HotDBMySQL>api.db));
				debugger;
				let results = await api.db.query (structure, []);

				expect (results.results, "Did not create a table!");
			});
	});