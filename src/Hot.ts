import { HotFile } from "./HotFile";
import { HotPage } from "./HotPage";
import { HotPreprocessor } from "./HotPreprocessor";

/**
 * A CSS object to embed.
 */
export interface CSSObject
{
	/**
	 * The url to the CSS file to embed.
	 */
	url: string;
	/**
	 * The integrity hash to generate during initial compilation.
	 */
	integrityHash: string;
}

/**
 * The api used during processing.
 */
export class Hot
{
	/**
	 * Contains the buffer to output. This is cleared between every file processed.
	 */
	static CurrentPage: HotPage = null;
	/**
	 * Contains the buffer to output. This is cleared between every file processed.
	 */
	static Output: string = "";
	/**
	 * The data to share across all the different files and pages.
	 */
	static Persistence: any = {};
	/**
	 * The CSS string to use when echoing out the CSS files.
	 */
	static cssStr: string = `<link rel = "stylesheet" href = "%CSS_FILE%" />`;
	/**
	 * The CSS files to use in the current page being generated.
	 * 
	 * @todo Make this a "string | CSSObject" data type so it can also include 
	 * the integrity hashes as well.
	 */
	static CSS: string[] = [];
	/**
	 * The JavaScript files to use in the current page being generated.
	 * 
	 * @todo Make this a "string | JSFileObject" data type so it can also include 
	 * the integrity hashes as well.
	 */
	static JSFiles: any[] = [];
	/**
	 * The JavaScript inline code to use in the current page being generated.
	 */
	static JSScripts: any[] = [];
	/**
	 * The JavaScript string to use when echoing out the Scripts files.
	 */
	static jsFileStr: string = `<script type = "text/javascript" src = "%JS_FILE%"></script>`;
	/**
	 * The JavaScript string to use when echoing out the Scripts files.
	 */
	static jsScriptsStr: string = `<script type = "text/javascript">%JS_CODE%</script>`;

	/**
	 * Retrieve a file and echo out it's contents.
	 */
	static async include (file: HotFile | string): Promise<void>
	{
		Hot.echo (await Hot.getFile (file));
	}

	/**
	 * Get the content of a file.
	 */
	static async getFile (file: HotFile | string): Promise<string>
	{
		let tempFile: HotFile = null;

		if (typeof (file) === "string")
		{
			tempFile = new HotFile ();

			if (HotPreprocessor.isWeb === true)
				tempFile.url = file;
			else
				tempFile.localFile = file;
		}
		else
			tempFile = file;

		await tempFile.load ();

		let content: string = await tempFile.process ();

		return (content);
	}

	/**
	 * Echo out some output.
	 */
	static echo (message: string): void
	{
		Hot.Output += message;
	}

	/**
	 * Echo out the CSS for the current page being generated.
	 */
	static displayCSS (): void
	{
		for (let iIdx = 0; iIdx < Hot.CSS.length; iIdx++)
		{
			let cssFile: string = Hot.CSS[iIdx];
			let cssOut: string = Hot.cssStr;

			cssOut = cssOut.replace (/\%CSS_FILE\%/g, cssFile);

			Hot.echo (cssOut);
		}
	}

	/**
	 * Echo out the JS files for the current page being generated.
	 */
	static displayJSFiles (): void
	{
		for (let iIdx = 0; iIdx < Hot.JSFiles.length; iIdx++)
		{
			let jsFile: string = Hot.JSFiles[iIdx];
			let jsFileOut: string = Hot.jsFileStr;

			jsFileOut = jsFileOut.replace (/\%JS_FILE\%/g, jsFile);

			Hot.echo (jsFileOut);
		}
	}

	/**
	 * Echo out the JS scripts for the current page being generated.
	 */
	static displayJSScripts (): void
	{
		for (let iIdx = 0; iIdx < Hot.JSScripts.length; iIdx++)
		{
			let jsScript: string = Hot.JSScripts[iIdx];
			let jsScriptOut: string = Hot.jsScriptsStr;

			jsScriptOut = jsScriptOut.replace (/\%JS_CODE\%/g, jsScript);

			Hot.echo (jsScriptOut);
		}
	}
}