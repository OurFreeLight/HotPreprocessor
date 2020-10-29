**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotHTTPServer

# Class: HotHTTPServer

A HTTP server.

## Hierarchy

* [HotServer](hotserver.md)

  ↳ **HotHTTPServer**

## Implements

* [IHotServer](../interfaces/ihotserver.md)

## Index

### Constructors

* [constructor](hothttpserver.md#constructor)

### Properties

* [api](hothttpserver.md#api)
* [expressApp](hothttpserver.md#expressapp)
* [hottFilesAssociatedInfo](hothttpserver.md#hottfilesassociatedinfo)
* [httpListener](hothttpserver.md#httplistener)
* [httpsListener](hothttpserver.md#httpslistener)
* [listenAddress](hothttpserver.md#listenaddress)
* [logger](hothttpserver.md#logger)
* [ports](hothttpserver.md#ports)
* [processor](hothttpserver.md#processor)
* [redirectHTTPtoHTTPS](hothttpserver.md#redirecthttptohttps)
* [routes](hothttpserver.md#routes)
* [serveHottFiles](hothttpserver.md#servehottfiles)
* [ssl](hothttpserver.md#ssl)
* [staticRoutes](hothttpserver.md#staticroutes)
* [type](hothttpserver.md#type)

### Methods

* [addRoute](hothttpserver.md#addroute)
* [addStaticRoute](hothttpserver.md#addstaticroute)
* [clearErrorHandlingRoutes](hothttpserver.md#clearerrorhandlingroutes)
* [getStaticRoute](hothttpserver.md#getstaticroute)
* [listen](hothttpserver.md#listen)
* [loadHotSite](hothttpserver.md#loadhotsite)
* [preregisterRoute](hothttpserver.md#preregisterroute)
* [registerRoute](hothttpserver.md#registerroute)
* [registerStaticRoute](hothttpserver.md#registerstaticroute)
* [serveDirectory](hothttpserver.md#servedirectory)
* [setAPI](hothttpserver.md#setapi)
* [setErrorHandlingRoutes](hothttpserver.md#seterrorhandlingroutes)
* [shutdown](hothttpserver.md#shutdown)
* [startServer](hothttpserver.md#startserver)

## Constructors

### constructor

\+ **new HotHTTPServer**(`processor`: [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md), `httpPort`: number, `httpsPort`: number): [HotHTTPServer](hothttpserver.md)

*Overrides [HotServer](hotserver.md).[constructor](hotserver.md#constructor)*

*Defined in [HotHTTPServer.ts:89](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L89)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md) | - |
`httpPort` | number | null |
`httpsPort` | number | null |

**Returns:** [HotHTTPServer](hothttpserver.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[api](../interfaces/ihotserver.md#api)*

*Inherited from [HotServer](hotserver.md).[api](hotserver.md#api)*

*Defined in [HotServer.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L82)*

The API to use.

___

### expressApp

•  **expressApp**: express.Express

*Defined in [HotHTTPServer.ts:37](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L37)*

The express app to use.

___

### hottFilesAssociatedInfo

•  **hottFilesAssociatedInfo**: { jsSrcPath: string ; name: string ; url: string  }

*Defined in [HotHTTPServer.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L76)*

The associated info with any hott files served.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`jsSrcPath` | string | The JavaScript source path. |
`name` | string | The default name for a served Hott file. |
`url` | string | The base url for a hott file. |

___

### httpListener

•  **httpListener**: Server

*Defined in [HotHTTPServer.ts:41](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L41)*

The HTTP listener to use.

___

### httpsListener

•  **httpsListener**: Server

*Defined in [HotHTTPServer.ts:45](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L45)*

The HTTPS listener to use.

___

### listenAddress

•  **listenAddress**: string

*Implementation of [IHotServer](../interfaces/ihotserver.md).[listenAddress](../interfaces/ihotserver.md#listenaddress)*

*Inherited from [HotServer](hotserver.md).[listenAddress](hotserver.md#listenaddress)*

*Defined in [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L86)*

The network address to listen on.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[logger](../interfaces/ihotserver.md#logger)*

*Inherited from [HotServer](hotserver.md).[logger](hotserver.md#logger)*

*Defined in [HotServer.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L122)*

The logger.

___

### ports

•  **ports**: { http: number ; https: number  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ports](../interfaces/ihotserver.md#ports)*

*Inherited from [HotServer](hotserver.md).[ports](hotserver.md#ports)*

*Defined in [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L90)*

The ports to use.

#### Type declaration:

Name | Type |
------ | ------ |
`http` | number |
`https` | number |

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[processor](../interfaces/ihotserver.md#processor)*

*Inherited from [HotServer](hotserver.md).[processor](hotserver.md#processor)*

*Defined in [HotServer.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L78)*

The processor to use.

___

### redirectHTTPtoHTTPS

•  **redirectHTTPtoHTTPS**: boolean

*Implementation of [IHotServer](../interfaces/ihotserver.md).[redirectHTTPtoHTTPS](../interfaces/ihotserver.md#redirecthttptohttps)*

*Inherited from [HotServer](hotserver.md).[redirectHTTPtoHTTPS](hotserver.md#redirecthttptohttps)*

*Defined in [HotServer.ts:114](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L114)*

Redirect HTTP traffic to HTTPS.

___

### routes

•  **routes**: { method: (req: express.Request,res: express.Response) => Promise\<void> ; route: string ; type: [HTTPMethod](../enums/httpmethod.md)  }[]

*Defined in [HotHTTPServer.ts:55](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L55)*

Any non-static routes that need to be added. These
will be added during the preregistration phase, before
all API routes are added.

___

### serveHottFiles

•  **serveHottFiles**: boolean

*Defined in [HotHTTPServer.ts:72](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L72)*

Serve hott files when requested.

___

### ssl

•  **ssl**: { ca: string ; cert: string ; key: string  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ssl](../interfaces/ihotserver.md#ssl)*

*Inherited from [HotServer](hotserver.md).[ssl](hotserver.md#ssl)*

*Defined in [HotServer.ts:97](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L97)*

SSL settings.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`ca` | string | The SSL certificate CA to use. |
`cert` | string | The SSL certificate to use. |
`key` | string | The SSL certificate key to use. |

___

### staticRoutes

•  **staticRoutes**: [StaticRoute](../interfaces/staticroute.md)[]

*Defined in [HotHTTPServer.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L49)*

The static files and folders to serve.

___

### type

•  **type**: [HotServerType](../enums/hotservertype.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[type](../interfaces/ihotserver.md#type)*

*Inherited from [HotServer](hotserver.md).[type](hotserver.md#type)*

*Defined in [HotServer.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L118)*

The type of server.

## Methods

### addRoute

▸ **addRoute**(`route`: string, `method`: (req: express.Request,res: express.Response) => Promise\<void>, `type`: [HTTPMethod](../enums/httpmethod.md)): void

*Defined in [HotHTTPServer.ts:187](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L187)*

Add a route. This will be registered before any APIs are registered.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`method` | (req: express.Request,res: express.Response) => Promise\<void> | - |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.GET |

**Returns:** void

___

### addStaticRoute

▸ **addStaticRoute**(`route`: string \| [StaticRoute](../interfaces/staticroute.md), `localPath`: string): void

*Defined in [HotHTTPServer.ts:166](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L166)*

Add a static route.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string \| [StaticRoute](../interfaces/staticroute.md) | - |
`localPath` | string | "." |

**Returns:** void

___

### clearErrorHandlingRoutes

▸ **clearErrorHandlingRoutes**(): void

*Defined in [HotHTTPServer.ts:450](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L450)*

Clear the last two express routes, which are reserved for the
error handlers.

**Returns:** void

___

### getStaticRoute

▸ **getStaticRoute**(`route`: string): [StaticRoute](../interfaces/staticroute.md)

*Defined in [HotHTTPServer.ts:221](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L221)*

Get a static route.

#### Parameters:

Name | Type |
------ | ------ |
`route` | string |

**Returns:** [StaticRoute](../interfaces/staticroute.md)

___

### listen

▸ **listen**(): Promise\<void>

*Overrides [HotServer](hotserver.md).[listen](hotserver.md#listen)*

*Defined in [HotHTTPServer.ts:490](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L490)*

Start listening for requests.

**Returns:** Promise\<void>

___

### loadHotSite

▸ **loadHotSite**(`path`: string): Promise\<[HotPreprocessor](hotpreprocessor.md)>

*Defined in [HotHTTPServer.ts:479](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L479)*

Load a HotSite JSON file. Be sure to call this after attaching
your api!

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise\<[HotPreprocessor](hotpreprocessor.md)>

___

### preregisterRoute

▸ **preregisterRoute**(): void

*Defined in [HotHTTPServer.ts:337](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L337)*

The routes to add before registering a route.

**Returns:** void

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): Promise\<void>

*Overrides [HotServer](hotserver.md).[registerRoute](hotserver.md#registerroute)*

*Defined in [HotHTTPServer.ts:243](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L243)*

Register a route.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** Promise\<void>

___

### registerStaticRoute

▸ **registerStaticRoute**(`route`: [StaticRoute](../interfaces/staticroute.md)): void

*Defined in [HotHTTPServer.ts:210](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L210)*

Register a static route with Express.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [StaticRoute](../interfaces/staticroute.md) |

**Returns:** void

___

### serveDirectory

▸ **serveDirectory**(`route`: string \| [StaticRoute](../interfaces/staticroute.md), `localPath`: string): void

*Defined in [HotHTTPServer.ts:202](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L202)*

Serve a directory. This is an alias for addStaticRoute.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string \| [StaticRoute](../interfaces/staticroute.md) | - |
`localPath` | string | "." |

**Returns:** void

___

### setAPI

▸ **setAPI**(`api`: [HotAPI](hotapi.md)): void

*Inherited from [HotServer](hotserver.md).[setAPI](hotserver.md#setapi)*

*Defined in [HotServer.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotServer.ts#L167)*

Set an API to this server.

#### Parameters:

Name | Type |
------ | ------ |
`api` | [HotAPI](hotapi.md) |

**Returns:** void

___

### setErrorHandlingRoutes

▸ **setErrorHandlingRoutes**(`handle404`: (req: express.Request,res: express.Response,next: any) => void, `handleOther`: (err: any,req: express.Request,res: express.Response,next: any) => void): void

*Defined in [HotHTTPServer.ts:410](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L410)*

Set the error handlers. This will create two express routes at the bottom of the
route stack. The first will be to capture any 404 errors, the second would be to
catch any remaining errors.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`handle404` | (req: express.Request,res: express.Response,next: any) => void | null |
`handleOther` | (err: any,req: express.Request,res: express.Response,next: any) => void | null |

**Returns:** void

___

### shutdown

▸ **shutdown**(): Promise\<void>

*Overrides [HotServer](hotserver.md).[shutdown](hotserver.md#shutdown)*

*Defined in [HotHTTPServer.ts:598](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L598)*

Shutdown the server.

**Returns:** Promise\<void>

___

### startServer

▸ `Static`**startServer**(`localStaticPath`: string \| [StaticRoute](../interfaces/staticroute.md)[], `httpPort`: number, `httpsPort`: number, `processor`: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md)): Promise\<{ processor: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) ; server: [HotHTTPServer](hothttpserver.md)  }>

*Defined in [HotHTTPServer.ts:565](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotHTTPServer.ts#L565)*

Start the server.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`localStaticPath` | string \| [StaticRoute](../interfaces/staticroute.md)[] | null | The public path that contains the HTML, Hott files, images, and all public content. This can also be an array of StaticRoutes. |
`httpPort` | number | 80 | The HTTP port to listen on . |
`httpsPort` | number | 443 | The HTTPS port to listen on. |
`processor` | [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) | null | The HotPreprocessor or parent server being used for communication.  |

**Returns:** Promise\<{ processor: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) ; server: [HotHTTPServer](hothttpserver.md)  }>
