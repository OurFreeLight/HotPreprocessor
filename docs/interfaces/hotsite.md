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
* [publicSecrets](hotsite.md#publicsecrets)
* [routes](hotsite.md#routes)
* [serveDirectories](hotsite.md#servedirectories)
* [server](hotsite.md#server)
* [testing](hotsite.md#testing)

## Properties

### apis

• `Optional` **apis**: { [name:string]: { apiName: string ; exportedName: string ; jsapi: string  };  }

*Defined in [HotPreprocessor.ts:154](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L154)*

The available APIs on the server. The server must already have these
loaded.

___

### components

• `Optional` **components**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:185](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L185)*

The components to load and register.

___

### files

• `Optional` **files**: { [name:string]: { url: string  };  }

*Defined in [HotPreprocessor.ts:196](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L196)*

The files to load and save in memory.

___

### publicSecrets

• `Optional` **publicSecrets**: { [name:string]: string \| { passSecretFromAPI?: string  };  }

*Defined in [HotPreprocessor.ts:173](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L173)*

Secrets that can be publicly embedded into the page.

___

### routes

• `Optional` **routes**: { [routeName:string]: [HotSiteRoute](hotsiteroute.md);  }

*Defined in [HotPreprocessor.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L147)*

The routes to load.

___

### serveDirectories

• `Optional` **serveDirectories**: { localPath: string ; route: string  }[]

*Defined in [HotPreprocessor.ts:79](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L79)*

The list of directory to serve to the client from the server.

___

### server

•  **server**: { jsSrcPath: string ; name: string ; serveHottFiles: boolean ; url: string  }

*Defined in [HotPreprocessor.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L92)*

Additional server configuration.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`jsSrcPath` | string | The JavaScript source path. |
`name` | string | The default name for a served Hott file. |
`serveHottFiles` | boolean | Serve hott files when requested. |
`url` | string | The base url for a hott file. |

___

### testing

• `Optional` **testing**: { createNewTester?: boolean ; driver?: string ; launchpadUrl?: string ; maps?: string[] ; tester?: string ; testerAPIUrl?: string ; testerName?: string  }

*Defined in [HotPreprocessor.ts:113](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotPreprocessor.ts#L113)*

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
