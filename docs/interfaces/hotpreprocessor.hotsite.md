[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotPreprocessor](../modules/hotpreprocessor.md) / HotSite

# Interface: HotSite

[HotPreprocessor](../modules/hotpreprocessor.md).HotSite

A HotSite to load. This SHOULD NOT contain any private secret keys, passwords,
or database connection information related to the server. As such, future
versions of the HotSite interface should not contain any database related
connection info.

## Table of contents

### Properties

- [apis](hotpreprocessor.hotsite.md#apis)
- [components](hotpreprocessor.hotsite.md#components)
- [files](hotpreprocessor.hotsite.md#files)
- [hotsitePath](hotpreprocessor.hotsite.md#hotsitepath)
- [name](hotpreprocessor.hotsite.md#name)
- [publicSecrets](hotpreprocessor.hotsite.md#publicsecrets)
- [routes](hotpreprocessor.hotsite.md#routes)
- [server](hotpreprocessor.hotsite.md#server)
- [testing](hotpreprocessor.hotsite.md#testing)

## Properties

### apis

• `Optional` **apis**: *object*

The available APIs on the server. The server must already have these
loaded.

#### Type declaration:

Defined in: [HotPreprocessor.ts:184](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L184)

___

### components

• `Optional` **components**: *object*

The components to load and register.

#### Type declaration:

Defined in: [HotPreprocessor.ts:227](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L227)

___

### files

• `Optional` **files**: *object*

The files to load and save in memory.

#### Type declaration:

Defined in: [HotPreprocessor.ts:238](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L238)

___

### hotsitePath

• `Optional` **hotsitePath**: *string*

The path to the current HotSite. This is filled in during parsing.

Defined in: [HotPreprocessor.ts:88](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L88)

___

### name

• **name**: *string*

The name of this HotSite.

Defined in: [HotPreprocessor.ts:84](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L84)

___

### publicSecrets

• `Optional` **publicSecrets**: *object*

Secrets that can be publicly embedded into the page.

#### Type declaration:

Defined in: [HotPreprocessor.ts:215](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L215)

___

### routes

• `Optional` **routes**: *object*

The routes to load.

#### Type declaration:

Defined in: [HotPreprocessor.ts:177](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L177)

___

### server

• `Optional` **server**: *object*

Additional web server configuration.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`jsSrcPath`? | *string* | The JavaScript source path.   |
`name`? | *string* | The default name for a served Hott file.   |
`ports`? | *object* | The ports to use.   |
`ports.http`? | *number* | The HTTP port to serve on.   |
`ports.https`? | *number* | The HTTPS port to serve on.   |
`ports.redirectHTTPtoHTTPS`? | *boolean* | If set to true, this will redirect from HTTP to HTTPS.   |
`serveDirectories`? | { `localPath`: *string* ; `route`: *string*  }[] | The list of directory to serve to the client from the server.   |
`serveHottFiles`? | *boolean* | Serve hott files when requested.   |
`url`? | *string* | The base url for the server.   |

Defined in: [HotPreprocessor.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L92)

___

### testing

• `Optional` **testing**: *object*

Testing related functionality.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`createNewTester`? | *boolean* | If set to true, this will create a new tester. Default Value: true   |
`driver`? | *string* | The name of the test driver to use.   |
`launchpadUrl`? | *string* | The url to the html that loads the hott files.   |
`maps`? | *string*[] | The maps to test in order.   |
`tester`? | *string* | The tester class to use. EX: HotTesterMochaSelenium   |
`testerAPIUrl`? | *string* | The url that connects to the tester api server.   |
`testerName`? | *string* | The name of the tester to use.   |

Defined in: [HotPreprocessor.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotPreprocessor.ts#L143)
