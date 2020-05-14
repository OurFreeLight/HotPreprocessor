import "mocha";
import { expect, should } from "chai";
import { By, until } from "selenium-webdriver";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/HotPreprocessor";

describe ("Browser Tests", () =>
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

		it ("should load the Hello World html", async () =>
			{
				await common.driver.executeAsyncScript (`
				var done = arguments[0];
				var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
				await HotPreprocessor.displayUrl ("/tests/browser/HelloWorld.hott");
				done ();`);
			});
		it ("should click the Hello World button", async () =>
			{
				let elm = await common.driver.wait (until.elementLocated (By.id ("helloWorld")));

				expect (elm).to.not.equal (null, "Page did not load!");

				await elm.click ();
			});
	});