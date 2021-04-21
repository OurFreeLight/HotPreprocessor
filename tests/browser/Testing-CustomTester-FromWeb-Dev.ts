import "mocha";
import { expect, should } from "chai";
import { Builder, By, until, WebDriver, Session } from "selenium-webdriver";

import * as oss from "os";

import { Common } from "./Common";
import { Tester } from "./Tester";
import { TestDriver } from "./TestDriver";

import { DeveloperMode, HotPreprocessor, HotTestDriver, HotTestElement, HotTester } from "../../src/api";
import { HotTestMap } from "../../src/HotTestMap";

describe ("Browser Testing From Web Tests - Custom Tester - Development Mode", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let tester: Tester = null;
		let testerDriver: TestDriver = null;

		before (async () =>
			{
				processor = new HotPreprocessor ();
				processor.mode = DeveloperMode.Development;

				common = new Common (processor);
				await common.startServer ();

				let testMap: HotTestMap = new HotTestMap ([
						"page:testingWebPage -> Form-SignIn-FillOut"
					]);
				testerDriver = new TestDriver ();
				tester = new Tester (processor, "Tester", common.getUrl (), testerDriver, { testMap: testMap });
				tester.testerType = "web";

				common.testerServer.addTester (tester);
			});
		after (async () =>
			{
				await common.shutdown ();
				await HotPreprocessor.wait (1000);
			});

		it ("should execute the server side tests from the web using a custom tester", async () =>
			{
				await common.testerServer.executeTests ("Tester", "testMap");
			});
	});