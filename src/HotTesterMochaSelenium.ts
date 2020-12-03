import Mocha from "mocha";
import { Suite, Test } from "mocha";

import { HotTestMap, HotTestPage, HotTestPath } from "./HotTestMap";
import { HotDestination, HotTester } from "./HotTester";
import { HotPreprocessor } from "./HotPreprocessor";
import { HotTestSeleniumDriver } from "./HotTestSeleniumDriver";

import { WebDriver } from "selenium-webdriver";

/**
 * The tester that uses Mocha to executes all tests.
 */
export class HotTesterMochaSelenium extends HotTester
{
	/**
	 * The mocha instance to run.
	 */
	mocha: Mocha;
	/**
	 * The timeout for each test.
	 */
	timeout: number;
	/**
	 * The suite to execute.
	 */
	suite: Suite;
	/**
	 * The base url to navigate to.
	 */
    url: string;
    /**
     * This event is executed after the Selenium driver and url have 
	 * been loaded.
     */
    onSetup: (driver: WebDriver) => Promise<void>;

	constructor (processor: HotPreprocessor, name: string, url: string, 
		testMaps: { [name: string]: HotTestMap; } = {}, onSetup: (driver: WebDriver) => Promise<void> = null)
	{
		let driver: HotTestSeleniumDriver = new HotTestSeleniumDriver ();

		super (processor, name, driver, testMaps);

        this.mocha = null;
        this.timeout = 10000;
		this.suite = null;
		this.url = url;
		this.onSetup = onSetup;
	}

	/**
	 * Executed when tests are started.
	 */
	async onTestStart (destination: HotDestination): Promise<boolean>
	{
		this.mocha = new Mocha ();
		this.suite = Mocha.Suite.create (this.mocha.suite, `${destination.page} Tests`);
		this.suite.timeout (this.timeout);

		this.suite.beforeAll (async () =>
			{
				let testDriver: HotTestSeleniumDriver = (<HotTestSeleniumDriver>this.driver);

				await testDriver.loadSeleniumDriver ();
				let driver: WebDriver = testDriver.driver;

				await driver.get (this.url);

				if (this.onSetup != null)
					await this.onSetup (driver);
			});

		return (true);
	}

	async onTestPagePathStart (destination: HotDestination, page: HotTestPage, 
		testPathName: string, testPath: HotTestPath, driver: HotTestSeleniumDriver): Promise<boolean>
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
						let testDriver: HotTestSeleniumDriver = (<HotTestSeleniumDriver>this.driver);
						await testDriver.driver.quit ();
					});
				this.mocha.run ((failures: number) =>
					{
						resolve ();
					});
			}));
	}
}