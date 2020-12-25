import { HotPreprocessor } from "./HotPreprocessor";
import { HotRoute } from "./HotRoute";
import { HotRouteMethod, TestCaseObject } from "./HotRouteMethod";
import { HotTestDriver } from "./HotTestDriver";
import { HotTestMap, HotTestPage, HotTestPath } from "./HotTestMap";

/**
 * The test stop that is executed as either a destination or 
 * a path.
 */
export interface HotTestStop
{
	/**
	 * The url to start at. Must be an absolute url.
	 */
	url: string;
	/**
	 * A command to execute. Can be:
	 * * waitForTesterAPIData
	 *   * This will wait for the tester API to receive data.
	 * * wait(x)
	 *   * This will wait for x number of milliseconds.
	 */
	cmd: string;
	/**
	 * The destination to execute.
	 */
	dest: string;
	/**
	 * The path to execute.
	 */
	path: string;
}

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
	paths: HotTestStop[];
}

/**
 * Executes tests.
 */
export abstract class HotTester
{
	/**
	 * The tester name.
	 */
	name: string;
	/**
	 * The base url that will construct future urls.
	 */
	baseUrl: string;
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
	/**
	 * Has this tester finished loading?
	 */
	finishedLoading: boolean;
	/**
	 * Has this tester finished setting up?
	 */
	hasBeenSetup: boolean;
	/**
	 * Has this tester finished setting up?
	 */
	hasBeenDestroyed: boolean;

	constructor (processor: HotPreprocessor, name: string, baseUrl: string, 
		driver: HotTestDriver, testMaps: { [name: string]: HotTestMap; } = {})
	{
		this.processor = processor;
		this.name = name;
		this.baseUrl = baseUrl;
		this.testMaps = testMaps;
		this.driver = driver;
		this.finishedLoading = false;
		this.hasBeenSetup = false;
		this.hasBeenDestroyed = false;
	}

	/**
	 * Executed when setting up the tester.
	 */
	abstract setup (url: string, destinationKey?: string): Promise<void>;
	/**
	 * Executed when destroying up the tester.
	 */
	abstract destroy (): Promise<void>;

	/**
	 * Executed when tests are started. If this returns true, it will 
	 * continue and execute all test paths. If this returns it will 
	 * skip all test paths and execute onTestEnd instead.
	 */
	async onTestStart? (destination: HotDestination, url: string, destinationKey?: string): Promise<boolean>;
	/**
	 * Executed when an API test path has started. If this returns false, 
	 * the testPath will not be immediately executed afterwards.
	 */
	async onTestAPIPathStart? (destination: HotDestination, method: HotRouteMethod, 
		testName: string, continueWhenTestIsComplete?: boolean): Promise<boolean>;
	/**
	 * Executed when an API test path has ended.
	 */
	async onTestAPIPathEnd? (destination: HotDestination, method: HotRouteMethod, 
		testName: string, result: any, continueWhenTestIsComplete?: boolean): Promise<void>;
	/**
	 * Executed when page tests are started. If this returns false, the testPath will not be 
	 * immediately executed afterwards.
	 */
	async onTestPagePathStart? (destination: HotDestination, page: HotTestPage, 
		testPathName: string, testPath: HotTestPath, continueWhenTestIsComplete?: boolean): Promise<boolean>;
	/**
	 * Executed when a page test has ended.
	 */
	async onTestPagePathEnd? (destination: HotDestination, testPath: HotTestPath, 
		result: any, continueWhenTestIsComplete?: boolean): Promise<void>;
	/**
	 * Executed when tests are finished.
	 */
	async onTestEnd? (destination: HotDestination): Promise<void>;

	/**
	 * Executed when this tester has been executed from the API.
	 */
	async onExecute? (): Promise<void>;
	/**
	 * Executed when this tester has finished loading all data from the API.
	 */
	async onFinishedLoading? (): Promise<void>;

	/**
	 * Waits for the API to finish loading all data.
	 */
	async waitForData (): Promise<void>
	{
		while (this.finishedLoading === false)
			await HotPreprocessor.wait (10);
	}

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
		let strs: string[] = destination.split (/\-\>/g);
		let type: string = strs[0];
		let getType: (typeStr: string, typeDelimiter: string) => string = 
			(typeStr: string, typeDelimiter: string): string =>
			{
				let pos: number = typeStr.indexOf (typeDelimiter);
				let typeValue: string = "";
		
				if (pos > -1)
				{
					typeValue = typeStr.substr (pos + typeDelimiter.length);
					typeValue = typeValue.trim ();
				}

				return (typeValue);
			};

