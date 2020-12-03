import Mocha from "mocha";
import { Suite, Test } from "mocha";

import { HotTestMap, HotTestPage, HotTestPath } from "./HotTestMap";
import { HotDestination, HotTester } from "./HotTester";
import { HotTestDriver } from "./HotTestDriver";
import { HotPreprocessor } from "./HotPreprocessor";

/**
 * The tester that uses Mocha to executes all tests.
 */
export class HotTesterMocha extends HotTester
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
    baseUrl: string;
    /**
     * The Mocha beforeAll event to call before any tests are executed.
     */
    beforeAll: () => Promise<void>;
    /**
     * The Mocha afterAll event to call before any tests are executed.
     */
    afterAll: () => Promise<void>;

	constructor (processor: HotPreprocessor, name: string, baseUrl: string, driver: HotTestDriver, 
		testMaps: { [name: string]: HotTestMap; } = {},beforeAll: () => Promise<void> = null, 
		afterAll: () => Promise<void> = null)
	{
		super (processor, name, driver, testMaps);

        this.mocha = null;
        this.timeout = 10000;
		this.suite = null;
        this.baseUrl = baseUrl;
        this.beforeAll = beforeAll;
        this.afterAll = afterAll;
	}

	/**
	 * Executed when tests are started.
	 */
	async onTestStart (destination: HotDestination): Promise<boolean>
	{
		this.mocha = new Mocha ();
		this.suite = Mocha.Suite.create (this.mocha.suite, `${destination.page} Tests`);
		this.suite.timeout (this.timeout);

        if (this.beforeAll != null)
		    this.suite.beforeAll (this.beforeAll);

		return (true);
	}

	async onTestPagePathStart (destination: HotDestination, page: HotTestPage, 
		testPathName: string, testPath: HotTestPath, driver: HotTestDriver): Promise<boolean>
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
				this.suite.afterAll (this.afterAll);
				this.mocha.run ((failures: number) =>
					{
						resolve ();
					});
			}));
	}
}