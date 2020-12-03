import * as oss from "os";

import { HotTestElement } from "../../src/HotTestElement";
import { HotTestDriver } from "../../src/HotTestDriver";

import { By, until, WebDriver, WebElement, Session, Builder } from "selenium-webdriver";
import { HotTestPage } from "../../src/HotTestMap";

/**
 * Runs and executes tests.
 */
export class TestDriver extends HotTestDriver
{
	/**
	 * The current selenium session running.
	 */
	session: Session;
	/**
	 * The selenium webdriver.
	 */
	driver: WebDriver;

	constructor (page: HotTestPage = null)
	{
		super (page);

		this.driver = null;
		this.session = null;
	}

	/**
	 * Load the selenium driver.
	 */
	async loadSeleniumDriver (): Promise<void>
	{
		let capabilities: any = {
				browserName: "chrome",
				platformName: "windows"
			};

		if (oss.platform () === "linux")
			capabilities["platformName"] = "linux";

		if (oss.platform () === "darwin")
			capabilities["platformName"] = "mac";

		if (process.env.NODE_TLS_REJECT_UNAUTHORIZED != null)
		{
			if (process.env.NODE_TLS_REJECT_UNAUTHORIZED == "0")
				capabilities["acceptInsecureCerts"] = true;
		}

		let builder: Builder = new Builder ();
		this.driver = await builder.withCapabilities (capabilities).build ();
		this.session = await this.driver.getSession ();
	}

	/**
	 * Wait for a test element using Selenium Webdriver.
	 */
	async waitForTestElement (name: string | HotTestElement): Promise<WebElement>
	{
		let nameStr: string = "";

		if (typeof (name) === "string")
			nameStr = name;
		else
			nameStr = name.name;

		let elm: WebElement = await this.driver.wait (until.elementLocated (By.css (`[data-test-object-name='${nameStr}']`)));

		return (elm);
	}

	/**
	 * Get a test element using selenium webdriver.
	 */
	async findTestElement? (name: string | HotTestElement): Promise<WebElement>
	{
		let nameStr: string = "";

		if (typeof (name) === "string")
			nameStr = name;
		else
			nameStr = name.name;

		let elm: WebElement = await this.driver.findElement (By.css (`[data-test-object-name='${nameStr}']`));

		return (elm);
	}

	/**
	 * Run a command using Selenium Webdriver.
	 */
	async runCommand (testElm: HotTestElement): Promise<any>
	{
		let name: string = testElm.name;
		let func: string = testElm.func;
		let value: string = testElm.value;

		let elm: WebElement = await this.findTestElement (name);
		let result: any = null;

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
	async assertElementValue (name: string | HotTestElement, value: any, errorMessage: string = ""): Promise<any>
	{
		let elm: WebElement = await this.findTestElement (name);
		let elmValue: string = await elm.getAttribute ("value");

		if (elmValue != value)
			throw new Error (errorMessage);
	}

	/**
	 * An expression to test.
	 */
	async assert (value: any, errorMessage: string = ""): Promise<any>
	{
		if (! (value))
			throw new Error (errorMessage);
	}
}