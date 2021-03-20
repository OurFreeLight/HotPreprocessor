import * as ppath from "path";
import { HotIO } from "./HotIO";

import { HotPreprocessor, HotSite } from "./HotPreprocessor";
import { HotLog } from "./HotLog";

/**
 * Builds stuff for the CLI like docker images and Kubernetes clusters.
 */
export class HotBuilder
{
	/**
	 * The HotSites to build from.
	 */
	protected hotsites: HotSite[];
	/**
	 * Will build the Dockerfiles.
	 */
	dockerFiles: boolean;
	/**
	 * Will build the Docker compose file.
	 */
	dockerCompose: boolean;
	/**
	 * Will build the Kubernetes cluster.
	 */
	kubernetes: boolean;
	/**
	 * The logger.
	 */
	logger: HotLog;
	/**
	 * The output directory.
	 */
	outputDir: string;

	constructor (logger: HotLog = new HotLog ())
	{
		this.dockerFiles = false;
		this.dockerCompose = false;
		this.kubernetes = false;
		this.hotsites = [];
		this.logger = logger;
		this.outputDir = ppath.normalize (`${process.cwd ()}/`);
	}

	/**
	 * Build everything and output to outputDir.
	 * 
	 * @fixme Needs tests!
	 */
	async build (hotsites: HotSite[]): Promise<void>
	{
		this.hotsites = hotsites;

		if (this.dockerFiles === true)
		{
			this.logger.info ("Building docker files...");

			const dockerDir: string = ppath.normalize (`${__dirname}/../../builder/docker`);
			const dockerFileContent: string = await HotIO.readTextFile (
						ppath.normalize (`${dockerDir}/Dockerfile.linux.gen`));
			const startFileContent: string = await HotIO.readTextFile (
						ppath.normalize (`${dockerDir}/app/start.sh`));

			for (let iIdx = 0; iIdx < this.hotsites.length; iIdx++)
			{
				const hotsite: HotSite = this.hotsites[iIdx];

				this.logger.info (`Building Dockerfile "${hotsite.name}"...`);

				if (hotsite.name == null)
					throw new Error (`HotSite ${hotsite.hotsitePath} is missing a name!`);

				HotPreprocessor.checkHotSiteName (hotsite.name, true);

				const hotsiteName: string = hotsite.name;
				let outputDir: string = ppath.normalize (`${this.outputDir}/docker/${hotsiteName}`);
				let newDockerfileContent: string = dockerFileContent;
				let newStartFileContent: string = startFileContent;
				let portsStr: string = "";
				let httpPort: number = HotPreprocessor.getValueFromHotSiteObj (hotsite, ["server", "ports", "http"]);
				let httpsPort: number = HotPreprocessor.getValueFromHotSiteObj (hotsite, ["server", "ports", "https"]);
				let hotsitePath: string = `/app/${hotsiteName}/HotSite.json`;
				/**
				 * Replace any keywords in a string.
				 */
				let replaceKeywords = (str: string): string =>
					{
						str = str.replace (/\$\{HOTSITE_NAME\}/g, hotsiteName);
						str = str.replace (/\$\{PORTS\}/g, portsStr);
						str = str.replace (/\$\{HOTSITE_PATH\}/g, hotsitePath);

						return (str);
					};
				/**
				 * Replace any keywords in a file.
				 */
				let replaceKeywordsInFile = async (filepath: string): Promise<string> =>
					{
						let fileContent: string = await HotIO.readTextFile (ppath.normalize (filepath));
						fileContent = replaceKeywords (fileContent);

						return (fileContent);
					};

				await HotIO.mkdir (`${outputDir}/app/`);

				if (httpPort != null)
				{
					portsStr += `ARG HTTP_PORT=${httpPort}
ENV HTTP_PORT \${HTTP_PORT}
EXPOSE \${HTTP_PORT}`;
				}

				if (httpsPort != null)
				{
					portsStr += `ARG HTTPS_PORT=${httpsPort}
ENV HTTPS_PORT \${HTTPS_PORT}
EXPOSE \${HTTPS_PORT}`;
				}

				if (portsStr === "")
				{
					portsStr += `ARG HTTP_PORT=80
ENV HTTP_PORT \${HTTP_PORT}
EXPOSE \${HTTP_PORT}`;
				}

				newDockerfileContent = replaceKeywords (newDockerfileContent);
				newStartFileContent = replaceKeywords (newStartFileContent);

				await HotIO.writeTextFile (`${outputDir}/Dockerfile`, newDockerfileContent);
				await HotIO.writeTextFile (`${outputDir}/build.bat`, await replaceKeywordsInFile (`${dockerDir}/scripts/build.bat`));
				await HotIO.writeTextFile (`${outputDir}/build.sh`, await replaceKeywordsInFile (`${dockerDir}/scripts/build.sh`));
				await HotIO.writeTextFile (`${outputDir}/app/${hotsiteName}-start.sh`, newStartFileContent);

				this.logger.info (`Finished building Dockerfile "${hotsite.name}"...`);
			}

			this.logger.info ("Finished building docker files...");
		}
	}
}