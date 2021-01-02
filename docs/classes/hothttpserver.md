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
* [ignoreHottFiles](hothttpserver.md#ignorehottfiles)
* [listenAddress](hothttpserver.md#listenaddress)
* [logger](hothttpserver.md#logger)
* [ports](hothttpserver.md#ports)
* [processor](hothttpserver.md#processor)
* [redirectHTTPtoHTTPS](hothttpserver.md#redirecthttptohttps)
* [routes](hothttpserver.md#routes)
* [secrets](hothttpserver.md#secrets)
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
* [preregisterRoute](hothttpserver.md#preregisterroute)
* [registerRoute](hothttpserver.md#registerroute)
* [registerStaticRoute](hothttpserver.md#registerstaticroute)
* [serveDirectory](hothttpserver.md#servedirectory)
* [setAPI](hothttpserver.md#setapi)
* [setErrorHandlingRoutes](hothttpserver.md#seterrorhandlingroutes)
* [shutdown](hothttpserver.md#shutdown)
* [checkIfFileExists](hothttpserver.md#checkiffileexists)
* [getFileUploads](hothttpserver.md#getfileuploads)
* [startServer](hothttpserver.md#startserver)

## Constructors

### constructor

\+ **new HotHTTPServer**(`processor`: [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md), `httpPort?`: number, `httpsPort?`: number): [HotHTTPServer](hothttpserver.md)

*Overrides [HotServer](hotserver.md).[constructor](hotserver.md#constructor)*

*Defined in [HotHTTPServer.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L98)*

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

*Defined in [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L86)*

The API to use.

___

### expressApp

•  **expressApp**: express.Express

*Defined in [HotHTTPServer.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L40)*

The express app to use.

___

### hottFilesAssociatedInfo

•  **hottFilesAssociatedInfo**: { jsSrcPath: string ; name: string ; url: string  }

*Defined in [HotHTTPServer.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L85)*

The associated info with any hott files served. All values here will be
overwritten by whatever values are set in the server object in HotSite.json.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`jsSrcPath` | string | The JavaScript source path. |
`name` | string | The default name for a served Hott file. |
`url` | string | The base url for a hott file. |

___

### httpListener

•  **httpListener**: Server

*Defined in [HotHTTPServer.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L44)*

The HTTP listener to use.

___

### httpsListener

•  **httpsListener**: Server

*Defined in [HotHTTPServer.ts:48](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L48)*

The HTTPS listener to use.

___

### ignoreHottFiles

•  **ignoreHottFiles**: { [name:string]: boolean;  }

*Defined in [HotHTTPServer.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L80)*

Do not serve these hott files.

___

### listenAddress

•  **listenAddress**: string

*Implementation of [IHotServer](../interfaces/ihotserver.md).[listenAddress](../interfaces/ihotserver.md#listenaddress)*

*Inherited from [HotServer](hotserver.md).[listenAddress](hotserver.md#listenaddress)*

*Defined in [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L90)*

The network address to listen on.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[logger](../interfaces/ihotserver.md#logger)*

*Inherited from [HotServer](hotserver.md).[logger](hotserver.md#logger)*

*Defined in [HotServer.ts:126](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L126)*

The logger.

___

### ports

•  **ports**: { http: number ; https: number  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ports](../interfaces/ihotserver.md#ports)*

*Inherited from [HotServer](hotserver.md).[ports](hotserver.md#ports)*

*Defined in [HotServer.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L94)*

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

*Defined in [HotServer.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L82)*

The processor to use.

___

### redirectHTTPtoHTTPS

•  **redirectHTTPtoHTTPS**: boolean

*Implementation of [IHotServer](../interfaces/ihotserver.md).[redirectHTTPtoHTTPS](../interfaces/ihotserver.md#redirecthttptohttps)*

*Inherited from [HotServer](hotserver.md).[redirectHTTPtoHTTPS](hotserver.md#redirecthttptohttps)*

*Defined in [HotServer.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L118)*

Redirect HTTP traffic to HTTPS.

___

### routes

•  **routes**: { method: (req: express.Request, res: express.Response) => Promise<void\> ; route: string ; type: [HTTPMethod](../enums/httpmethod.md)  }[]

*Defined in [HotHTTPServer.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L58)*

Any non-static routes that need to be added. These
will be added during the preregistration phase, before
all API routes are added.

___

### secrets

•  **secrets**: any

*Implementation of [IHotServer](../interfaces/ihotserver.md).[secrets](../interfaces/ihotserver.md#secrets)*

*Inherited from [HotServer](hotserver.md).[secrets](hotserver.md#secrets)*

*Defined in [HotServer.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L130)*

Any secrets associated with this server.

___

### serveHottFiles

•  **serveHottFiles**: boolean

*Defined in [HotHTTPServer.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L76)*

Serve hott files when requested. This value will be overwritten by whatever
value is set to server.serveHottFiles in HotSite.json.

___

### ssl

•  **ssl**: { ca: string ; cert: string ; key: string  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ssl](../interfaces/ihotserver.md#ssl)*

*Inherited from [HotServer](hotserver.md).[ssl](hotserver.md#ssl)*

*Defined in [HotServer.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L101)*

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

*Defined in [HotHTTPServer.ts:52](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L52)*

The static files and folders to serve.

___

### type

•  **type**: [HotServerType](../enums/hotservertype.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[type](../interfaces/ihotserver.md#type)*

*Inherited from [HotServer](hotserver.md).[type](hotserver.md#type)*

*Defined in [HotServer.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L122)*

The type of server.

## Methods

### addRoute

▸ **addRoute**(`route`: string, `method`: (req: express.Request, res: express.Response) => Promise<void\>, `type?`: [HTTPMethod](../enums/httpmethod.md)): void

*Defined in [HotHTTPServer.ts:215](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L215)*

Add a route. This will be registered before any APIs are registered.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`method` | (req: express.Request, res: express.Response) => Promise<void\> | - |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.GET |

**Returns:** void

___

### addStaticRoute

▸ **addStaticRoute**(`route`: string \| [StaticRoute](../interfaces/staticroute.md), `localPath?`: string): void

*Defined in [HotHTTPServer.ts:194](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L194)*

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

*Defined in [HotHTTPServer.ts:599](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L599)*

Clear the last two express routes, which are reserved for the
error handlers.

**Returns:** void

___

### getStaticRoute

▸ **getStaticRoute**(`route`: string): [StaticRoute](../interfaces/staticroute.md)

*Defined in [HotHTTPServer.ts:249](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L249)*

Get a static route.

#### Parameters:

Name | Type |
------ | ------ |
`route` | string |

**Returns:** [StaticRoute](../interfaces/staticroute.md)

___

### listen

▸ **listen**(): Promise<void\>

*Overrides [HotServer](hotserver.md).[listen](hotserver.md#listen)*

*Defined in [HotHTTPServer.ts:627](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L627)*

Start listening for requests.

**Returns:** Promise<void\>

___

### preregisterRoute

▸ **preregisterRoute**(): void

*Defined in [HotHTTPServer.ts:436](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L436)*

The routes to add before registering a route.

**Returns:** void

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): Promise<void\>

*Overrides [HotServer](hotserver.md).[registerRoute](hotserver.md#registerroute)*

*Defined in [HotHTTPServer.ts:271](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L271)*

Register a route.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** Promise<void\>

___

### registerStaticRoute

▸ **registerStaticRoute**(`route`: [StaticRoute](../interfaces/staticroute.md)): void

*Defined in [HotHTTPServer.ts:238](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L238)*

Register a static route with Express.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [StaticRoute](../interfaces/staticroute.md) |

**Returns:** void

___

### serveDirectory

▸ **serveDirectory**(`route`: string \| [StaticRoute](../interfaces/staticroute.md), `localPath?`: string): void

*Defined in [HotHTTPServer.ts:230](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L230)*

Serve a directory. This is an alias for addStaticRoute.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string \| [StaticRoute](../interfaces/staticroute.md) | - |
`localPath` | string | "." |

**Returns:** void

___

### setAPI

▸ **setAPI**(`api`: [HotAPI](hotapi.md)): Promise<void\>

*Inherited from [HotServer](hotserver.md).[setAPI](hotserver.md#setapi)*

*Defined in [HotServer.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotServer.ts#L178)*

Set an API to this server. This will also set the associated
processor to this API as well.

#### Parameters:

Name | Type |
------ | ------ |
`api` | [HotAPI](hotapi.md) |

**Returns:** Promise<void\>

___

### setErrorHandlingRoutes

▸ **setErrorHandlingRoutes**(`handle404?`: (req: express.Request, res: express.Response, next: any) => void, `handleOther?`: (err: any, req: express.Request, res: express.Response, next: any) => void): void

*Defined in [HotHTTPServer.ts:559](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L559)*

Set the error handlers. This will create two express routes at the bottom of the
route stack. The first will be to capture any 404 errors, the second would be to
catch any remaining errors.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`handle404` | (req: express.Request, res: express.Response, next: any) => void | null |
`handleOther` | (err: any, req: express.Request, res: express.Response, next: any) => void | null |

**Returns:** void

___

### shutdown

▸ **shutdown**(): Promise<void\>

*Overrides [HotServer](hotserver.md).[shutdown](hotserver.md#shutdown)*

*Defined in [HotHTTPServer.ts:836](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L836)*

Shutdown the server.

**Returns:** Promise<void\>

___

### checkIfFileExists

▸ `Static`**checkIfFileExists**(`filepath`: string): Promise<boolean\>

*Defined in [HotHTTPServer.ts:419](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L419)*

Check if a file exists.

#### Parameters:

Name | Type |
------ | ------ |
`filepath` | string |

**Returns:** Promise<boolean\>

___

### getFileUploads

▸ `Static`**getFileUploads**(`req`: express.Request, `options?`: any): Promise<Files\>

*Defined in [HotHTTPServer.ts:538](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L538)*

Get all files uploaded.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`req` | express.Request | - |
`options` | any | { multiples: true } |

**Returns:** Promise<Files\>

___

### startServer

▸ `Static`**startServer**(`localStaticPath?`: string \| [StaticRoute](../interfaces/staticroute.md)[], `httpPort?`: number, `httpsPort?`: number, `processor?`: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md)): Promise<{ processor: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) ; server: [HotHTTPServer](hothttpserver.md)  }\>

*Defined in [HotHTTPServer.ts:803](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotHTTPServer.ts#L803)*

Start the server.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`localStaticPath` | string \| [StaticRoute](../interfaces/staticroute.md)[] | null | The public path that contains the HTML, Hott files, images, and all public content. This can also be an array of StaticRoutes. |
`httpPort` | number | 80 | The HTTP port to listen on . |
`httpsPort` | number | 443 | The HTTPS port to listen on. |
`processor` | [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) | null | The HotPreprocessor or parent server being used for communication.  |

**Returns:** Promise<{ processor: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) ; server: [HotHTTPServer](hothttpserver.md)  }\>
