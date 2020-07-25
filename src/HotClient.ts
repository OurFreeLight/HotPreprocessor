import { HotPreprocessor } from "./HotPreprocessor";
import { HotAPI } from "./HotAPI";
import { HotServerType } from "./HotServer";
import { HotLog } from "./HotLog";

/**
 * A client connected to a server.
 */
export class HotClient
{
	/**
	 * The processor to use.
	 */
	processor: HotPreprocessor;
	/**
	 * The API to use.
	 */
	api: HotAPI;
	/**
	 * The type of server.
	 */
	type: HotServerType;
	/**
	 * The logger.
	 */
	logger: HotLog;

	constructor (processor: HotPreprocessor)
	{
		this.processor = processor;
		this.api = null;
		this.type = HotServerType.HTTP;
		this.logger = processor.logger;
	}
}