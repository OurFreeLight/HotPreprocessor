[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotHTTPServer](../modules/hothttpserver.md) / HotHTTPServer

# Class: HotHTTPServer

[HotHTTPServer](../modules/hothttpserver.md).HotHTTPServer

A HTTP server.

## Hierarchy

* [*HotServer*](hotserver.hotserver-1.md)

  ↳ **HotHTTPServer**

## Table of contents

### Constructors

- [constructor](hothttpserver.hothttpserver-1.md#constructor)

### Properties

- [api](hothttpserver.hothttpserver-1.md#api)
- [expressApp](hothttpserver.hothttpserver-1.md#expressapp)
- [hottFilesAssociatedInfo](hothttpserver.hothttpserver-1.md#hottfilesassociatedinfo)
- [httpListener](hothttpserver.hothttpserver-1.md#httplistener)
- [httpsListener](hothttpserver.hothttpserver-1.md#httpslistener)
- [ignoreHottFiles](hothttpserver.hothttpserver-1.md#ignorehottfiles)
- [listenAddress](hothttpserver.hothttpserver-1.md#listenaddress)
- [logger](hothttpserver.hothttpserver-1.md#logger)
- [ports](hothttpserver.hothttpserver-1.md#ports)
- [processor](hothttpserver.hothttpserver-1.md#processor)
- [redirectHTTPtoHTTPS](hothttpserver.hothttpserver-1.md#redirecthttptohttps)
- [routes](hothttpserver.hothttpserver-1.md#routes)
- [secrets](hothttpserver.hothttpserver-1.md#secrets)
- [serveHottFiles](hothttpserver.hothttpserver-1.md#servehottfiles)
- [serverType](hothttpserver.hothttpserver-1.md#servertype)
- [ssl](hothttpserver.hothttpserver-1.md#ssl)
- [staticRoutes](hothttpserver.hothttpserver-1.md#staticroutes)
- [type](hothttpserver.hothttpserver-1.md#type)

### Methods

- [addRoute](hothttpserver.hothttpserver-1.md#addroute)
- [addStaticRoute](hothttpserver.hothttpserver-1.md#addstaticroute)
- [clearErrorHandlingRoutes](hothttpserver.hothttpserver-1.md#clearerrorhandlingroutes)
- [getStaticRoute](hothttpserver.hothttpserver-1.md#getstaticroute)
- [listen](hothttpserver.hothttpserver-1.md#listen)
- [preregisterRoute](hothttpserver.hothttpserver-1.md#preregisterroute)
- [registerRoute](hothttpserver.hothttpserver-1.md#registerroute)
- [registerStaticRoute](hothttpserver.hothttpserver-1.md#registerstaticroute)
- [serveDirectory](hothttpserver.hothttpserver-1.md#servedirectory)
- [setAPI](hothttpserver.hothttpserver-1.md#setapi)
- [setErrorHandlingRoutes](hothttpserver.hothttpserver-1.md#seterrorhandlingroutes)
- [shutdown](hothttpserver.hothttpserver-1.md#shutdown)
- [checkIfFileExists](hothttpserver.hothttpserver-1.md#checkiffileexists)
- [getFileUploads](hothttpserver.hothttpserver-1.md#getfileuploads)
- [startServer](hothttpserver.hothttpserver-1.md#startserver)

## Constructors

### constructor

\+ **new HotHTTPServer**(`processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `httpPort?`: *number*, `httpsPort?`: *number*): [*HotHTTPServer*](hothttpserver.hothttpserver-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`processor` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | - |
`httpPort` | *number* | null |
`httpsPort` | *number* | null |

**Returns:** [*HotHTTPServer*](hothttpserver.hothttpserver-1.md)

Inherited from: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotHTTPServer.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L98)

## Properties

### api

• **api**: [*HotAPI*](hotapi.hotapi-1.md)

The API to use.

Inherited from: [HotServer](hotserver.hotserver-1.md).[api](hotserver.hotserver-1.md#api)

Defined in: [HotServer.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L94)

___

### expressApp

• **expressApp**: *Express*

The express app to use.

Defined in: [HotHTTPServer.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L40)

___

### hottFilesAssociatedInfo

• **hottFilesAssociatedInfo**: *object*

The associated info with any hott files served. All values here will be
overwritten by whatever values are set in the server object in HotSite.json.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`jsSrcPath` | *string* | The JavaScript source path.   |
`name` | *string* | The default name for a served Hott file.   |
`url` | *string* | The base url for a hott file.   |

Defined in: [HotHTTPServer.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L85)

___

### httpListener

• **httpListener**: *Server*

The HTTP listener to use.

Defined in: [HotHTTPServer.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L44)

___

### httpsListener

• **httpsListener**: *Server*

The HTTPS listener to use.

Defined in: [HotHTTPServer.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L48)

___

### ignoreHottFiles

• **ignoreHottFiles**: *object*

Do not serve these hott files.

#### Type declaration:

Defined in: [HotHTTPServer.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L80)

___

### listenAddress

• **listenAddress**: *string*

The network address to listen on.

Inherited from: [HotServer](hotserver.hotserver-1.md).[listenAddress](hotserver.hotserver-1.md#listenaddress)

Defined in: [HotServer.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L98)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The logger.

Inherited from: [HotServer](hotserver.hotserver-1.md).[logger](hotserver.hotserver-1.md#logger)

Defined in: [HotServer.ts:134](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L134)

___

### ports

• **ports**: *object*

The ports to use.

#### Type declaration:

Name | Type |
:------ | :------ |
`http` | *number* |
`https` | *number* |

Inherited from: [HotServer](hotserver.hotserver-1.md).[ports](hotserver.hotserver-1.md#ports)

Defined in: [HotServer.ts:102](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L102)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Inherited from: [HotServer](hotserver.hotserver-1.md).[processor](hotserver.hotserver-1.md#processor)

Defined in: [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L86)

___

### redirectHTTPtoHTTPS

• **redirectHTTPtoHTTPS**: *boolean*

Redirect HTTP traffic to HTTPS.

Inherited from: [HotServer](hotserver.hotserver-1.md).[redirectHTTPtoHTTPS](hotserver.hotserver-1.md#redirecthttptohttps)

Defined in: [HotServer.ts:126](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L126)

___

### routes

• **routes**: { `method`: (`req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>) => *Promise*<void\> ; `route`: *string* ; `type`: [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md)  }[]

Any non-static routes that need to be added. These
will be added during the preregistration phase, before
all API routes are added.

Defined in: [HotHTTPServer.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L58)

___

### secrets

• **secrets**: *any*

Any secrets associated with this server.

Inherited from: [HotServer](hotserver.hotserver-1.md).[secrets](hotserver.hotserver-1.md#secrets)

Defined in: [HotServer.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L138)

___

### serveHottFiles

• **serveHottFiles**: *boolean*

Serve hott files when requested. This value will be overwritten by whatever
value is set to server.serveHottFiles in HotSite.json.

Defined in: [HotHTTPServer.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L76)

___

### serverType

• **serverType**: *string*

The server type.

Inherited from: [HotServer](hotserver.hotserver-1.md).[serverType](hotserver.hotserver-1.md#servertype)

Defined in: [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L90)

___

### ssl

• **ssl**: *object*

SSL settings.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`ca` | *string* | The SSL certificate CA to use.   |
`cert` | *string* | The SSL certificate to use.   |
`key` | *string* | The SSL certificate key to use.   |

Inherited from: [HotServer](hotserver.hotserver-1.md).[ssl](hotserver.hotserver-1.md#ssl)

Defined in: [HotServer.ts:109](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L109)

___

### staticRoutes

• **staticRoutes**: [*StaticRoute*](../interfaces/hothttpserver.staticroute.md)[]

The static files and folders to serve.

Defined in: [HotHTTPServer.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L52)

___

### type

• **type**: [*HotServerType*](../enums/hotserver.hotservertype.md)

The type of server.

Inherited from: [HotServer](hotserver.hotserver-1.md).[type](hotserver.hotserver-1.md#type)

Defined in: [HotServer.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L130)

## Methods

### addRoute

▸ **addRoute**(`route`: *string*, `method`: (`req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>) => *Promise*<void\>, `type?`: [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md)): *void*

Add a route. This will be registered before any APIs are registered.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | *string* |
`method` | (`req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>) => *Promise*<void\> |
`type` | [*HTTPMethod*](../enums/hotroutemethod.httpmethod.md) |

**Returns:** *void*

Defined in: [HotHTTPServer.ts:215](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L215)

___

### addStaticRoute

▸ **addStaticRoute**(`route`: *string* \| [*StaticRoute*](../interfaces/hothttpserver.staticroute.md), `localPath?`: *string*): *void*

Add a static route.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`route` | *string* \| [*StaticRoute*](../interfaces/hothttpserver.staticroute.md) | - |
`localPath` | *string* | "." |

**Returns:** *void*

Defined in: [HotHTTPServer.ts:194](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L194)

___

### clearErrorHandlingRoutes

▸ **clearErrorHandlingRoutes**(): *void*

Clear the last two express routes, which are reserved for the
error handlers.

**Returns:** *void*

Defined in: [HotHTTPServer.ts:668](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L668)

___

### getStaticRoute

▸ **getStaticRoute**(`route`: *string*): [*StaticRoute*](../interfaces/hothttpserver.staticroute.md)

Get a static route.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | *string* |

**Returns:** [*StaticRoute*](../interfaces/hothttpserver.staticroute.md)

Defined in: [HotHTTPServer.ts:252](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L252)

___

### listen

▸ **listen**(): *Promise*<void\>

Start listening for requests.

**Returns:** *Promise*<void\>

Overrides: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotHTTPServer.ts:696](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L696)

___

### preregisterRoute

▸ **preregisterRoute**(): *void*

The routes to add before registering a route.

**Returns:** *void*

Defined in: [HotHTTPServer.ts:440](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L440)

___

### registerRoute

▸ **registerRoute**(`route`: [*HotRoute*](hotroute.hotroute-1.md)): *Promise*<void\>

Register a route.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*HotRoute*](hotroute.hotroute-1.md) |

**Returns:** *Promise*<void\>

Overrides: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotHTTPServer.ts:274](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L274)

___

### registerStaticRoute

▸ **registerStaticRoute**(`route`: [*StaticRoute*](../interfaces/hothttpserver.staticroute.md)): *void*

Register a static route with Express.

#### Parameters:

Name | Type |
:------ | :------ |
`route` | [*StaticRoute*](../interfaces/hothttpserver.staticroute.md) |

**Returns:** *void*

Defined in: [HotHTTPServer.ts:238](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L238)

___

### serveDirectory

▸ **serveDirectory**(`route`: *string* \| [*StaticRoute*](../interfaces/hothttpserver.staticroute.md), `localPath?`: *string*): *void*

Serve a directory. This is an alias for addStaticRoute.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`route` | *string* \| [*StaticRoute*](../interfaces/hothttpserver.staticroute.md) | - |
`localPath` | *string* | "." |

**Returns:** *void*

Defined in: [HotHTTPServer.ts:230](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L230)

___

### setAPI

▸ **setAPI**(`api`: [*HotAPI*](hotapi.hotapi-1.md)): *Promise*<void\>

Set an API to this server. This will also set the associated
processor to this API as well.

#### Parameters:

Name | Type |
:------ | :------ |
`api` | [*HotAPI*](hotapi.hotapi-1.md) |

**Returns:** *Promise*<void\>

Inherited from: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotServer.ts:188](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L188)

___

### setErrorHandlingRoutes

▸ **setErrorHandlingRoutes**(`handle404?`: (`req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>, `next`: *any*) => *void*, `handleOther?`: (`err`: *any*, `req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>, `next`: *any*) => *void*): *void*

Set the error handlers. This will create two express routes at the bottom of the
route stack. The first will be to capture any 404 errors, the second would be to
catch any remaining errors.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`handle404` | (`req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>, `next`: *any*) => *void* | null |
`handleOther` | (`err`: *any*, `req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `res`: *Response*<any\>, `next`: *any*) => *void* | null |

**Returns:** *void*

Defined in: [HotHTTPServer.ts:628](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L628)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

Shutdown the server.

**Returns:** *Promise*<void\>

Overrides: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotHTTPServer.ts:922](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L922)

___

### checkIfFileExists

▸ `Static`**checkIfFileExists**(`filepath`: *string*): *Promise*<boolean\>

Check if a file exists.

#### Parameters:

Name | Type |
:------ | :------ |
`filepath` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [HotHTTPServer.ts:423](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L423)

___

### getFileUploads

▸ `Static`**getFileUploads**(`req`: *Request*<ParamsDictionary, any, any, ParsedQs\>, `options?`: *any*): *Promise*<Files\>

Get all files uploaded.

#### Parameters:

Name | Type |
:------ | :------ |
`req` | *Request*<ParamsDictionary, any, any, ParsedQs\> |
`options` | *any* |

**Returns:** *Promise*<Files\>

Defined in: [HotHTTPServer.ts:607](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L607)

___

### startServer

▸ `Static`**startServer**(`localStaticPath?`: *string* \| [*StaticRoute*](../interfaces/hothttpserver.staticroute.md)[], `httpPort?`: *number*, `httpsPort?`: *number*, `processor?`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)): *Promise*<{ `processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) ; `server`: [*HotHTTPServer*](hothttpserver.hothttpserver-1.md)  }\>

Start the server.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`localStaticPath` | *string* \| [*StaticRoute*](../interfaces/hothttpserver.staticroute.md)[] | null | The public path that contains the HTML, Hott files, images, and all public content. This can also be an array of StaticRoutes.   |
`httpPort` | *number* | 80 | The HTTP port to listen on .   |
`httpsPort` | *number* | 443 | The HTTPS port to listen on.   |
`processor` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | null | The HotPreprocessor or parent server being used for communication.    |

**Returns:** *Promise*<{ `processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) ; `server`: [*HotHTTPServer*](hothttpserver.hothttpserver-1.md)  }\>

Defined in: [HotHTTPServer.ts:889](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotHTTPServer.ts#L889)