		newDestination.page = getType (type, "page:");
		newDestination.api = getType (type, "api:");

		for (let iIdx = 1; iIdx < strs.length; iIdx++)
		{
			let newPathStr: string = strs[iIdx];
			let newPath: HotTestStop = {
					url: "",
					cmd: "",
					dest: "",
					path: ""
				};

			newPathStr = newPathStr.trim ();
			newPath.dest = getType (newPathStr, "dest:");
			newPath.url = getType (newPathStr, "url:");
			newPath.cmd = getType (newPathStr, "cmd:");

			if ((newPath.dest == "") && (newPath.url == "") && (newPath.cmd == ""))
				newPath.path = newPathStr;

			newDestination.paths.push (newPath);
		}

		return (newDestination);
	}

	/**
	 * Execute an API's test path.
	 */
	async executeTestAPIPath (destination: HotDestination, method: HotRouteMethod, 
		testName: string, skipEventCalls: boolean = false, continueWhenTestIsComplete: boolean = false): Promise<any>
	{
		let runTestPath: boolean = true;

		// A dumb hack to prevent any recursion that could occur.
		if (skipEventCalls === false)
		{
			if (this.onTestAPIPathStart != null)
				runTestPath = await this.onTestAPIPathStart (destination, method, testName, continueWhenTestIsComplete);
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
				await this.onTestAPIPathEnd (destination, method, testName, result, continueWhenTestIsComplete);
		}

		return (result);
	}

	/**
	 * Execute all test paths in an API route.
	 * 
	 * @fixme This needs a better implementation...
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
			let stop: HotTestStop = destination.paths[iIdx];
			let pathName: string = stop.path;
			let method: HotRouteMethod = route.getMethod (pathName);
			let nextStop: HotTestStop = destination.paths[iIdx + 1];
			let testName: string = nextStop.path;
			let result: any = await this.executeTestAPIPath (destination, method, testName);

			results.push (result);
		}

		return (results);
	}

	/**
	 * Execute a test page path.
	 */
	async executeTestPagePath (destination: HotDestination, page: HotTestPage, testPathName: string, 
		testPath: HotTestPath, skipEventCalls: boolean = false, continueWhenTestIsComplete: boolean = false): Promise<any>
	{
		this.driver.page = page;
		let runTestPath: boolean = true;

		// A dumb hack to prevent any recursion that could occur.
		if (skipEventCalls === false)
		{
			if (this.onTestPagePathStart != null)
				runTestPath = await this.onTestPagePathStart (destination, page, testPathName, testPath, continueWhenTestIsComplete);
		}

		let result: any = null;

		if (runTestPath === true)
		{
			if (testPath == null)
			{
				debugger;
				throw new Error (`HotTester: Test path ${testPathName} does not have a function!`);
			}

			result = await testPath (this.driver);
		}

		if (skipEventCalls === false)
		{
			if (this.onTestPagePathEnd != null)
				await this.onTestPagePathEnd (destination, testPath, result, continueWhenTestIsComplete);
		}

		return (result);
	}

	/**
	 * Execute all test paths in a page.
	 */
	async executeTestPagePaths (destination: HotDestination, continueWhenTestIsComplete: boolean = false): Promise<any[]>
	{
		let results: any[] = [];
		let testMap: HotTestMap = this.testMaps[destination.mapName];

		/// @fixme For some reason the errors being thrown here are not being thrown.
		if (testMap == null)
			throw new Error (`HotTester: Map ${destination.mapName} does not exist!`);

		let page: HotTestPage = testMap.pages[destination.page];

		if (page == null)
			throw new Error (`HotTester: Page ${destination.page} does not exist!`);

		// Iterate through each path in the destination until complete.
		for (let iIdx = 0; iIdx < destination.paths.length; iIdx++)
		{
			let stop: HotTestStop = destination.paths[iIdx];
			let result: any = null;

			if (stop.dest !== "")
			{
				if (testMap.destinations instanceof Array)
					throw new Error (`HotTester: When using type 'dest' in a destination string, all destinations in map ${destination.mapName} must be named.`);

				let destinationStr: string = testMap.destinations[stop.dest];
				let newDestination: HotDestination = HotTester.interpretDestination (destination.mapName, destinationStr);

				debugger;
				result = await this.executeTestPagePaths (newDestination, true);
				debugger;
			}

			if (stop.url !== "")
				await this.driver.navigateToUrl (stop.url);

			if (stop.cmd !== "")
			{
				let hasCmd: (input: string, cmd: string, hasArguments: boolean) => boolean = 
					(input: string, cmd: string, hasArguments: boolean): boolean =>
					{
						let result: boolean = false;

						if (stop.cmd === cmd)
							result = true;

						if ((stop.cmd.indexOf (cmd) > -1) && (stop.cmd.indexOf ("(") > -1))
							result = true;

						return (result);
					};
				/**
				 * Get the arguments in a command. This will only return a 
				 * single argument for now.
				 * 
				 * @fixme Add support for multiple arguments.
				 */
				let getCmdArgs: (input: string) => string[] = 
					(input: string): string[] =>
					{
						let results: string[] = [];
						let matches = input.match (/\(.*\)/g);

						if (matches != null)
							results.push (matches[0]);

						if (results.length < 1)
							throw new Error (`HotTester: Command ${input} requires arguments, but none were supplied.`);

						return (results);
					};

				if (hasCmd (stop.cmd, "waitForTesterAPIData", false) === true)
				{
					debugger;
					this.finishedLoading = false;
					await this.waitForData ();
				}

				if (hasCmd (stop.cmd, "wait", true) === true)
				{
					debugger;
					let args: string[] = getCmdArgs (stop.cmd);
					let numMilliseconds: number = parseInt (args[0]);

					await HotPreprocessor.wait (numMilliseconds);
				}

				if (hasCmd (stop.cmd, "waitForTestObject", true) === true)
				{
					let args: string[] = getCmdArgs (stop.cmd);
					let testObject: string = JSON.parse (args[0]);

					await this.driver.waitForTestElement (testObject);
				}
			}

			if (stop.path !== "")
			{
				let name: string = stop.path;
				let testPath: HotTestPath = page.testPaths[name];
				result = await this.executeTestPagePath (destination, page, name, testPath, false, continueWhenTestIsComplete);
			}

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

		let routeKey: string = this.processor.getRouteKeyFromName (mapName);
		let url: string = `${this.baseUrl}${routeKey}`;
		let executeDestination: (destinationStr: string, destinationKey?: string) => Promise<void> = 
			async (destinationStr: string, destinationKey: string = "") =>
			{
				let destination: HotDestination = HotTester.interpretDestination (mapName, destinationStr);
				let runTestPaths: boolean = true;
	
				if (this.setup != null)
				{
					if (this.hasBeenSetup === false)
					{
						await this.setup (url, destinationKey);
						this.hasBeenSetup = true;
						this.hasBeenDestroyed = false;
					}
				}
	
				if (this.onTestStart != null)
					runTestPaths = await this.onTestStart (destination, url, destinationKey);
	
				if (runTestPaths === true)
				{
					if (destination.page !== "")
						await this.executeTestPagePaths (destination);
	
					if (destination.api !== "")
						await this.executeTestAPIPaths (destination);
				}
		
				if (this.onTestEnd != null)
					await this.onTestEnd (destination);
	
				if (this.destroy != null)
				{
					if (this.hasBeenDestroyed === false)
					{
						await this.destroy ();
						this.hasBeenDestroyed = true;
						this.hasBeenSetup = false;
					}
				}
			};

		if (map.destinations instanceof Array)
		{
			for (let iIdx = 0; iIdx < map.destinations.length; iIdx++)
			{
				let destinationStr: string = map.destinations[iIdx];

				await executeDestination (destinationStr);
			}
		}
		else
		{
			// If there's a destination order, use that.
			if (map.destinationOrder.length > 0)
			{
				let hasExecutedKeys: string[] = [];

				// Go through the destination order and execute each one.
				for (let iIdx = 0; iIdx < map.destinationOrder.length; iIdx++)
				{
					let orderKey: string = map.destinationOrder[iIdx];
					let destinationStr: string = map.destinations[orderKey];

					if (destinationStr == null)
						throw new Error (`HotTester: Destination ${orderKey} does not exist!`);

					hasExecutedKeys.push (orderKey);
					await executeDestination (destinationStr, orderKey);
				}

				// Execute the rest of the destinations that have not been executed yet.
				for (let key in map.destinations)
				{
					let executeDest: boolean = true;

					for (let iIdx = 0; iIdx < hasExecutedKeys.length; iIdx++)
					{
						let executedKey: string = hasExecutedKeys[iIdx];

						if (executedKey === key)
						{
							executeDest = true;

							break;
						}
					}

					if (executeDest === true)
					{
						let destinationStr: string = map.destinations[key];

						await executeDestination (destinationStr, key);
					}
				}
			}
			else
			{
				// Execute the destinations in any order.
				for (let key in map.destinations)
				{
					let destinationStr: string = map.destinations[key];

					await executeDestination (destinationStr, key);
				}
			}
		}
	}
}