import * as fs from "fs";
import * as fse from "fs-extra";

/**
 * Handles IO for the server.
 */
export class HotIO
{
	/**
	 * Read a text file.
	 */
	static async readTextFile (path: string): Promise<string>
	{
		return (await new Promise (
			(resolve: any, reject: any): void =>
			{
				fs.readFile (path, (err: NodeJS.ErrnoException, data: Buffer): void =>
					{
						if (err != null)
							throw err;

						let content: string = data.toString ();

						resolve (content);
					});
			}));
	}

	/**
	 * Write to a text file.
	 */
	static async writeTextFile (path: string, content: string): Promise<string>
	{
		return (await new Promise (
			(resolve: any, reject: any): void =>
			{
				fs.writeFile (path, content, (err: NodeJS.ErrnoException): void =>
					{
						if (err != null)
							throw err;

						resolve ();
					});
			}));
	}

	/**
	 * Make a directory.
	 */
	static async mkdir (path: string): Promise<void>
	{
		return (await new Promise (
			(resolve: any, reject: any): void =>
			{
				fs.mkdir (path, { recursive: true }, 
					(err: NodeJS.ErrnoException, path: string) => 
					{
						if (err != null)
							throw err;

						resolve ();
					});
			}));
	}

	/**
	 * Copy files to a location.
	 */
	static async copyFiles (src: string, dest: string): Promise<void>
	{
		return (fse.copy (src, dest));
    }

	/**
	 * Checks if a file is at a location.
	 */
	static async exists (path: string): Promise<boolean>
	{
		return (new Promise<boolean> ((resolve, reject) =>
			{
				fs.stat (path, (err: NodeJS.ErrnoException, stats: fs.Stats) =>
					{
						if (err != null)
						{
							if (err.code === "ENOENT")
								resolve (false);
							else
								throw err;
						}

						resolve (true);
					});
			}));
    }
}