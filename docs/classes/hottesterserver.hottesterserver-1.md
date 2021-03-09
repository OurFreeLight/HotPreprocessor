[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTesterServer](../modules/hottesterserver.md) / HotTesterServer

# Class: HotTesterServer

[HotTesterServer](../modules/hottesterserver.md).HotTesterServer

An API server for use during testing.

## Hierarchy

* [*HotServer*](hotserver.hotserver-1.md)

  ↳ **HotTesterServer**

## Table of contents

### Constructors

- [constructor](hottesterserver.hottesterserver-1.md#constructor)

### Properties

- [api](hottesterserver.hottesterserver-1.md#api)
- [expressApp](hottesterserver.hottesterserver-1.md#expressapp)
- [httpListener](hottesterserver.hottesterserver-1.md#httplistener)
- [httpsListener](hottesterserver.hottesterserver-1.md#httpslistener)
- [listenAddress](hottesterserver.hottesterserver-1.md#listenaddress)
- [logger](hottesterserver.hottesterserver-1.md#logger)
- [ports](hottesterserver.hottesterserver-1.md#ports)
- [processor](hottesterserver.hottesterserver-1.md#processor)
- [redirectHTTPtoHTTPS](hottesterserver.hottesterserver-1.md#redirecthttptohttps)
- [routes](hottesterserver.hottesterserver-1.md#routes)
- [secrets](hottesterserver.hottesterserver-1.md#secrets)
- [serverType](hottesterserver.hottesterserver-1.md#servertype)
- [ssl](hottesterserver.hottesterserver-1.md#ssl)
- [type](hottesterserver.hottesterserver-1.md#type)

### Methods

- [addRoute](hottesterserver.hottesterserver-1.md#addroute)
- [addTester](hottesterserver.hottesterserver-1.md#addtester)
- [clearErrorHandlingRoutes](hottesterserver.hottesterserver-1.md#clearerrorhandlingroutes)
- [executeAllTests](hottesterserver.hottesterserver-1.md#executealltests)
- [executeTests](hottesterserver.hottesterserver-1.md#executetests)
- [listen](hottesterserver.hottesterserver-1.md#listen)
- [preregisterRoute](hottesterserver.hottesterserver-1.md#preregisterroute)
- [registerRoute](hottesterserver.hottesterserver-1.md#registerroute)
- [setAPI](hottesterserver.hottesterserver-1.md#setapi)
- [setErrorHandlingRoutes](hottesterserver.hottesterserver-1.md#seterrorhandlingroutes)
- [setupTesterAPI](hottesterserver.hottesterserver-1.md#setuptesterapi)
- [shutdown](hottesterserver.hottesterserver-1.md#shutdown)
- [checkIfFileExists](hottesterserver.hottesterserver-1.md#checkiffileexists)
- [startServer](hottesterserver.hottesterserver-1.md#startserver)

## Constructors

### constructor

\+ **new HotTesterServer**(`processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `httpPort?`: *number*, `httpsPort?`: *number*): [*HotTesterServer*](hottesterserver.hottesterserver-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`processor` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | - |
`httpPort` | *number* | null |
`httpsPort` | *number* | null |

**Returns:** [*HotTesterServer*](hottesterserver.hottesterserver-1.md)

Inherited from: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotTesterServer.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L53)

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

Defined in: [HotTesterServer.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L26)

___

### httpListener

• **httpListener**: *Server*

The HTTP listener to use.

Defined in: [HotTesterServer.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L30)

___

### httpsListener

• **httpsListener**: *Server*

The HTTPS listener to use.

Defined in: [HotTesterServer.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L34)

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

Defined in: [HotTesterServer.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L40)

___

### secrets

• **secrets**: *any*

Any secrets associated with this server.

Inherited from: [HotServer](hotserver.hotserver-1.md).[secrets](hotserver.hotserver-1.md#secrets)

Defined in: [HotServer.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotServer.ts#L138)

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

Defined in: [HotTesterServer.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L167)

___

### addTester

▸ **addTester**(`tester`: [*HotTester*](hottester.hottester-1.md)): *void*

Add a tester for use later.

#### Parameters:

Name | Type |
:------ | :------ |
`tester` | [*HotTester*](hottester.hottester-1.md) |

**Returns:** *void*

Defined in: [HotTesterServer.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L143)

___

### clearErrorHandlingRoutes

▸ **clearErrorHandlingRoutes**(): *void*

Clear the last two express routes, which are reserved for the
error handlers.

**Returns:** *void*

Defined in: [HotTesterServer.ts:386](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L386)

___

### executeAllTests

▸ **executeAllTests**(`testerName`: *string*): *Promise*<void\>

Execute all tests for all maps in the HotSite testing object.

#### Parameters:

Name | Type |
:------ | :------ |
`testerName` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTesterServer.ts:159](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L159)

___

### executeTests

▸ **executeTests**(`testerName`: *string*, `mapName`: *string*): *Promise*<void\>

Execute tests.

#### Parameters:

Name | Type |
:------ | :------ |
`testerName` | *string* |
`mapName` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTesterServer.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L151)

___

### listen

▸ **listen**(): *Promise*<void\>

Start listening for requests.

**Returns:** *Promise*<void\>

Overrides: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotTesterServer.ts:414](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L414)

___

### preregisterRoute

▸ **preregisterRoute**(): *void*

The routes to add before registering a route.

**Returns:** *void*

Defined in: [HotTesterServer.ts:323](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L323)

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

Defined in: [HotTesterServer.ts:182](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L182)

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

Defined in: [HotTesterServer.ts:346](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L346)

___

### setupTesterAPI

▸ **setupTesterAPI**(`baseUrl`: *string*): *Promise*<void\>

Setup the tester api.

#### Parameters:

Name | Type |
:------ | :------ |
`baseUrl` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTesterServer.ts:494](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L494)

___

### shutdown

▸ **shutdown**(): *Promise*<void\>

Shutdown the server.

**Returns:** *Promise*<void\>

Overrides: [HotServer](hotserver.hotserver-1.md)

Defined in: [HotTesterServer.ts:533](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L533)

___

### checkIfFileExists

▸ `Static`**checkIfFileExists**(`filepath`: *string*): *Promise*<boolean\>

Check if a file exists.

#### Parameters:

Name | Type |
:------ | :------ |
`filepath` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [HotTesterServer.ts:306](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L306)

___

### startServer

▸ `Static`**startServer**(`baseUrl?`: *string*, `httpPort?`: *number*, `httpsPort?`: *number*, `processor?`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `logLevel?`: [*HotLogLevel*](../enums/hotlog.hotloglevel.md)): *Promise*<{ `processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) ; `server`: [*HotTesterServer*](hottesterserver.hottesterserver-1.md)  }\>

Start the server.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`baseUrl` | *string* | - | - |
`httpPort` | *number* | 8182 | The HTTP port to listen on.   |
`httpsPort` | *number* | 4142 | The HTTPS port to listen on.   |
`processor` | [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | null | The HotPreprocessor or parent server being used for communication.    |
`logLevel` | [*HotLogLevel*](../enums/hotlog.hotloglevel.md) | - | - |

**Returns:** *Promise*<{ `processor`: [*HotServer*](hotserver.hotserver-1.md) \| [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) ; `server`: [*HotTesterServer*](hottesterserver.hottesterserver-1.md)  }\>

Defined in: [HotTesterServer.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotTesterServer.ts#L509)
