import "mocha";

import { Common } from "./Common";

import { HotPreprocessor, HotTestDriver, HotTestElement, HotTester, HotTesterMochaSelenium } from "../../src/api";
import { HotTestMap } from "../../src/HotTestMap";
import { WebDriver } from "selenium-webdriver";

describe ("Browser Manual Testing From Server Tests - Mocha Selenium - Development Mode", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let tester: HotTesterMochaSelenium = null;

		before (async () =>
			{
				processor = new HotPreprocessor ();

				common = new Common (processor);
				await common.startServer ();

				let testMap: HotTestMap = new HotTestMap ([
									`page:testingManualPage -> Form-SignIn-FillOut`, 
									`page:testingManualPage -> Form-SignIn-FillOut2`
								],
					{
						"testingManualPage": {
								"testElements": {
									"username": new HotTestElement ("username"),
									"password": new HotTestElement ("password"),
									"signIn": new HotTestElement ("signIn"),
									"result": new HotTestElement ("result")
								},
								"testPaths": {
									"Form-SignIn-FillOut": async (driver: HotTestDriver): Promise<any> =>
										{
											await driver.waitForTestElement ("username");
											await driver.run ([
													["username", "sendKeys", "hi"],
													["password", "sendKeys", "f"],
													["signIn", "click"],
												]);
											await driver.wait (50);
											await driver.assertElementValue ("result", "\"Hello!\"", "Element result is incorrect!");
										}, 
									"Form-SignIn-FillOut2": async (driver: HotTestDriver): Promise<any> =>
										{
											await driver.waitForTestElement ("*name");
											await driver.run ([
													["*name", "sendKeys", "a"],
													[">#passwordText", "sendKeys", "a"],
													["signIn", "click"],
												]);
											await driver.wait (50);
											await driver.assertElementValue (
												"result", `{"error":"You didn't say hi."}`, "Element result is incorrect!");
										}
								}
							}
					});

				tester = new HotTesterMochaSelenium (processor, "Tester", 
							common.getUrl (), { testMap: testMap });
				tester.onSetup = async (driver: WebDriver): Promise<boolean> =>
					{
						await driver.get (`${common.getUrl ()}/tests/browser/index.htm`);
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
							await HotPreprocessor.displayUrl (
								"/tests/browser/Testing-CustomTester.hott", "Testing!", processor);
							done ();`);

						return (false);
					};

				processor.addTester (tester);
			});
		after (async () =>
			{
				await common.shutdown ();
				await HotPreprocessor.wait (1000);
			});

		it ("should execute the manual server side tests", async () =>
			{
				await processor.executeTests ("Tester", "testMap");
			});
	});