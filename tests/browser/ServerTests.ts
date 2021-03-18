import "mocha";
import { expect, should } from "chai";
import { By, until } from "selenium-webdriver";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/api";

describe ("Browser-Server Tests", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;

		before (async () =>
			{
				processor = new HotPreprocessor ();

				common = new Common ();
				await common.load ();

				await HotPreprocessor.wait (100);
				await common.startServer (true);

				/// @fixme Dumb wait hack, gotta figure out why errors are thrown without this wait.
				await HotPreprocessor.wait (100);
				await common.driver.get (`${common.getUrl ()}/tests/browser/Test.hott`);
				await HotPreprocessor.wait (100);
			});
		after (async () =>
			{
				debugger;
				await common.driver.quit ();
				await common.shutdown ();
			});

		it ("should click the test button", async () =>
			{

				let elm = await common.driver.wait (until.elementLocated (By.id ("testButton")));
				expect (elm).to.not.equal (null, "Page did not load!");
				await elm.click ();

				elm = await common.driver.findElement (By.id ("testButton"));
				let value: string = await elm.getAttribute ("value");
				expect (value).to.equal ("Worked!", "Button was not clicked!");
			});
	});