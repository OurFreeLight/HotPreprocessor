import { EventExecutionType, HotAPI } from "./HotAPI";
import { HotRoute } from "./HotRoute";
import { HotClient } from "./HotClient";
import { HotServer } from "./HotServer";
import { HotTestDriver } from "./HotTestDriver";
import { HotTester } from "./HotTester";
import { HotTestMap, HotTestPath, HotTestPage } from "./HotTestMap";

export class HotTesterAPI extends HotAPI
{
	constructor (baseUrl: string, connection: HotServer | HotClient = null, db: any = null)
	{
		super(baseUrl, connection, db);

		this.executeEventsUsing = EventExecutionType.HotAPI;

		let route: HotRoute = new HotRoute (connection, "tester");
		route.addMethod ("pageLoaded", this.pageLoaded);
		route.addMethod ("executeTests", this.executeTests);
		this.addRoute (route);
	}

	/**
	 * This is called when the page has finished loading in development mode.
	 */
	async pageLoaded (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
	{
		let testerName: string = jsonObj["testerName"];
		let testerMap: string = jsonObj["testerMap"];
		let pageName: string = jsonObj["pageName"];
		let testElements = jsonObj["testElements"];
		let testPathsStrs = jsonObj["testPaths"];

		if ((testerName == null) || (testerMap == null) || (pageName == null) || 
			(testElements == null) || (testPathsStrs == null))
		{
			throw new Error ("TesterAPI: Not all required json objects were passed.");
		}

		if ((testerName == null) || (testerMap === "") || (testElements === "") || 
			(testPathsStrs === ""))
		{
			throw new Error ("TesterAPI: Not all required json objects were passed.");
		}

		testElements = JSON.parse (testElements);
		testPathsStrs = JSON.parse (testPathsStrs);

		let testPaths: { [name: string]: HotTestPath; } = {};

		for (let key in testPathsStrs)
		{
			let testPath: (driver: HotTestDriver, ...args: any) => Promise<any> = 
				eval (testPathsStrs[key]);

			testPaths[key] = testPath;
		}

		let tester: HotTester = this.connection.processor.testers[testerName];
		let testMap: HotTestMap = tester.testMaps[testerMap];

		if (testMap == null)
			throw new Error (`TesterAPI: Tester map ${testerMap} does not exist!`);

		testMap.pages[pageName] = {
				"testElements": {},
				"testPaths": {}
			};
		testMap.pages[pageName].testElements = testElements;
		testMap.pages[pageName].testPaths = testPaths;

		return (true);
	}

	/**
	 * Execute the tests for a page.
	 */
	async executeTests (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
	{
		let testerName: string = jsonObj["testerName"];
		let testerMap: string = jsonObj["testerMap"];

		if ((testerName == null) || (testerMap == null))
			throw new Error ("TesterAPI: Not all required json objects were passed.");

		if ((testerName === "") || (testerMap === ""))
			throw new Error ("TesterAPI: Not all required json objects were passed.");

		let server: HotServer = (<HotServer>this.connection);
		// @ts-ignore
		await server.executeTests (testerName, testerMap);

		return (true);
	}
}