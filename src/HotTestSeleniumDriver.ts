import * as oss from "os";

import { HotTestElement } from "./HotTestElement";
import { HotTestDriver } from "./HotTestDriver";
import { HotTestPage } from "./HotTestMap";

import { By, until, WebDriver, WebElement, Session, Builder } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";
import firefox from "selenium-webdriver/firefox";

/**
 * Runs and executes tests using Selenium.
 */
export class HotTestSeleniumDriver extends HotTestDriver
{
	/**
	 * The current selenium session running.
	 */
	session: Session;
	/**
	 * The selenium webdriver.
	 */
	driver: WebDriver;
	/**
	 * The browser to use.
	 */
	browser: string;
	/**
	 * Run the tests headless.
	 */
	headless: boolean;
	/**
	 * Automatically open the developer tools on start.
	 */
	openDevTools: boolean;

	constructor (page: HotTestPage = null)
	{
		super (page);

		this.driver = null;
		this.session = null;
		this.browser = "chrome";
		this.headless = false;
		this.openDevTools = false;
	}

	/**
	 * Disconnect this server or destroy anything associated with this HotTestDriver.
	 */
	async destroy (): Promise<void>
	{
		if (this.driver != null)
			await this.driver.quit ();
	}

	/**
	 * Load the selenium driver.
	 */
	async loadSeleniumDriver (): Promise<void>
	{
		let builder: Builder = new Builder ();
		builder = builder.forBrowser (this.browser);

		if (this.browser === "firefox")
		{
			let options = new firefox.Options ();

			if (this.openDevTools === true)
				options = options.addArguments ("-devtools");

			if (this.headless === true)
				options = options.headless ();

			if (process.env.NODE_TLS_REJECT_UNAUTHORIZED != null)
			{
				if (process.env.NODE_TLS_REJECT_UNAUTHORIZED == "0")
					options.setAcceptInsecureCerts (true);
			}

			builder = builder.setFirefoxOptions (options);
		}

		if (this.browser === "chrome")
		{
			let options = new chrome.Options ();

			if (this.openDevTools === true)
				options = options.addArguments ("--auto-open-devtools-for-tabs");

			if (this.headless === true)
				options = options.headless ();

			if (process.env.NODE_TLS_REJECT_UNAUTHORIZED != null)
			{
				if (process.env.NODE_TLS_REJECT_UNAUTHORIZED == "0")
					options.setAcceptInsecureCerts (true);
			}

			builder = builder.setChromeOptions (options);
		}

		this.driver = await builder.build ();
		this.session = await this.driver.getSession ();
	}

	/**
	 * Get a test object by it's name. If a * is used, it will be used as a 
	 * wildcard for the object's name. If a > is used, then the name will 
	 * be treated as a CSS selector.
	 */
	getTestObjectByName (name: string): By
	{
		let selector: string = this.parseTestObject (name);

		return (By.css (selector));
	}

	/**
	 * Navigate to a url.
	 */
	async navigateToUrl(url: string): Promise<void>
	{
		await this.driver.get (url);
	}

	/**
	 * Wait for a test element using Selenium Webdriver.
	 */
	async waitForTestElement (name: string | HotTestElement, mustBeVisible: boolean = true): Promise<WebElement>
	{
		let nameStr: string = "";

		if (typeof (name) === "string")
			nameStr = name;
		else
			nameStr = name.name;

		let foundElm: WebElement = null;

		if (mustBeVisible === false)
			foundElm = await this.driver.wait (until.elementLocated (this.getTestObjectByName (nameStr)));
		else
		{
			let elms: WebElement[] = await this.driver.wait (until.elementsLocated (this.getTestObjectByName (nameStr)));

			for (let iIdx = 0; iIdx < elms.length; iIdx++)
			{
				let elm: WebElement = elms[iIdx];

				if (await elm.isDisplayed () === true)
				{
					foundElm = elm;

					break;
				}
			}
		}

		return (foundElm);
	}

	/**
	 * Get a test element using selenium webdriver.
	 */
	async findTestElement (name: string | HotTestElement, mustBeVisible: boolean = true): Promise<WebElement>
	{
		let nameStr: string = "";

		if (typeof (name) === "string")
			nameStr = name;
		else
			nameStr = name.name;

		let foundElm: WebElement = null;

		if (mustBeVisible === false)
			foundElm = await this.driver.findElement (this.getTestObjectByName (nameStr));
		else
		{
			let elms: WebElement[] = await this.driver.findElements (this.getTestObjectByName (nameStr));

			for (let iIdx = 0; iIdx < elms.length; iIdx++)
			{
				let elm: WebElement = elms[iIdx];

				if (await elm.isDisplayed () === true)
				{
					foundElm = elm;

					break;
				}
			}
		}

		return (foundElm);
	}

	/**
	 * Run a command using Selenium Webdriver.
	 */
	async runCommand (testElm: string | HotTestElement, funcName: string = "", 
			valueStr: string = "", mustBeVisible: boolean = true): Promise<any>
	{
		let name: string = "";
		let func: string = "";
		let value: string = "";

		if (typeof (testElm) !== "string")
		{
			name = testElm.name;
			func = testElm.func;
			value = testElm.value;
		}
		else
		{
			name = testElm;
			func = funcName;
			value = valueStr;
		}

		let elm: WebElement = await this.findTestElement (name, mustBeVisible);
		let result: any = null;

		if (elm == null)
			throw new Error (`HotTestSeleniumDriver: Unable to find test element ${name}!`);

		if (func != null)
		{
			if (func !== "")
			{
				if (value != null)
				{
					/// @ts-ignore
					result = await elm[func] (value);
				}
				else
				{
					/// @ts-ignore
					result = await elm[func] ();
				}
			}
		}

		return (result);
	}

	/**
	 * An expression to test.
	 */
	async assertElementValue (name: string | HotTestElement, value: any, 
		errorMessage: string = "", mustBeVisible: boolean = true): Promise<any>
	{
		let elm: WebElement = await this.findTestElement (name, mustBeVisible);

		if (elm == null)
		{
			let realName: string = "";

			if (typeof (name) === "string")
				realName = name;
			else
				realName = name.name;

			throw new Error (`Unable to find test object ${realName}`);
		}

		let elmValue: string = await elm.getText ();
		let elmValue2: string = "";
		let elmValue3: string = "";
		let finalElmValue: string = elmValue;

		if (finalElmValue === "")
		{
			elmValue2 = await elm.getAttribute ("value");

			if (elmValue2 != null)
			{
				if (elmValue2 !== "")
					finalElmValue = elmValue2;
			}
		}

		if (finalElmValue === "")
		{
			elmValue3 = await elm.getAttribute ("innerHTML");

			if (elmValue3 != null)
			{
				if (elmValue3 !== "")
					finalElmValue = elmValue3;
			}
		}

		if (finalElmValue != value)
			throw new Error (`Error: ${errorMessage}. Expected: ${JSON.stringify (value)}, Actual: ${JSON.stringify (finalElmValue)}`);
	}
}