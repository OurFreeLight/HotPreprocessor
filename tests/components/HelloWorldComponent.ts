import { HotComponent, IHotComponent } from "../../src/HotComponent";
import { HotPreprocessor } from "../../src/HotPreprocessor";
import { HelloWorldAPI } from "../server/HelloWorldAPI";

export class HelloWorld extends HotComponent
{
	api: HelloWorldAPI;

	constructor (copy: IHotComponent | HotPreprocessor, api: HelloWorldAPI)
	{
		super (copy, api);

		this.name = "hello-world";
		this.tag = this.name;
		this.value = "Hello World!";
	}

	async click (): Promise<void>
	{
		if (this.value === "Hello World!")
			document.getElementById ("buttonClicked").innerHTML = "Clicked";
		else
		{
			let message: string = (<HTMLInputElement>document.getElementById ("message")).value;
			let result: string = await this.api.sayHello (message);
	
			document.getElementById ("buttonClicked").innerHTML = result;
		}
	}

	async output (): Promise<string>
	{
		return (`<button id = "${this.name}">
			${this.value}
		</button>`);
	}
}