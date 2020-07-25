import "mocha";
import { expect, should } from "chai";
// @ts-ignore
import fetch from "cross-fetch";

import { Common } from "./Common";

import { HotPreprocessor } from "../../src/HotPreprocessor";
import { HotHTTPServer } from "../../src/HotHTTPServer";
import { HelloWorldAPI } from "./HelloWorldAPI";

describe ("Server Tests", () =>
	{
		let common: Common = null;
		let processor: HotPreprocessor = null;
		let server: HotHTTPServer = null;
		let api: HelloWorldAPI = null;
		let url: string = "";

		before (async () =>
			{
				common = new Common ();

				processor = common.processor;
				server = common.server;

				await common.startServer ();
				url = common.getUrl ();
			});
		after (async () =>
			{
				await common.shutdown ();
			});

		it ("should report 404", async () =>
			{
				let res: Response = await fetch (url);

				expect (res.status).to.equal (404);
			});
		it ("should add a static route and get the tests index html", async () =>
			{
				server.addStaticRoute ("/", `${process.cwd ()}/`);
				let res: Response = await fetch (`${url}/tests/browser/index.htm`);

				expect (res.status).to.equal (200);
			});
		it ("should set the HelloWorldAPI then call it without saying hi", async () =>
			{
				api = new HelloWorldAPI (common.getUrl (), server);
				server.setAPI (api);

				let result: any = await api.call ("/v1/hello_world/hello", {});

				expect (result.error).to.equal ("You didn't say hi.");
			});
		it ("should call the HelloWorldAPI saying hello", async () =>
			{
				let result: any = await api.sayHello ("hi");

				expect (result).to.equal ("Hello!");
			});
	});