**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotSite

# Interface: HotSite

A HotSite to load. This SHOULD NOT contain any private secret keys, passwords,
or database connection information related to the server. As such, future
versions of the HotSite interface should not contain any database related
connection info.

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

• `Optional` **apis**: { [name:string]: { apiName?: string ; exportedName?: string ; jsapi?: string ; port?: number ; url?: string  };  }

*Defined in [HotPreprocessor.ts:184](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L184)*

The available APIs on the server. The server must already have these
loaded.

___

### components

• `Optional` **components**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:223](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L223)*

The components to load and register.

___

### files

• `Optional` **files**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:234](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L234)*

The files to load and save in memory.

___

### hotsitePath

• `Optional` **hotsitePath**: string

*Defined in [HotPreprocessor.ts:88](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L88)*

The path to the current HotSite. This is filled in during parsing.

___

### name

•  **name**: string

*Defined in [HotPreprocessor.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L84)*

The name of this HotSite.

___

### publicSecrets

• `Optional` **publicSecrets**: { [name:string]: string \| { passSecretFromAPI?: string  };  }

*Defined in [HotPreprocessor.ts:211](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L211)*

Secrets that can be publicly embedded into the page.

___

### routes

• `Optional` **routes**: { [routeName:string]: [HotSiteRoute](hotsiteroute.md);  }

*Defined in [HotPreprocessor.ts:177](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L177)*

The routes to load.

___

### server

• `Optional` **server**: { jsSrcPath?: string ; name?: string ; ports?: { http?: number ; https?: number ; redirectHTTPtoHTTPS?: boolean  } ; serveDirectories?: { localPath: string ; route: string  }[] ; serveHottFiles?: boolean ; url?: string  }

*Defined in [HotPreprocessor.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L92)*

Additional web server configuration.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`jsSrcPath?` | string | The JavaScript source path. |
`name?` | string | The default name for a served Hott file. |
`ports?` | { http?: number ; https?: number ; redirectHTTPtoHTTPS?: boolean  } | The ports to use. |
`serveDirectories?` | { localPath: string ; route: string  }[] | The list of directory to serve to the client from the server. |
`serveHottFiles?` | boolean | Serve hott files when requested. |
`url?` | string | The base url for the server. |

___

### testing

• `Optional` **testing**: { createNewTester?: boolean ; driver?: string ; launchpadUrl?: string ; maps?: string[] ; tester?: string ; testerAPIUrl?: string ; testerName?: string  }

*Defined in [HotPreprocessor.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L143)*

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
