import "mocha";
import { expect, should } from "chai";
import fetch from "cross-fetch";
import FormData from "form-data";

import * as fs from "fs";
import * as ppath from "path";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/HotPreprocessor";
import { HotHTTPServer } from "../../src/HotHTTPServer";
import { HelloWorldAPI } from "./HelloWorldAPI";
import { DeveloperMode } from "../../src/Hot";
import { HotTestMap } from "../../src/HotTestMap";
import { HotTesterMochaSelenium } from "../../src/HotTesterMochaSelenium";
import { HotTestElement } from "../../src/HotTestElement";
import { HotTestDriver } from "../../src/api";

describe ("API Testing Tests", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let server: HotHTTPServer = null;
		let api: HelloWorldAPI = null;
		let url: string = "";

		before (async () =>
			{
				processor = new HotPreprocessor ();
				processor.mode = DeveloperMode.Development;

				common = new Common (processor);
				await common.startServer ();

				let testMap: HotTestMap = new HotTestMap (["api:hello_world -> test_response -> TestAPIResponse"]);
				let tester: HotTesterMochaSelenium = new HotTesterMochaSelenium (processor, 
					"Tester", common.getUrl (), { testMap: testMap });

				common.testerServer.addTester (tester);

				url = common.getUrl ();
			});
		after (async () =>
			{
				await common.shutdown ();
			});

		it ("should execute the hello world tests", async () =>
			{
				await common.testerServer.executeTests ("Tester", "testMap");
			});
	});