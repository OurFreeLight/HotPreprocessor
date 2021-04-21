import "mocha";
import { expect, should } from "chai";
import { Builder, By, until, WebDriver, Session } from "selenium-webdriver";

import * as oss from "os";

import { Common } from "./Common";

import { DeveloperMode, HotPreprocessor, HotTestDriver, HotTestElement, HotTester, HotTesterMochaSelenium } from "../../src/api";
import { HotTestMap } from "../../src/HotTestMap";

describe ("Browser Testing From Web Tests - Mocha Selenium - Development Mode", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let tester: HotTesterMochaSelenium = null;

		before (async () =>
			{
				processor = new HotPreprocessor ();
				processor.mode = DeveloperMode.Development;

				common = new Common (processor);
				await common.startServer ();

				let testMap: HotTestMap = new HotTestMap ([
						`page:testingWebPage -> Form-SignIn-FillOut`, 
						`page:testingWebPage -> Form-SignIn-FillOut2`
					]);
				tester = new HotTesterMochaSelenium (
					processor, "Tester", common.getUrl (), { testMap: testMap });
				tester.onSetup = async (driver: WebDriver): Promise<boolean> =>
					{
						await driver.get (`${common.getUrl ()}/tests/browser/index.htm`);
						// The biggest difference between this test and the manual tests, is 
						// that this has waitForTesters. This HAS to wait for the server to be ready.
						await driver.executeAsyncScript (`
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
									url: "/tests/browser/Testing-MochaSelenium.hott",
									name: "testingWebPage",
									testerName: "Tester",
									testerMap: "testMap",
									processor: processor
								});
							await HotPreprocessor.waitForTesters ();
							done ();`);

						return (false);
					};

				common.testerServer.addTester (tester);
			});
		after (async () =>
			{
				await common.shutdown ();
				await HotPreprocessor.wait (1000);
			});

		it ("should execute the server side tests from the web", async () =>
			{
				await common.testerServer.executeTests ("Tester", "testMap");
			});
	});