**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotSite

# Interface: HotSite

A HotSite to load.

## Hierarchy

* **HotSite**

## Index

### Properties

* [apis](hotsite.md#apis)
* [components](hotsite.md#components)
* [files](hotsite.md#files)
* [hotsitePath](hotsite.md#hotsitepath)
* [name](hotsite.md#name)
* [publicSecrets](hotsite.md#publicsecrets)
* [routes](hotsite.md#routes)
* [server](hotsite.md#server)
* [testing](hotsite.md#testing)

## Properties

### apis

• `Optional` **apis**: { [name:string]: { apiName: string ; exportedName: string ; jsapi: string ; port: number  };  }

*Defined in [HotPreprocessor.ts:180](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L180)*

The available APIs on the server. The server must already have these
loaded.

___

### components

• `Optional` **components**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:215](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L215)*

The components to load and register.

___

### files

• `Optional` **files**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:226](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L226)*

The files to load and save in memory.

___

### hotsitePath

• `Optional` **hotsitePath**: string

*Defined in [HotPreprocessor.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L84)*

The path to the current HotSite. This is filled in during parsing.

___

### name

• `Optional` **name**: string

*Defined in [HotPreprocessor.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L80)*

The name of this HotSite.

___

### publicSecrets

• `Optional` **publicSecrets**: { [name:string]: string \| { passSecretFromAPI?: string  };  }

*Defined in [HotPreprocessor.ts:203](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L203)*

Secrets that can be publicly embedded into the page.

___

### routes

• `Optional` **routes**: { [routeName:string]: [HotSiteRoute](hotsiteroute.md);  }

*Defined in [HotPreprocessor.ts:173](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L173)*

The routes to load.

___

### server

• `Optional` **server**: { jsSrcPath?: string ; name?: string ; ports?: { http?: number ; https?: number ; redirectHTTPtoHTTPS?: boolean  } ; serveDirectories?: { localPath: string ; route: string  }[] ; serveHottFiles?: boolean ; url?: string  }

*Defined in [HotPreprocessor.ts:88](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L88)*

Additional server configuration.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`jsSrcPath?` | string | The JavaScript source path. |
`name?` | string | The default name for a served Hott file. |
`ports?` | { http?: number ; https?: number ; redirectHTTPtoHTTPS?: boolean  } | The ports to use. |
`serveDirectories?` | { localPath: string ; route: string  }[] | The list of directory to serve to the client from the server. |
`serveHottFiles?` | boolean | Serve hott files when requested. |
`url?` | string | The base url for a hott file. |

___

### testing

• `Optional` **testing**: { createNewTester?: boolean ; driver?: string ; launchpadUrl?: string ; maps?: string[] ; tester?: string ; testerAPIUrl?: string ; testerName?: string  }

*Defined in [HotPreprocessor.ts:139](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotPreprocessor.ts#L139)*

Testing related functionality.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`createNewTester?` | boolean | If set to true, this will create a new tester. Default Value: true |
`driver?` | string | The name of the test driver to use. |
`launchpadUrl?` | string | The url to the html that loads the hott files. |
`maps?` | string[] | The maps to test in order. |
`tester?` | string | The tester class to use. EX: HotTesterMochaSelenium |
`testerAPIUrl?` | string | The url that connects to the tester api server. |
`testerName?` | string | The name of the tester to use. |
