import * as fs from "fs";

import fetch from "cross-fetch";

import { Hot } from "./Hot";
import { HotPage } from "./HotPage";

/**
 * A file to process.
 */
export interface IHotFile
{
	/**
	 * The parent page.
	 */
	page?: HotPage;
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
	/**
	 * Force all errors to be thrown.
	 */
	throwAllErrors?: boolean;
}

/**
 * A file to process.
 */
export class HotFile implements IHotFile
{
	/**
	 * The parent page.
	 */
	page: HotPage;
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
	/**
	 * Force all errors to be thrown.
	 */
	throwAllErrors: boolean;

	constructor (copy: IHotFile = {})
	{
		this.page = copy.page || null;
		this.name = copy.name || "";
		this.url = copy.url || "";
		this.localFile = copy.localFile || "";
		this.content = copy.content || "";
		this.throwAllErrors = copy.throwAllErrors || false;
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
	 * Make a HTTP get request.
	 */
	static async httpGet (url: string): Promise<string>
	{
		try
		{
			let res: Response = await fetch (url);

			if (res.ok === false)
				throw new Error (`${res.status}: ${res.statusText}`);

			let content: string = await res.text ();

			return (content);
		}
		catch (ex)
		{
			return (JSON.stringify ({ "error": `${ex.message} - Could not fetch ${url}` }));
		}
	}

	/**
	 * Load content from a url.
	 */
	async loadUrl (): Promise<string>
	{
		this.content = await HotFile.httpGet (this.url);

		return (this.content);
	}

	/**
	 * Load content from a local file.
	 */
	async loadLocalFile (): Promise<string>
	{
		let promise: Promise<string> = new Promise (
			(resolve: any, reject: any): void =>
			{
				fs.readFile (this.localFile, (err: NodeJS.ErrnoException, data: Buffer): void =>
					{
						if (err != null)
							throw err;

						let content: string = data.toString ();
						this.content = content;

						resolve (this.content);
					});
			});

		return (promise);
	}

	/**
	 * Load the contents of the file.
	 */
	async load (): Promise<string>
	{
		let content: string = "";

		if (this.url !== "")
			content = await this.loadUrl ();

		if (this.localFile !== "")
			content = await this.loadLocalFile ();

		return (content);
	}

	/**
	 * Process string content. This will take in a regular expression and 
	 * parse the content based on the regex. When the regex content is found 
	 * contentProcessor will be executed with the regex content found. When 
	 * the regex content is not found, offContentProcessor will be called with 
	 * the content outside of the regex.
	 * 
	 * @param content The content to parse.
	 * @param contentRegex The regex to use to parse the content.
	 * @param contentProcessor The content found inside the regex.
	 * @param offContentProcessor The content found outside of the regex.
	 * @param numRemoveFromBeginning The number of characters to remove from the 
	 * beginning of the found content.
	 * @param numRemoveFromEnd The number of characters to remove from the end of 
	 * the found content.
	 */
	processContent (content: string, contentRegex: RegExp,
		contentProcessor: (regexFound: string) => string,
		offContentProcessor: (offContent: string) => string,
		numRemoveFromBeginning: number = 2,
		numRemoveFromEnd: number = 2): string
	{
		let result: RegExpExecArray = contentRegex.exec (content);
		let previousIndex: number = 0;
		let output: string = "";

		while (result != null)
		{
			let start: number = result.index - numRemoveFromBeginning;
			let end: number = contentRegex.lastIndex + numRemoveFromEnd;

			// Get the previous section.
			let prevContent: string = content.substr (previousIndex, (start - previousIndex));
			previousIndex = end;

			output += offContentProcessor (prevContent);

			// Process the content found from the regex
			let contentFound: string = result[0];
			output += contentProcessor (contentFound);

			// Move on to the next section to parse.
			result = contentRegex.exec (content);
		}

		// Append whatever else is after the last parsed section.
		let lastContent: string = content.substr (previousIndex);

		output += offContentProcessor (lastContent);

		return (output);
	}

	/**
	 * Process the content in this file. This treats each file as one large JavaScript
	 * file. Any text outside of the <* *> areas will be treated as:
	 * 
	 * 		Hot.echo ("text");
	 */
	async process (args: any = null): Promise<string>
	{
		let output: string = "";
		let thisContent: string = this.content;

		Hot.CurrentPage = this.page;
		Hot.PublicSecrets = this.page.processor.publicSecrets;
		Hot.API = this.page.getAPI ();

		// Assemble the JS to evaluate. This will take all content outside of 
		// <* and *> and wrap a Hot.echo around it. Any JS found inside of the 
		// <* and *> will be executed.
		output = this.processContent (thisContent, 
			new RegExp ("(?<=\\<\\*)([\\s\\S]*?)(?=\\*\\>)", "g"), 
			(regexFound: string): string =>
			{
				return (`${regexFound}\n`);
			}, 
			(offContent: string): string =>
			{
				let tempOutput: string = this.processContent (offContent, 
					new RegExp ("(?<=\\$\\{)([\\s\\S]*?)(?=\\})", "g"), 
					(regexFound2: string): string =>
					{
						let out: string = `try { Hot.echo (${regexFound2}); }catch (ex){Hot.echo ("");}\n`;

						if (this.throwAllErrors === true)
							out = `Hot.echo (${regexFound2});\n`;

						return (out);
					}, 
					(offContent2: string): string =>
					{
						let escapedContent: string = JSON.stringify (offContent2);

						return (`Hot.echo (${escapedContent});\n`);
					}, 2, 1);

				return (tempOutput);
			});

		// Execute the assembled JS file.
		let returnedOutput: any = null;

		try
		{
			let executionContent: string = `
			var Hot = arguments[0];
			`;

			for (let key in args)
			{
				let newVar: string = "";
				let newVarValue: any = args[key];
				let newVarValueStr: string = JSON.stringify (newVarValue);

				newVar = `var ${key} = ${newVarValueStr};\n`;

				executionContent += newVar;
			}

			executionContent += `

			async function runContent ()
			{`;
			executionContent += output;
			executionContent += `
			}

			return (runContent ().then (() =>
			{
				return ({
						hot: Hot,
						output: Hot.Output,
						persistence: JSON.stringify (Hot.Persistence)
					});
			}));`;

			/// @fixme Prior to execution compile any TypeScript and make it ES5 compatible.
			let func: Function = new Function (executionContent);
			returnedOutput = await func.apply (this, [Hot]);
		}
		catch (ex)
		{
			if (ex instanceof SyntaxError)
			{
				/// @fixme Put what's in the content variable into a prev content variable?
				/// Then once there's no longer any syntax errors being thrown, execute the 
				/// code? This would also require saving any HTML outside of the *> and <* 
				/// then echoing it out. The throw below would have to be removed as well.
				throw ex;
			}
			else
				throw ex;
		}

		Hot.Persistence = returnedOutput.hot.Persistence;
		let finalOutput: string = returnedOutput.output;
		Hot.Output = "";

		return (finalOutput);
	}
}