import * as fs from "fs";

// @ts-ignore dunno what this issue is about.
import fetch from "cross-fetch";

import { HotPage } from "./HotPage";
import { HotFile } from "./HotFile";

import { HotComponent } from "./HotComponent";
import { HotLog, HotLogLevel } from "./HotLog";

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
	/**
	 * The components that can be constructed.
	 */
	components?: { [name: string]: HotComponent };
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
	 * The components that can be constructed.
	 */
	components: { [name: string]: HotComponent };
	/**
	 * The page content to use when .
	 */
	pageContent: string;
	/**
	 * The logger.
	 */
	logger: HotLog;

	constructor (copy: IHotPreprocessor = {})
	{
		this.pages = copy.pages || {};
		this.components = copy.components || {};
		this.pageContent = 
`<!DOCTYPE html>
<html>

<head>
	<title>%title%</title>

	<script type = "text/javascript" src = "%hotpreprocessor_js_src%"></script>
	<script type = "text/javascript">
		var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
		%load_hot_site%
		HotPreprocessor.displayUrl ("%url%");
	</script>
</head>

<body>
</body>

</html>`;
		this.logger = new HotLog (HotLogLevel.None);
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
	 * Add and register a component.
	 */
	addComponent (component: HotComponent): void
	{
		this.components[component.name] = component;
		this.registerComponent (component);
	}

	/**
	 * Register a component for use as a HTML tag.
	 */
	registerComponent (component: HotComponent): void
	{
		customElements.define (component.tag, class extends HTMLElement
			{
				constructor ()
				{
					super ();

					/// @fixme Is this bad? Could create race conditions.
					(async () =>
					{
						this.onclick = component.click.bind (component);

						for (let key in component.events)
						{
							let event = component.events[key];

							// @ts-ignore
							this.addEventListener (event.type, event.func, event.options);
						}

						component.htmlElement = await component.onCreated (this);

						if (component.handleAttributes != null)
							await component.handleAttributes (this.attributes);
						else
						{
							for (let iIdx = 0; iIdx < this.attributes.length; iIdx++)
							{
								let attr: Attr = this.attributes[iIdx];
								let attrName: string = attr.name.toLowerCase ();
								let attrValue: string = attr.value;

								if (attrName === "id")
									component.name = attrValue;

								if (attrName === "name")
									component.name = attrValue;

								if (attrName === "value")
									component.value = attrValue;
							}
						}

						let str: string = await component.output ();
						let newDOM: Document = new DOMParser ().parseFromString (str, "text/html");
						let shadow: ShadowRoot = this.attachShadow ({ mode: "open" });

						for (let iIdx = 0; iIdx < newDOM.body.children.length; iIdx++)
						{
							let child = newDOM.body.children[iIdx];
							shadow.appendChild (child);
						}
					})();
				}
			}, component.elementOptions);
	}

	/**
	 * Get a component to process.
	 */
	getComponent (name: string): HotComponent
	{
		return (this.components[name]);
	}

	/**
	 * Add a new HTML element(s) to the current document.
	 */
	static addHtml (parent: string | HTMLElement, html: string | HTMLElement): HTMLElement | HTMLElement[]
	{
		let foundParent: HTMLElement = null;

		if (typeof (parent) === "string")
			foundParent = document.querySelector (parent);
		else
			foundParent = parent;

		if (foundParent == null)
			throw new Error (`Unable to find parent ${parent}!`);

		let result: HTMLElement = null;

		if (typeof (html) === "string")
		{
			let newDOM: Document = new DOMParser ().parseFromString (html, "text/html");
			let results: HTMLElement[] = [];

			for (let iIdx = 0; iIdx < newDOM.body.children.length; iIdx++)
			{
				let child: HTMLElement = (<HTMLElement>newDOM.body.children[iIdx]);

				results.push (foundParent.appendChild (child));
			}

			return (results);
		}
		else
			result = foundParent.appendChild (html);

		return (result);
	}

	/**
	 * Load from a HotSite.json file.
	 */
	async loadHotSite (path: string): Promise<void>
	{
		let jsonStr: string = "";

		this.logger.info (`Retrieving site ${path}`);

		if (HotPreprocessor.isWeb === true)
		{
			let res: any = await fetch (path);

			this.logger.info (`Retrieved site ${path}`);

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

							this.logger.info (`Retrieved site ${path}`);
	
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
	static async processUrl (processor: HotPreprocessor, url: string, name: string = url): Promise<string>
	{
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
	static async processContent (processor: HotPreprocessor, content: string, name: string): Promise<string>
	{
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
	 * Process and replace the current HTML page with the hott script from the given url.
	 * This is meant for web browser use only.
	 */
	static async displayUrl (url: string, name: string = url, processor: HotPreprocessor = null): Promise<HotPreprocessor>
	{
		return (new Promise<HotPreprocessor> ((resolve, reject) =>
			{
				HotPreprocessor.onReady (async () =>
					{
						if (processor == null)
							processor = new HotPreprocessor ();

						let output: string = await HotPreprocessor.processUrl (processor, url, name);

						HotPreprocessor.useOutput (output);
						resolve (processor);
					});
			}));
	}

	/**
	 * Process and replace the current HTML page with the hott script.
	 * This is meant for web browser use only.
	 */
	static async displayContent (content: string, name: string, processor: HotPreprocessor = null): Promise<HotPreprocessor>
	{
		return (new Promise<HotPreprocessor> ((resolve, reject) =>
			{
				HotPreprocessor.onReady (async () =>
					{
						if (processor == null)
							processor = new HotPreprocessor ();

						let output: string = await HotPreprocessor.processContent (processor, content, name);

						HotPreprocessor.useOutput (output);
						resolve (processor);
					});
			}));
	}
}