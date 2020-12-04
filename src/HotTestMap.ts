import { HotTestElement } from "./HotTestElement";
import { HotTestDriver } from "./HotTestDriver";

/**
 * Create a test path for later execution.
 */
export type HotTestPath = (driver: HotTestDriver, ...args: any) => Promise<any>;

/**
 * A page containing only test related info.
 */
export interface HotTestPage
{
	/**
	 * The elements to test on this map.
	 */
	testElements: { [name: string]: HotTestElement; };
	/**
	 * The test paths to test on this map.
	 */
	testPaths: { [name: string]: HotTestPath; };
}

/**
 * Maps the paths that are taken to complete a test.
 */
export class HotTestMap
{
	/**
	 * The order in which paths are to be taken. Each destination is a string 
	 * in a type -> path order. The type could be either a page or api route. 
	 * For example:
	 * [
	 *      "page:signin_page -> signin_path",
	 *      "page:account_page -> change_username_path",
	 *      "page:account_page -> change_password_path",
	 *      "page:account_page -> change_name_path -> change_address_path",
	 * 		"page:account_page -> signout_path",
	 * 		"api:account_api_route -> signout_route_method -> signout_test_path"
	 * ]
	 * 
	 * The first string to the left of the -> will always be the type, such as a 
	 * page or an api route. Any strings to the right of the -> will be a path, even 
	 * when chaining addtional ->'s.
	 */
	destinations: string[];
	/**
	 * The test pages to execute.
	 */
	pages: {
			[name: string]: HotTestPage
		};

	constructor (destinations: string[] = [], pages: { [name: string]: HotTestPage } = {})
	{
		this.destinations = destinations;
		this.pages = pages;
	}
}