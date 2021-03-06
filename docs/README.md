hotpreprocessor / [Exports](modules.md)

# Hotpreprocessor
Need something similar to PHP in Node.js? We got you barely covered then ;)

Hotpreprocessor is a server-side or client-side HTML preprocessor. In order to keep Node.js running efficiently, it's best to have Hotpreprocessor execute hott scripts client-side in the client's web browser. Unfortunately, ES6 is currently required in the client's web browser in order to execute. This of course will be fixed eventually, so Internet Explorer 11 will be able to execute as well. Gross, yes, I know.

It's important to keep the number of dependencies required for Hotpreprocessor down to a minimum, so as it can be used in secure environments.

Hotpreprocessor is capable of processing code server-side and client-side.

This project started off originally as just a simple HTML preprocessor, but has grown into something much much more.

[Hott Reference](./docs/classes/hot.md)

[Server Reference](./docs/globals.md)

## Getting started
First you gotta install like so:

	npm install hotpreprocessor

Then you can create your first hott script! Create a file called ```HelloWorld.hott```, inside it, enter your HTML:

	<!DOCTYPE html>
	<html>

	<head>
		<title>Hello World Page</title>
	</head>
	
	<body>
	<*
		Hot.echo ("Hello");
	*>
	<*
		Hot.echo ("World!");
	*>
	</body>
	
	</html>

Save the file as index.hott, then start serving the current directory by using:

	import { HotHTTPServer } from "hotpreprocessor";

	HotHTTPServer.startServer ();

## Custom Express processing example
Here's a sample Express app to test the above hott script:

	const express = require ("express");

	const app = express ();
	const port = 80;

	app.use (express.static ("./public/"));
	app.get ("/", async (req, res) => 
		{
			// Process HelloWorld.hott from the server-side. Warning! This should never be done
			// due to performance reasons.
			let output = await HotPreprocessor.processLocalFile ("./HelloWorld.hott");

			res.send (output);
		});
	app.listen (port, () =>
		{
			console.log (`Running on port http://127.0.0.1:${port}/`);
		});

This assumes all your HTML content and images are being served out of the ```./public/``` directory.

The above Express example should never be done, mostly to keep Node.js running efficiently. The best method is to always have hott scripts process in the browser on the client side in the next example.

## Web browser processing example (Preferred method)
When used in a browser, Hotpreprocessor is meant to replace the entire page it's on, and continue to control the navigation of the pages. To use it, create a new HTML file and enter:

	<!DOCTYPE html>
	<html>

	<head>
		<title>Page</title>

		<script type = "text/javascript" src = "./HotPreprocessor.js"></script>

		<script type = "text/javascript">
			var HotPreprocessor = HotPreprocessorWeb.HotPreprocessor;
			HotPreprocessor.displayUrl ("./HelloWorld.hott");
		</script>
	</head>

	<body>
	</body>

	</html>

You can find a pre-built ```HotPreprocessor.js``` in ```node_modules/hotpreprocessor/build-web/HotPreprocessor.js```

## Running database tests
Make sure you have Docker installed, then do:

	buildci run tests

If you need to debug any issues with the tests, you'll have to run a MySQL (or MariaDB) docker container in the background like so:

	docker run -d --name=mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=cdO1KjwiC8ksOqCV1s0 -e MYSQL_DATABASE=freelight mariadb

This will run the MariaDB container with the MySQL root password set to ```cdO1KjwiC8ksOqCV1s0``` and will create the initial starting database to ```freelight```.

## Possible Future Compiler
I'd like to create a CLI tool that compresses the entire public html directory into a zip file which can be downloaded and unzipped during runtime by the client's web browser then display the pages. During the compilation phase it would look for vulnerabilities and report them; for example when embedding JS files, if integrity hashes are missing, it would complain.
