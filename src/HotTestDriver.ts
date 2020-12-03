import { HotTestElement } from "./HotTestElement";
import { HotTestPage } from "./HotTestMap";

/**
 * This actually executes the tests.
 */
export abstract class HotTestDriver
{
	/**
	 * The current page.
	 */
	page: HotTestPage;

	constructor (page: HotTestPage = null)
	{
		this.page = page;
	}

	/**
	 * Wait for a number of milliseconds.
	 */
	async wait (numMilliseconds: number): Promise<void>
	{
		return (await new Promise ((resolve, reject) =>
			{
				setTimeout (() =>
					{
						resolve ();
					}, numMilliseconds);
			}));
	}

	/**
	 * Wait for a HotTestElement to load.
	 */
	async waitForTestElement? (name: string | HotTestElement): Promise<any>;
	/**
	 * Find a HotTestElement to utilize.
	 */
	async findTestElement? (name: string | HotTestElement): Promise<any>;
	/**
	 * Run a HotTestElement command.
	 */
	async runCommand? (testElm: HotTestElement): Promise<any>;
	/**
	 * An expression to test.
	 */
	async assertElementValue? (name: string | HotTestElement, value: any, errorMessage?: string): Promise<any>;
	/**
	 * An expression to test.
	 */
	async assert? (value: any, errorMessage?: string): Promise<any>;

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
			let func: string = "";
			let value: string = "";

			if (typeof (execution) === "string")
			{
				testElm = this.page.testElements[execution];
				func = testElm.func;
				value = testElm.value;
			}

			if (execution instanceof Array)
			{
				let name: string = execution[0];
				testElm = this.page.testElements[name];

				func = testElm.func;
				value = testElm.value;

				if (execution.length > 1)
					func = execution[1];

				if (execution.length > 2)
					value = execution[2];
			}

			testElm.func = func;
			testElm.value = value;

			results.push (await this.runCommand (testElm));
		}

		return (results);
	}
}