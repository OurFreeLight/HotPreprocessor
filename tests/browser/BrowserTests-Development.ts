import "mocha";
import { expect, should } from "chai";
import { By, until } from "selenium-webdriver";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/api";

describe ("Browser Tests - Development Mode", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;

		before (async () =>
			{
				processor = new HotPreprocessor ();

				common = new Common ();
				await common.load ();

				await common.startServer ();
				await common.driver.get (`${common.getUrl ()}/tests/browser/index.htm`);
			});
		after (async () =>
			{
				await common.driver.quit ();
				await common.shutdown ();
			});

		it ("should load the Hello World html", async () =>
			{
/**
Execute this code to debug in browser:
(async () =>
{
	window.HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
	window.Hot = HotPreprocessorWeb.Hot;
	var helloWorldAPI = new HelloWorldAPI ("${common.getUrl ()}");
	helloWorldAPI.connection = new HotClient (processor);
	helloWorldAPI.connection.api = helloWorldAPI;
	await HotPreprocessor.displayUrl ("/tests/browser/HelloWorld.hott");
})();
*/

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
				await HotPreprocessor.displayUrl (
					"/tests/browser/HelloWorld.hott", "Hello World!", processor, { testData: "TESTING" });
				done ();`);
			});
		it ("should click the Hello World button", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("helloWorld")));
				expect (elm).to.not.equal (null, "Page did not load!");
				await elm.click ();

				elm = common.driver.findElement (By.id ("buttonClicked"));
				let value: string = await elm.getAttribute ("innerHTML");
				expect (value).to.equal ("Clicked", "Button was not clicked!");
			});
		it ("should send a hi to the hello world api", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("message")));
				await elm.sendKeys ("hi");

				// Tests Hot.apiCall
				elm = await common.driver.wait (until.elementLocated (By.id ("testHelloWorldAPI")));
				await elm.click ();

				elm = common.driver.findElement (By.id ("buttonClicked"));
				let value: string = await elm.getAttribute ("innerHTML");
				let jsonObj = JSON.parse (value);

				expect (jsonObj).to.equal ("Hello!");

				// Tests the constructed API call route method functions
				elm = await common.driver.wait (until.elementLocated (By.id ("testHelloWorldAPI2")));
				await elm.click ();

				elm = common.driver.findElement (By.id ("buttonClicked"));
				value = await elm.getAttribute ("innerHTML");
				jsonObj = JSON.parse (value);

				expect (jsonObj).to.equal ("Hello!");
			});
		it ("should test the test attribute that uses a JS executor ${}", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("message")));
				let value: string = await elm.getAttribute ("data-test");

				expect (value).to.equal ("TESTING", "Test attribute was incorrect!");
			});
		it ("should test the test2 attribute that uses ${} and !{}", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("message")));
				let value: string = await elm.getAttribute ("data-test2");

				expect (value).to.equal ("test2data", "Test attribute was incorrect!");
			});
		it ("should test the test3 attribute ?() and STR{}", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("message")));
				let value: string = await elm.getAttribute ("data-test-object-name");

				expect (value).to.equal ("messageTestObjectName", "Test object name was incorrect!");
			});
	});