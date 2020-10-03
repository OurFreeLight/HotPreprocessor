import "mocha";
import { expect, should } from "chai";

import { HotPreprocessor, HotPage, HotFile } from "../../src/api";

describe ("Local Preprocessor Tests", () =>
	{
		let processor: HotPreprocessor = null;
		let finalContent: string = `<!DOCTYPE html>
			<html>
			
			<head>
				<title>Test Page</title>
			</head>
			
			<body>
				<header>
					Header
				</header>
			
				This is the main body!
			
				<footer>
					Footer
				</footer>
			
			</body>
			
			</html>`;
		let ifFinalContent: string = `<!DOCTYPE html>
		<html>
		
		
		
			This will display only if 1 === 1!
		
		
		
		</html>`;
		let nestedFinalContent: string = `<!DOCTYPE html>
			<html>
			
			<head>
				<title>Test Page</title>
			</head>
			
			<body>
				<header>
					Header
				</header>
			Nested content!
				<footer>
					Footer
				</footer>
			
			</body>
			
			</html>`;

		before (async () =>
			{
				processor = new HotPreprocessor ();
			});

		it ("should add a page and load the file", async () =>
			{
				let file: HotFile = new HotFile ({
						"localFile": "./tests/local/include.hott"
					});
				await file.load ();
				let page: HotPage = new HotPage ({
						"processor": processor,
						"name": "Test Page",
						"files": [file]
					});
				processor.addPage (page);
			});
		it ("should process the page", async () =>
			{
				let output: string = await processor.process ("Test Page");
				const comparison: string = finalContent.replace (/\s/g, "");

				output = output.replace (/\s/g, "");

				expect (output).to.equal (comparison);
			});
		it ("HotPreprocessor.processLocalFile: should process content that contains a header and a footer ", async () =>
			{
				let output: string = await HotPreprocessor.processLocalFile ("./tests/local/include.hott");
				const comparison: string = finalContent.replace (/\s/g, "");

				output = output.replace (/\s/g, "");

				expect (output).to.equal (comparison);
			});
		it ("HotPreprocessor.processLocalFile: should process content that contains an if statement", async () =>
			{
				let output: string = await HotPreprocessor.processLocalFile ("./tests/local/if.hott");
				const comparison: string = ifFinalContent.replace (/\s/g, "");

				output = output.replace (/\s/g, "");

				expect (output).to.equal (comparison);
			});
		it ("HotPreprocessor.processLocalFile: should process nested content", async () =>
			{
				let output: string = await HotPreprocessor.processLocalFile ("./tests/local/nested1.hott");
				const comparison: string = nestedFinalContent.replace (/\s/g, "");

				output = output.replace (/\s/g, "");

				expect (output).to.equal (comparison);
			});
	});