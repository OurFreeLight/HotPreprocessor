import Mocha from "mocha";
import { Suite, Test } from "mocha";

import { HotTestMap, HotTestPage, HotTestPath } from "../../src/HotTestMap";
import { HotDestination, HotTester } from "../../src/HotTester";
import { TestDriver } from "./TestDriver";
import { WebDriver } from "selenium-webdriver";
import { HotTestDriver } from "../../src/HotTestDriver";
import { HotPreprocessor } from "../../src/HotPreprocessor";

/**
 * The tester that tests testing capabilities for 
 * testing purposes using HotTester.
 * Testing. Test. Test. Test. Test. Test. Test.
 * Test. Testing. Test. Test. Test. Test. Test.
 * Test. Test. Testing. Test. Test. Test. Test.
 * Test. Test. Test. Testing. Test. Test. Test.
 * Test. Test. Test. Test. Testing. Test. Test.
 * Test. Test. Test. Test. Test. Testing. Test.
 * Test. Test. Test. Test. Test. Test. Testing.
 */
export class Tester extends HotTester
{
	/**
	 * The mocha instance to run.
	 */
	mocha: Mocha;
	/**
	 * The suite to execute.
	 */
	suite: Suite;
	/**
	 * The type of tester to execute.
	 */
	testerType: string;

	constructor (processor: HotPreprocessor, name: string, baseUrl: string, 
		driver: TestDriver, testMaps: { [name: string]: HotTestMap; } = {})
	{
		super (processor, name, baseUrl, driver, testMaps);

		this.mocha = null;
		this.suite = null;
		this.testerType = "server";
	}

	/**
	 * Executed when setting up the tester.
	 * 
	 * @returns If this returns true, the driver will execute whatever is after this.
	 * For example, if the driver is HotTestSeleniumDriver, the url will be loaded.
	 */
	async setup (url: string = "", destinationKey: string = ""): Promise<void>
	{
		let testDriver: TestDriver = (<TestDriver>this.driver);

		await testDriver.loadSeleniumDriver ();
		let driver: WebDriver = testDriver.driver;

		await driver.get (`${this.baseUrl}/tests/browser/index.htm`);

		if (this.testerType === "server")
		{
			await driver.executeAsyncScript (`
				var done = arguments[0];
				window.HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
				var HotClient = HotPreprocessorWeb.HotClient;
				var HelloWorldAPI = HotPreprocessorTests.HelloWorldAPI;
				var processor = new HotPreprocessor ();
				processor.mode = HotPreprocessorWeb.DeveloperMode.Development;
				window.Hot = HotPreprocessorWeb.Hot;
				var client = new HotClient (processor);
				var helloWorldAPI = new HelloWorldAPI ("${this.baseUrl}", client);
				helloWorldAPI.connection.api = helloWorldAPI;
				processor.api = helloWorldAPI;
				await HotPreprocessor.displayUrl (
					"/tests/browser/Testing-CustomTester.hott", "Testing!", processor);
				done ();`);
		}

		if (this.testerType === "web")
		{
			await driver.executeAsyncScript (`
				var done = arguments[0];
				window.HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
				var HotClient = HotPreprocessorWeb.HotClient;
				var HelloWorldAPI = HotPreprocessorTests.HelloWorldAPI;
				var processor = new HotPreprocessor ();
				processor.mode = HotPreprocessorWeb.DeveloperMode.Development;
				window.Hot = HotPreprocessorWeb.Hot;
				var client = new HotClient (processor);
				var helloWorldAPI = new HelloWorldAPI ("${this.baseUrl}", client);
				helloWorldAPI.connection.api = helloWorldAPI;
				processor.api = helloWorldAPI;
				await HotPreprocessor.displayUrl ({
						url: "/tests/browser/Testing-CustomTester.hott",
						name: "testingWebPage",
						testerName: "Tester",
						testerMap: "testMap",
						processor: processor
					});
				await HotPreprocessor.waitForTesters ();
				done ();`);
		}
	}

	/**
	 * Executed when destroying up the tester.
	 */
	async destroy (): Promise<void>
	{
		if (this.driver != null)
			await this.driver.destroy ();
	}

	/**
	 * Executed when tests are started.
	 */
	async onTestStart (destination: HotDestination, url: string, destinationKey: string = ""): Promise<boolean>
	{
		let destinationName: string = "";

		if (destinationKey !== "")
			destinationName = ` - ${destinationKey}`;

		this.mocha = new Mocha ();
		this.suite = Mocha.Suite.create (this.mocha.suite, `${destination.page}${destinationName} Tests`);
		this.suite.timeout (10000);

		this.suite.beforeAll (async () =>
			{
			});

		return (true);
	}

	async onTestPagePathStart (destination: HotDestination, page: HotTestPage, 
		testPathName: string, testPath: HotTestPath, continueWhenTestIsComplete: boolean = false): Promise<boolean>
	{
		this.suite.addTest (new Test (testPathName, async () =>
			{
				// The true is a dumb hack to prevent any recursion.
				await this.executeTestPagePath (destination, page, testPathName, testPath, true);
			}));

		return (false);
	}

	async onTestEnd (destination: HotDestination): Promise<void>
	{
		return (await new Promise ((resolve, reject) =>
			{
				this.suite.afterAll (async () =>
					{
					});
				this.mocha.run ((failures: number) =>
					{
						resolve ();
					});
			}));
	}
}