const webpack = require ("webpack");

const fs = require ("fs");
const ppath = require ("path");

const packageStr = fs.readFileSync (process.cwd () + "/package.json").toString ();
const packageJSON = JSON.parse (packageStr);
let packageVersion = packageJSON.version.toString ();

module.exports = {
		entry: "./tests/components/Components.ts",
		devtool: "inline-source-map",
		target: "web",
		module: {
			rules: [{
					test: new RegExp ("\.tsx?$"),
					use: [{
							loader: "ts-loader",
							options: {
									transpileOnly: true,
									configFile: "tsconfig-web.json"
								}
						}],
					exclude: /node_modules/
				}]
		},
		plugins: [
			new webpack.DefinePlugin ({
					__VERSION__: `\"${packageVersion}\"`
				})
		],
		resolve: {
			extensions: [".tsx", ".ts", ".js"]
		},
		node: {
			fs: "empty",
			crypto: "empty",
			stream: "empty",
			net: "empty",
			tls: "empty",
			child_process: "empty"
		},
		externals: {
			hotpreprocessor: "HotPreprocessorWeb"
		},
		output: {
			filename: "HotPreprocessorTests.js",
			path: ppath.resolve (process.cwd (), "build-web"),
			library: "HotPreprocessorTests",
			libraryTarget: "umd"
		}
	};