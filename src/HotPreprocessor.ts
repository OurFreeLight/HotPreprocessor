import * as fs from "fs";

import { HotPage } from "./HotPage";
import { HotFile } from "./HotFile";

import fetch from "isomorphic-fetch";

/**
 * The main class that handles all HTML preprocessing, then outputs the 
 * results.
 */
export class IHotPreprocessor
{
	/**
	 * The pages that can be constructed.
	 */
	pages?: { [name: string]: HotPage };
}

/**
 * The main class that handles all HTML preprocessing, then outputs the 
 * results.
 */
export class HotPreprocessor implements IHotPreprocessor
{
	/**
	 * Indicates if this is a web build.
	 */
	static isWeb: boolean = false;
	/**
	 * The pages that can be constructed.
	 */
	pages: { [name: string]: HotPage };
	/**
	 * The page content to use when .
	 */
	pageContent: string;

	constructor (copy: IHotPreprocessor = {})
	{
		this.pages = copy.pages || {};
		this.pageContent = 
`<!DOCTYPE html>
<html>

<head>
	<title>%title%</title>

	<script type = "text/javascript" src = "%hotpreprocessor_js_src%"></script>
	<script type = "text/javascript">
		var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
		HotPreprocessor.displayUrl ("%url%");
	</script>
</head>

<body>
</body>

</html>`;
	}

	/**
	 * Add a page.
	 */
	addPage (page: HotPage): void
	{
		this.pages[page.name] = page;
	}

	/**
	 * Get a page to process.
	 */
	getPage (pageName: string): HotPage
	{
		return (this.pages[pageName]);
	}

	/**
	 * Load from a HotSite.json file.
	 */
	async loadHotSite (path: string): Promise<void>
	{
		let jsonStr: string = "";

		if (HotPreprocessor.isWeb === true)
		{
			let res: any = await fetch (path);
			jsonStr = res.text ();
		}
		else
		{
			jsonStr = await new Promise (
				(resolve: any, reject: any): void =>
				{
					fs.readFile (path, (err: NodeJS.ErrnoException, data: Buffer): void =>
						{
							if (err != null)
								throw err;
	
							let content: string = data.toString ();
	
							resolve (content);
						});
				});
		}

		let jsonObj = JSON.parse (jsonStr);
		let routes = jsonObj["routes"];

		for (let key in routes)
		{
			let route = routes[key];
			let file: HotFile = new HotFile (route);
			let page: HotPage = new HotPage ({
					processor: this,
					name: route.name || "",
					route: key,
					files: [file]
				});

			this.addPage (page);
		}
	}

	/**
	 * Create the Express routes from the given pages. Be sure to load the 
	 * pages first before doing this.
	 */
	createExpressRoutes (expressApp: any, jsSrcPath: string = "./js/HotPreprocessor.js"): void
	{
		for (let key in this.pages)
		{
			let page: HotPage = this.pages[key];
			let content: string = this.pageContent;
			let fixContent = (tempContent: string) =>
				{
					tempContent = tempContent.replace (/\%title\%/g, page.name);
					tempContent = tempContent.replace (/\%hotpreprocessor\_js\_src\%/g, jsSrcPath);
					tempContent = tempContent.replace (/\%url\%/g, page.files[0].url);

					return (tempContent);
				};
			content = fixContent (content);

			expressApp.get (page.route, (req: any, res: any) =>
				{
					res.send (content);
				});
		}
	}

	/**
	 * Process a page and get the result.
	 */
	async process (pageName: string): Promise<string>
	{
		let page: HotPage = this.getPage (pageName);
		let result: string = await page.process ();

		return (result);
	}

	/**
	 * Process a local file and get the result.
	 */
	static async processLocalFile (localFilepath: string, name: string = localFilepath): Promise<string>
	{
		let processor: HotPreprocessor = new HotPreprocessor ();
		let file: HotFile = new HotFile ({
			"localFile": localFilepath
		});
		await file.load ();
		let page: HotPage = new HotPage ({
				"processor": processor,
				"name": name,
				"files": [file]
			});
		processor.addPage (page);
		let result: string = await processor.process (name);

		return (result);
	}

	/**
	 * Process a url and get the result.
	 */
	static async processUrl (url: string, name: string = url): Promise<string>
	{
		let processor: HotPreprocessor = new HotPreprocessor ();
		let file: HotFile = new HotFile ({
			"url": url
		});
		await file.load ();
		let page: HotPage = new HotPage ({
				"processor": processor,
				"name": name,
				"files": [file]
			});
		processor.addPage (page);
		let result: string = await processor.process (name);

		return (result);
	}

	/**
	 * Process content and get the result.
	 */
	static async processContent (content: string, name: string): Promise<string>
	{
		let processor: HotPreprocessor = new HotPreprocessor ();
		let file: HotFile = new HotFile ({
			"content": content
		});
		await file.load ();
		let page: HotPage = new HotPage ({
				"processor": processor,
				"name": name,
				"files": [file]
			});
		processor.addPage (page);
		let result: string = await processor.process (name);

		return (result);
	}

	/**
	 * When the window has finished loading, execute the function.
	 * This is meant for web browser use only.
	 */
	static onReady (readyFunc: () => void): void
	{
		if (document.readyState === "complete")
			readyFunc ();
		else
			window.addEventListener ("load", readyFunc);
	}

	/**
	 * Replace the current HTML page with the output.
	 * This is meant for web browser use only.
	 */
	static useOutput (output: string): void
	{
		document.open ();
		document.write (output);
		document.close ();
	}

	/**
	 * Process and replace the current HTML page with the 
	 * hott script from the given url.
	 * This is meant for web browser use only.
	 */
	static async displayUrl (url: string, name: string = url): Promise<void>
	{
		HotPreprocessor.onReady (async () =>
			{
				let output: string = await HotPreprocessor.processUrl (url, name);

				HotPreprocessor.useOutput (output);
			});
	}

	/**
	 * Process and replace the current HTML page with the 
	 * hott script.
	 * This is meant for web browser use only.
	 */
	static async displayContent (content: string, name: string): Promise<void>
	{
		HotPreprocessor.onReady (async () =>
			{
				let output: string = await HotPreprocessor.processContent (content, name);

				HotPreprocessor.useOutput (output);
			});
	}
}