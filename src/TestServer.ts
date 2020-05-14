import { Common } from "../tests/browser/Common";

async function start ()
{
	let common: Common = new Common ();

	await common.startServer ();
}

start ();