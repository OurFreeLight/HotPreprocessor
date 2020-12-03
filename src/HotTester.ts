import { HotPreprocessor } from "./HotPreprocessor";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, TestCaseObject } from "./HotRouteMethod";
import { HotTestDriver } from "./HotTestDriver";
import { HotTestMap, HotTestPage, HotTestPath } from "./HotTestMap";

/**
 * The destination for a test to take.
 */
export interface HotDestination
{
	/**
	 * The name of the map.
	 */
	mapName: string;
	/**
	 * The page to start at.
	 */
	page: string;
	/**
	 * The API route to start using.
	 */
	api: string;
	/**
	 * The paths to take on the page.
	 */
	paths: string[];
}

/**
 * Executes tests.
 */
export class HotTester
{
	/**
	 * The tester name.
	 */
	name: string;
	/**
	 * The associated processor.
	 */
	processor: HotPreprocessor;
	/**
	 * The test maps to test.
	 */
	testMaps: { [name: string]: HotTestMap; };
	/**
	 * The driver to use when running tests.
	 */
	driver: HotTestDriver;

	constructor (processor: HotPreprocessor, name: string, driver: HotTestDriver, testMaps: { [name: string]: HotTestMap; } = {})
	{
		this.processor = processor;
		this.name = name;
		this.testMaps = testMaps;
		this.driver = driver;
	}

	/**
	 * Executed when tests are started. If this returns true, it will 
	 * continue and execute all test paths. If this returns it will 
	 * skip all test paths and execute onTestEnd instead.
	 */
	async onTestStart? (destination: HotDestination): Promise<boolean>;
	/**
	 * Executed when an API test path has started. If this returns false, 
	 * the testPath will not be immediately executed afterwards.
	 */
	async onTestAPIPathStart? (destination: HotDestination, method: HotRouteMethod, 
		testName: string, driver: HotTestDriver): Promise<boolean>;
	/**
	 * Executed when an API test path has ended.
	 */
	async onTestAPIPathEnd? (destination: HotDestination, method: HotRouteMethod, 
		testName: string, driver: HotTestDriver, result: any): Promise<void>;
	/**
	 * Executed when page tests are started. If this returns false, the testPath will not be 
	 * immediately executed afterwards.
	 */
	async onTestPagePathStart? (destination: HotDestination, page: HotTestPage, 
		testPathName: string, testPath: HotTestPath, driver: HotTestDriver): Promise<boolean>;
	/**
	 * Executed when a page test has ended.
	 */
	async onTestPagePathEnd? (destination: HotDestination, testPath: HotTestPath, driver: HotTestDriver, result: any): Promise<void>;
	/**
	 * Executed when tests are finished.
	 */
	async onTestEnd? (destination: HotDestination): Promise<void>;

	/**
	 * Get a test page.
	 */
	getTestPage (destination: HotDestination): HotTestPage
	{
		let page = this.testMaps[destination.mapName].pages[destination.page];

		return (page);
	}

	/**
	 * Get a test path.
	 */
	getTestPath (destination: HotDestination, pathName: string): HotTestPath
	{
		let page = this.testMaps[destination.mapName].pages[destination.page];

		return (page.testPaths[pathName]);
	}

	/**
	 * Get a destination JSON object to use.
	 */
	static interpretDestination (mapName: string, destination: string): HotDestination
	{
		let newDestination: HotDestination = {
				mapName: mapName,
				page: "",
				api: "",
				paths: []
			};
		destination = destination.replace (/\s+/g, "");
		let strs: string[] = destination.split (/\-\>/g);
		let type: string = strs[0];
		let pos: number = type.indexOf ("page:");

		if (pos > -1)
			newDestination.page = type.substr (pos + "page:".length);

		pos = type.indexOf ("api:");

		if (pos > -1)
			newDestination.api = type.substr (pos + "api:".length);

		for (let iIdx = 1; iIdx < strs.length; iIdx++)
		{
			const newPath: string = strs[iIdx];

			newDestination.paths.push (newPath);
		}

		return (newDestination);
	}

