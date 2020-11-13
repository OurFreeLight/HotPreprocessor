import { HotPage } from "./HotPage";
import { HotTestElement } from "./HotTestElement";

/**
 * This actually executes the tests.
 */
export abstract class HotTestExecutor
{
	/**
	 * The current page.
	 */
	page: HotPage;

	constructor (page: HotPage)
	{
		this.page = page;
	}

	/**
	 * Wait for a HotTestElement to load.
	 */
	async waitForTestElement? (name: string | HotTestElement): Promise<any>;
	/**
	 * Run a HotTestElement command.
	 */
	async runCommand? (testElm: HotTestElement): Promise<any>;

	/**
	 * Run a series of test elements.
	 */
	async run (executions: string[] | string[][]): Promise<any[]>
	{
		let results: any[] = [];

		for (let iIdx = 0; iIdx < executions.length; iIdx++)
		{
			let execution: any = executions[iIdx];
			let testElm: HotTestElement = null;

			if (typeof (execution) === "string")
				testElm = this.page.testElements[execution];

			if (execution instanceof Array)
			{
				let name: string = execution[0];
				testElm = this.page.testElements[name];
				testElm.func = testElm.func;
				testElm.value = testElm.value;
			}

			results.push (await this.runCommand (testElm));
		}

		return (results);
	}
}