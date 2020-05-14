import * as fs from "fs";

import fetch from "isomorphic-fetch";

import { Hot } from "./Hot";

/**
 * A file to process.
 */
export interface IHotFile
{
	/**
	 * The name of the file.
	 */
	name?: string;
	/**
	 * The url to the file to get.
	 */
	url?: string;
	/**
	 * The path to the local file to get.
	 */
	localFile?: string;
	/**
	 * The content of the file to process.
	 */
	content?: string;
}

/**
 * A file to process.
 */
export class HotFile implements IHotFile
{
	/**
	 * The name of the file.
	 */
	name: string;
	/**
	 * The url to the file to get.
	 */
	url: string;
	/**
	 * The path to the local file to get.
	 */
	localFile: string;
	/**
	 * The content of the file to process.
	 */
	content: string;

	constructor (copy: IHotFile = {})
	{
		this.name = copy.name || "";
		this.url = copy.url || "";
		this.localFile = copy.localFile || "";
		this.content = copy.content || "";
	}

	/**
	 * Set the content of this file.
	 */
	setContent (content: string): void
	{
		this.content = content;
	}

	/**
	 * Get the content of this file.
	 */
	getContent (): string
	{
		return (this.content);
	}

	/**
	 * Load content from a url.
	 */
	async loadUrl (): Promise<void>
	{
		let res: any = await fetch (this.url);
		let content: string = await res.text ();

		this.content = content;
	}

	/**
	 * Load content from a local file.
	 */
	async loadLocalFile (): Promise<void>
	{
		let promise: Promise<void> = new Promise (
			(resolve: any, reject: any): void =>
			{
				fs.readFile (this.localFile, (err: NodeJS.ErrnoException, data: Buffer): void =>
					{
						if (err != null)
							throw err;

						let content: string = data.toString ();
						this.content = content;

						resolve ();
					});
			});

		return (promise);
	}

	/**
	 * Load the contents of the file.
	 */
	async load (): Promise<void>
	{
		if (this.url !== "")
			await this.loadUrl ();

		if (this.localFile !== "")
			await this.loadLocalFile ();
	}

	/**
	 * Process the content in this file.
	 */
	async process (): Promise<string>
	{
		let output: string = "";
		let regex: RegExp = new RegExp ("(?<=\\<\\*)([\\s\\S]*?)(?=\\*\\>)", "g");
		let thisContent: string = this.content;
		let result: RegExpExecArray = regex.exec (thisContent);
		let previousIndex: number = 0;

		// Begin parsing Javascript sections.
		while (result != null)
		{
			let start: number = result.index - 2;
			let end: number = regex.lastIndex + 2;

			// Get the previous JS section.
			let prevContent: string = thisContent.substr (previousIndex, (start - previousIndex));
			previousIndex = end;

			output += prevContent;

			let content: string = `
			var Hot = arguments[0];

			async function runContent ()
			{`;
			content += result[0];
			content += `
			}

			return (runContent ().then (() =>
			{
				return ({ hot: Hot, output: Hot.Output, persistence: JSON.stringify (Hot.Persistence) });
			}));`;

			/// @fixme Prior to execution compile any TypeScript and make it ES5 compatible.
			let func: Function = new Function (content);
			let returnedOutput: any = await func.apply (this, [Hot]);

			Hot.Persistence = returnedOutput.hot.Persistence;
			output += returnedOutput.output;

			Hot.Output = "";

			// Move on to the next section to parse for Javascript.
			result = regex.exec (thisContent);
		}

		// Append whatever else is after the last parsed section.
		output += thisContent.substr (previousIndex);

		return (output);
	}
}