**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTesterServer

# Class: HotTesterServer

An API server for use during testing.

## Hierarchy

* [HotServer](hotserver.md)

  ↳ **HotTesterServer**

## Implements

* [IHotServer](../interfaces/ihotserver.md)

## Index

### Constructors

* [constructor](hottesterserver.md#constructor)

### Properties

* [api](hottesterserver.md#api)
* [expressApp](hottesterserver.md#expressapp)
* [httpListener](hottesterserver.md#httplistener)
* [httpsListener](hottesterserver.md#httpslistener)
* [listenAddress](hottesterserver.md#listenaddress)
* [logger](hottesterserver.md#logger)
* [ports](hottesterserver.md#ports)
* [processor](hottesterserver.md#processor)
* [redirectHTTPtoHTTPS](hottesterserver.md#redirecthttptohttps)
* [routes](hottesterserver.md#routes)
* [secrets](hottesterserver.md#secrets)
* [ssl](hottesterserver.md#ssl)
* [type](hottesterserver.md#type)

### Methods

* [addRoute](hottesterserver.md#addroute)
* [addTester](hottesterserver.md#addtester)
* [clearErrorHandlingRoutes](hottesterserver.md#clearerrorhandlingroutes)
* [executeAllTests](hottesterserver.md#executealltests)
* [executeTests](hottesterserver.md#executetests)
* [listen](hottesterserver.md#listen)
* [preregisterRoute](hottesterserver.md#preregisterroute)
* [registerRoute](hottesterserver.md#registerroute)
* [setAPI](hottesterserver.md#setapi)
* [setErrorHandlingRoutes](hottesterserver.md#seterrorhandlingroutes)
* [setupTesterAPI](hottesterserver.md#setuptesterapi)
* [shutdown](hottesterserver.md#shutdown)
* [checkIfFileExists](hottesterserver.md#checkiffileexists)
* [startServer](hottesterserver.md#startserver)

## Constructors

### constructor

\+ **new HotTesterServer**(`processor`: [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md), `httpPort?`: number, `httpsPort?`: number): [HotTesterServer](hottesterserver.md)

*Overrides [HotServer](hotserver.md).[constructor](hotserver.md#constructor)*

*Defined in [HotTesterServer.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L53)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) \| [HotServer](hotserver.md) | - |
`httpPort` | number | null |
`httpsPort` | number | null |

**Returns:** [HotTesterServer](hottesterserver.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[api](../interfaces/ihotserver.md#api)*

*Inherited from [HotServer](hotserver.md).[api](hotserver.md#api)*

*Defined in [HotServer.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L86)*

The API to use.

___

### expressApp

•  **expressApp**: express.Express

*Defined in [HotTesterServer.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L26)*

The express app to use.

___

### httpListener

•  **httpListener**: Server

*Defined in [HotTesterServer.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L30)*

The HTTP listener to use.

___

### httpsListener

•  **httpsListener**: Server

*Defined in [HotTesterServer.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L34)*

The HTTPS listener to use.

___

### listenAddress

•  **listenAddress**: string

*Implementation of [IHotServer](../interfaces/ihotserver.md).[listenAddress](../interfaces/ihotserver.md#listenaddress)*

*Inherited from [HotServer](hotserver.md).[listenAddress](hotserver.md#listenaddress)*

*Defined in [HotServer.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L90)*

The network address to listen on.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[logger](../interfaces/ihotserver.md#logger)*

*Inherited from [HotServer](hotserver.md).[logger](hotserver.md#logger)*

*Defined in [HotServer.ts:126](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L126)*

The logger.

___

### ports

•  **ports**: { http: number ; https: number  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ports](../interfaces/ihotserver.md#ports)*

*Inherited from [HotServer](hotserver.md).[ports](hotserver.md#ports)*

*Defined in [HotServer.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L94)*

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

*Defined in [HotServer.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L82)*

The processor to use.

___

### redirectHTTPtoHTTPS

•  **redirectHTTPtoHTTPS**: boolean

*Implementation of [IHotServer](../interfaces/ihotserver.md).[redirectHTTPtoHTTPS](../interfaces/ihotserver.md#redirecthttptohttps)*

*Inherited from [HotServer](hotserver.md).[redirectHTTPtoHTTPS](hotserver.md#redirecthttptohttps)*

*Defined in [HotServer.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L118)*

Redirect HTTP traffic to HTTPS.

___

### routes

•  **routes**: { method: (req: express.Request, res: express.Response) => Promise<void\> ; route: string ; type: [HTTPMethod](../enums/httpmethod.md)  }[]

*Defined in [HotTesterServer.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L40)*

Any non-static routes that need to be added. These
will be added during the preregistration phase, before
all API routes are added.

___

### secrets

•  **secrets**: any

*Implementation of [IHotServer](../interfaces/ihotserver.md).[secrets](../interfaces/ihotserver.md#secrets)*

*Inherited from [HotServer](hotserver.md).[secrets](hotserver.md#secrets)*

*Defined in [HotServer.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L130)*

Any secrets associated with this server.

___

### ssl

•  **ssl**: { ca: string ; cert: string ; key: string  }

*Implementation of [IHotServer](../interfaces/ihotserver.md).[ssl](../interfaces/ihotserver.md#ssl)*

*Inherited from [HotServer](hotserver.md).[ssl](hotserver.md#ssl)*

*Defined in [HotServer.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L101)*

SSL settings.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`ca` | string | The SSL certificate CA to use. |
`cert` | string | The SSL certificate to use. |
`key` | string | The SSL certificate key to use. |

___

### type

•  **type**: [HotServerType](../enums/hotservertype.md)

*Implementation of [IHotServer](../interfaces/ihotserver.md).[type](../interfaces/ihotserver.md#type)*

*Inherited from [HotServer](hotserver.md).[type](hotserver.md#type)*

*Defined in [HotServer.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L122)*

The type of server.

## Methods

### addRoute

▸ **addRoute**(`route`: string, `method`: (req: express.Request, res: express.Response) => Promise<void\>, `type?`: [HTTPMethod](../enums/httpmethod.md)): void

*Defined in [HotTesterServer.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L167)*

Add a route. This will be registered before any APIs are registered.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`route` | string | - |
`method` | (req: express.Request, res: express.Response) => Promise<void\> | - |
`type` | [HTTPMethod](../enums/httpmethod.md) | HTTPMethod.GET |

**Returns:** void

___

### addTester

▸ **addTester**(`tester`: [HotTester](hottester.md)): void

*Defined in [HotTesterServer.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L143)*

Add a tester for use later.

#### Parameters:

Name | Type |
------ | ------ |
`tester` | [HotTester](hottester.md) |

**Returns:** void

___

### clearErrorHandlingRoutes

▸ **clearErrorHandlingRoutes**(): void

*Defined in [HotTesterServer.ts:386](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L386)*

Clear the last two express routes, which are reserved for the
error handlers.

**Returns:** void

___

### executeAllTests

▸ **executeAllTests**(`testerName`: string): Promise<void\>

*Defined in [HotTesterServer.ts:159](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L159)*

Execute all tests for all maps in the HotSite testing object.

#### Parameters:

Name | Type |
------ | ------ |
`testerName` | string |

**Returns:** Promise<void\>

___

### executeTests

▸ **executeTests**(`testerName`: string, `mapName`: string): Promise<void\>

*Defined in [HotTesterServer.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L151)*

Execute tests.

#### Parameters:

Name | Type |
------ | ------ |
`testerName` | string |
`mapName` | string |

**Returns:** Promise<void\>

___

### listen

▸ **listen**(): Promise<void\>

*Overrides [HotServer](hotserver.md).[listen](hotserver.md#listen)*

*Defined in [HotTesterServer.ts:414](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L414)*

Start listening for requests.

**Returns:** Promise<void\>

___

### preregisterRoute

▸ **preregisterRoute**(): void

*Defined in [HotTesterServer.ts:323](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L323)*

The routes to add before registering a route.

**Returns:** void

___

### registerRoute

▸ **registerRoute**(`route`: [HotRoute](hotroute.md)): Promise<void\>

*Overrides [HotServer](hotserver.md).[registerRoute](hotserver.md#registerroute)*

*Defined in [HotTesterServer.ts:182](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L182)*

Register a route.

#### Parameters:

Name | Type |
------ | ------ |
`route` | [HotRoute](hotroute.md) |

**Returns:** Promise<void\>

___

### setAPI

▸ **setAPI**(`api`: [HotAPI](hotapi.md)): Promise<void\>

*Inherited from [HotServer](hotserver.md).[setAPI](hotserver.md#setapi)*

*Defined in [HotServer.ts:178](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotServer.ts#L178)*

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

*Defined in [HotTesterServer.ts:346](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L346)*

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

### setupTesterAPI

▸ **setupTesterAPI**(`baseUrl`: string): Promise<void\>

*Defined in [HotTesterServer.ts:494](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L494)*

Setup the tester api.

#### Parameters:

Name | Type |
------ | ------ |
`baseUrl` | string |

**Returns:** Promise<void\>

___

### shutdown

▸ **shutdown**(): Promise<void\>

*Overrides [HotServer](hotserver.md).[shutdown](hotserver.md#shutdown)*

*Defined in [HotTesterServer.ts:533](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L533)*

Shutdown the server.

**Returns:** Promise<void\>

___

### checkIfFileExists

▸ `Static`**checkIfFileExists**(`filepath`: string): Promise<boolean\>

*Defined in [HotTesterServer.ts:306](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L306)*

Check if a file exists.

#### Parameters:

Name | Type |
------ | ------ |
`filepath` | string |

**Returns:** Promise<boolean\>

___

### startServer

▸ `Static`**startServer**(`baseUrl?`: string, `httpPort?`: number, `httpsPort?`: number, `processor?`: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md), `logLevel?`: [HotLogLevel](../enums/hotloglevel.md)): Promise<{ processor: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) ; server: [HotTesterServer](hottesterserver.md)  }\>

*Defined in [HotTesterServer.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTesterServer.ts#L509)*

Start the server.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`baseUrl` | string | \`http://127.0.0.1:8182\` | - |
`httpPort` | number | 8182 | The HTTP port to listen on. |
`httpsPort` | number | 4142 | The HTTPS port to listen on. |
`processor` | [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) | null | The HotPreprocessor or parent server being used for communication.  |
`logLevel` | [HotLogLevel](../enums/hotloglevel.md) | HotLogLevel.Info | - |

**Returns:** Promise<{ processor: [HotServer](hotserver.md) \| [HotPreprocessor](hotpreprocessor.md) ; server: [HotTesterServer](hottesterserver.md)  }\>
