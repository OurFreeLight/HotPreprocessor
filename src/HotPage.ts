import { Hot } from "./Hot";
import { HotFile } from "./HotFile";
import { HotPreprocessor } from "./HotPreprocessor";
import { HotAPI } from "./HotAPI";

/**
 * A page to preprocess.
 */
export interface IHotPage
{
	/**
	 * The processor to use.
	 */
	processor: HotPreprocessor;
	/**
	 * The name of the page.
	 */
	name?: string;
	/**
	 * The route used to get to this page.
	 */
	route?: string;
	/**
	 * The name of the page. File ordering matters here.
	 * Every file is processed incrementally.
	 */
	files?: HotFile[];
}

/**
 * A page to preprocess.
 */
export class HotPage implements IHotPage
{
	/**
	 * The processor to use.
	 */
	processor: HotPreprocessor;
	/**
	 * The name of the page.
	 */
	name: string;
	/**
	 * The route used to get to this page.
	 */
	route: string;
	/**
	 * The name of the page. File ordering matters here.
	 * Every file is processed incrementally.
	 */
	files: HotFile[];

	constructor (copy: IHotPage | HotPreprocessor)
	{
		if (copy instanceof HotPreprocessor)
		{
			this.processor = copy;
			this.name = "";
			this.route = "";
			this.files = [];
		}
		else
		{
			this.processor = copy.processor;
			this.name = copy.name || "";
			this.route = copy.route || "";
			this.files = copy.files || [];
		}
	}

	/**
	 * Add a file to process. It's recommend to load the file prior to 
	 * adding it to a page if it's about to be used.
	 */
	async addFile (file: HotFile): Promise<void>
	{
		file.page = this;

		this.files.push (file);
	}

	/**
	 * Get the API associated with this page.
	 */
	getAPI (): HotAPI
	{
		return (this.processor.api);
	}

	/**
	 * Add all files in the page. Could decrease page loading performance.
	 * It's recommend to load the file prior to adding it to a page.
	 */
	async load (file: HotFile): Promise<void>
	{
		for (let iIdx = 0; iIdx < this.files.length; iIdx++)
		{
			let file: HotFile = this.files[iIdx];

			await file.load ();
		}
	}

	/**
	 * Process a page and get the result.
	 */
	async process (args: any = null): Promise<string>
	{
		let output: string = "";

		for (let iIdx = 0; iIdx < this.files.length; iIdx++)
		{
			let file: HotFile = this.files[iIdx];

			Hot.Output = "";
			file.page = this;

			output += await file.process (args);
		}

		return (output);
	}
}