import "mocha";
import { expect, should } from "chai";
import { By, until, WebDriver } from "selenium-webdriver";

import { Common } from "./Common";

import { DeveloperMode, HotHTTPServer, HotLogLevel, HotPreprocessor, HotTester, HotTesterMochaSelenium, HotTesterServer, HotTestMap, HotTestSeleniumDriver } from "../../src/api";
import { HelloWorldAPI } from "../server/HelloWorldAPI";

describe ("Hotsite Testing Multi Tests", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let server: HotHTTPServer = null;
		let testerServer: HotTesterServer = null;
		let tester: HotTesterMochaSelenium = null;
		const testerPort: number = 8184;
		const testerUrl: string = `http://127.0.0.1:${testerPort}`;

		before (async () =>
			{
				processor = new HotPreprocessor ();
				processor.mode = DeveloperMode.Development;
			});
		after (async () =>
			{
				await testerServer.shutdown ();
				await server.shutdown ();
			});

		it ("should load the HotSite in development mode", async () =>
			{
				server = new HotHTTPServer (processor);

				server.logger.logLevel = HotLogLevel.All;

				common = new Common (processor);

				let serverStarter = await HotTesterServer.startServer (testerUrl, testerPort, 4143, processor);
				testerServer = serverStarter.server;

				tester = new HotTesterMochaSelenium (processor, "HotTesterMochaSelenium", common.getUrl (server));
				testerServer.addTester (tester);

				await processor.loadHotSite (`./tests/hotsite/HotSite.json`);

				let api: HelloWorldAPI = new HelloWorldAPI (common.getUrl (server), server);
				await server.setAPI (api);
				await server.listen ();
			});
		it ("should have executed tests for ALL maps", async () =>
			{
				await testerServer.executeAllTests ("HotTesterMochaSelenium");
			});
	});