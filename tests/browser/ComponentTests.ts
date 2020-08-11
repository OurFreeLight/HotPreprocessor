import "mocha";
import { expect, should } from "chai";
import { By, until } from "selenium-webdriver";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/HotPreprocessorWeb";

describe ("Component Tests", () =>
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
				common.shutdown ();
			});
 
		it ("should load the component tests html", async () =>
			{
/**
Execute this code to debug in browser:
(async () =>
{
	var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
	var HotClient = HotPreprocessorWeb.HotClient;
	var HelloWorld = HotPreprocessorTests.HelloWorld;
	var HelloWorldAPI = HotPreprocessorTests.HelloWorldAPI;
	var processor = new HotPreprocessor ();
	var helloWorldAPI = new HelloWorldAPI ("${common.getUrl ()}");
	helloWorldAPI.connection = new HotClient (processor);
	helloWorldAPI.connection.api = helloWorldAPI;
	processor.addComponent (new HelloWorld (processor, helloWorldAPI));
	await HotPreprocessor.displayUrl ("/tests/browser/ComponentTests.hott", processor);
})();
*/
				await common.driver.executeAsyncScript (`
				var done = arguments[0];
				var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
				var HotClient = HotPreprocessorWeb.HotClient;
				var HelloWorld = HotPreprocessorTests.HelloWorld;
				var HelloWorldAPI = HotPreprocessorTests.HelloWorldAPI;
				var processor = new HotPreprocessor ();
				var helloWorldAPI = new HelloWorldAPI ("${common.getUrl ()}");
				helloWorldAPI.connection = new HotClient (processor);
				helloWorldAPI.connection.api = helloWorldAPI;
				processor.addComponent (new HelloWorld (processor, helloWorldAPI));
				await HotPreprocessor.displayUrl ("/tests/browser/ComponentTests.hott", "Hello World Components!", processor);
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
		it ("should dynamically create a Hello World button", async () =>
			{
				await common.driver.executeAsyncScript (`
				var done = arguments[0];
				var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
				HotPreprocessor.addHtml ("body", "<hello-world id = \\"dynamicHelloWorld\\" value = \\"Send\\"></hello-world>");
				done ();`);
			});
		it ("should click the new Hello World button and verify the API call result", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("message")));
				await elm.sendKeys ("hi");

				elm = await common.driver.wait (until.elementLocated (By.id ("dynamicHelloWorld")));
				await elm.click ();

				elm = common.driver.findElement (By.id ("buttonClicked"));
				let value: string = await elm.getAttribute ("innerHTML");
				let jsonObj = JSON.parse (value);
				expect (jsonObj).to.equal ("Hello!");
			});
	});