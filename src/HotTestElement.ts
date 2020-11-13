/**
 * A test element.
 */
export interface IHotTestElement
{
	/**
	 * The name of the element.
	 */
	name: string;
	/**
	 * The name of the function to execute 
	 * while executing the test.
	 */
	func?: string;
	/**
	 * The value to use.
	 */
	value?: any;
}

/**
 * A test element.
 */
export class HotTestElement implements IHotTestElement
{
	/**
	 * The name of the element.
	 */
	name: string;
	/**
	 * The name of the function to execute 
	 * while executing the test.
	 */
	func: string;
	/**
	 * The value to use.
	 */
	value: any;

	constructor (name: string | IHotTestElement, func: string = "", value: any = null)
	{
		if (typeof (name) === "string")
		{
			this.name = name;
			this.func = func;
			this.value = value;
		}
		else
		{
			this.name = name.name;
			this.func = name.func || func;
			this.value = name.value || value;
		}
	}
}