	/**
	 * Execute an API's test path.
	 */
	async executeTestAPIPath (destination: HotDestination, method: HotRouteMethod, 
		testName: string, skipEventCalls: boolean = false): Promise<any>
	{
		let runTestPath: boolean = true;

		// A dumb hack to prevent any recursion that could occur.
		if (skipEventCalls === false)
		{
			if (this.onTestAPIPathStart != null)
				runTestPath = await this.onTestAPIPathStart (destination, method, testName, this.driver);
		}

		let result: any = null;

		if (runTestPath === true)
		{
			let testCaseObject: TestCaseObject = method.testCases[testName];

			if (testCaseObject == null)
				throw new Error (`HotTester: Test case object ${testName} does not exist!`);

			result = await testCaseObject.func (this.driver);
		}

		if (skipEventCalls === false)
		{
			if (this.onTestAPIPathEnd != null)
				await this.onTestAPIPathEnd (destination, method, testName, this.driver, result);
		}

		return (result);
	}

	/**
	 * Execute all test paths in an API route.
	 */
	async executeTestAPIPaths (destination: HotDestination): Promise<any[]>
	{
		let results: any[] = [];
		let testMap: HotTestMap = this.testMaps[destination.mapName];

		if (testMap == null)
			throw new Error (`HotTester: Map ${destination.mapName} does not exist!`);

		if (this.processor.api == null)
			throw new Error (`HotTester: Associated processor does not have an API!`);

		let route: HotRoute = this.processor.api.routes[destination.api];

		if (route == null)
			throw new Error (`HotTester: API does not have route ${destination.api}!`);

		// Iterate through each path in the destination until complete.
		for (let iIdx = 0; iIdx < destination.paths.length; iIdx += 2)
		{
			let name: string = destination.paths[iIdx];
			let method: HotRouteMethod = route.getMethod (name);
			let testName: string = destination.paths[iIdx + 1];
			let result: any = await this.executeTestAPIPath (destination, method, testName);

			results.push (result);
		}

		return (results);
	}

	/**
	 * Execute a test page path.
	 */
	async executeTestPagePath (destination: HotDestination, page: HotTestPage, 
		testPathName: string, testPath: HotTestPath, skipEventCalls: boolean = false): Promise<any>
	{
		this.driver.page = page;
		let runTestPath: boolean = true;

		// A dumb hack to prevent any recursion that could occur.
		if (skipEventCalls === false)
		{
			if (this.onTestPagePathStart != null)
				runTestPath = await this.onTestPagePathStart (destination, page, testPathName, testPath, this.driver);
		}

		let result: any = null;

		if (runTestPath === true)
			result = await testPath (this.driver);

		if (skipEventCalls === false)
		{
			if (this.onTestPagePathEnd != null)
				await this.onTestPagePathEnd (destination, testPath, this.driver, result);
		}

		return (result);
	}

	/**
	 * Execute all test paths in a page.
	 */
	async executeTestPagePaths (destination: HotDestination): Promise<any[]>
	{
		let results: any[] = [];
		let testMap: HotTestMap = this.testMaps[destination.mapName];

		if (testMap == null)
			throw new Error (`HotTester: Map ${destination.mapName} does not exist!`);

		let page: HotTestPage = testMap.pages[destination.page];

		if (page == null)
			throw new Error (`HotTester: Page ${destination.page} does not exist!`);

		// Iterate through each path in the destination until complete.
		for (let iIdx = 0; iIdx < destination.paths.length; iIdx++)
		{
			let name: string = destination.paths[iIdx];
			let testPath: HotTestPath = page.testPaths[name];
			let result: any = await this.executeTestPagePath (destination, page, name, testPath);

			results.push (result);
		}

		return (results);
	}

	/**
	 * Execute the tests.
	 */
	async execute (mapName: string): Promise<void>
	{
		let map: HotTestMap = this.testMaps[mapName];

		if (map == null)
			throw new Error (`HotTester: Map ${mapName} does not exist!`);

		for (let iIdx = 0; iIdx < map.destinations.length; iIdx++)
		{
			let destinationStr: string = map.destinations[iIdx];
			let destination: HotDestination = HotTester.interpretDestination (mapName, destinationStr);
			let runTestPaths: boolean = true;

			if (this.onTestStart != null)
				runTestPaths = await this.onTestStart (destination);

			if (runTestPaths === true)
			{
				if (destination.page !== "")
					await this.executeTestPagePaths (destination);

				if (destination.api !== "")
					await this.executeTestAPIPaths (destination);
			}
	
			if (this.onTestEnd != null)
				await this.onTestEnd (destination);
		}
	}
}