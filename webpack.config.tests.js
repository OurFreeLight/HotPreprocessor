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
									transpileOnly: true
								}
						}],
					exclude: new RegExp ("node_modules")
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
			fs: "empty"
		},
		output: {
			filename: "HotPreprocessorTests.js",
			path: ppath.resolve (process.cwd (), "build-web"),
			library: "HotPreprocessorTests",
			libraryTarget: "umd"
		}
	};