import "mocha";
import { expect, should } from "chai";
import { Builder, By, until, WebDriver, Session } from "selenium-webdriver";

import * as oss from "os";

import { Common } from "./Common";
import { Tester } from "./Tester";
import { TestDriver } from "./TestDriver";

import { DeveloperMode, HotPreprocessor, HotTestDriver, HotTestElement, HotTester } from "../../src/api";
import { HotTestMap } from "../../src/HotTestMap";

describe ("Browser Testing From Web Tests - Development Mode", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;

		before (async () =>
			{
				processor = new HotPreprocessor ();
				processor.mode = DeveloperMode.Development;

				common = new Common (processor);
				await common.load ();
				await common.startServer ();

				let testMap: HotTestMap = new HotTestMap (["page:testingWebPage -> Form-SignIn-FillOut"]);
				let tester: Tester = new Tester (processor, "Tester", common.getUrl (), new TestDriver (), { testMap: testMap });

				common.testerServer.addTester (tester);
				await common.driver.get (`${common.getUrl ()}/tests/browser/index.htm`);
			});
		after (async () =>
			{
				await common.driver.quit ();
				await common.shutdown ();
			});

		it ("should load the Testing html", async () =>
			{
				await common.driver.executeAsyncScript (`
				var done = arguments[0];
				window.HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
				var HotClient = HotPreprocessorWeb.HotClient;
				var HelloWorldAPI = HotPreprocessorTests.HelloWorldAPI;
				var processor = new HotPreprocessor ();
				processor.mode = HotPreprocessorWeb.DeveloperMode.Development;
				window.Hot = HotPreprocessorWeb.Hot;
				var client = new HotClient (processor);
				var helloWorldAPI = new HelloWorldAPI ("${common.getUrl ()}", client);
				helloWorldAPI.connection.api = helloWorldAPI;
				processor.api = helloWorldAPI;
				await HotPreprocessor.displayUrl ({
						url: "/tests/browser/Testing.hott",
						name: "testingWebPage",
						testerName: "Tester",
						testerMap: "testMap",
						processor: processor
					});
				await HotPreprocessor.waitForTesters ();
				done ();`);
			});
		it ("should execute the server side tests from the web", async () =>
			{
				await common.testerServer.executeTests ("Tester", "testMap");
			});
	});