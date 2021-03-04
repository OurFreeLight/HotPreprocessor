**[hotpreprocessor](README.md)**

> Globals

# hotpreprocessor

## Index

### Enumerations

* [ConnectionStatus](enums/connectionstatus.md)
* [DeveloperMode](enums/developermode.md)
* [EventExecutionType](enums/eventexecutiontype.md)
* [HTTPMethod](enums/httpmethod.md)
* [HotDBGenerationType](enums/hotdbgenerationtype.md)
* [HotLogLevel](enums/hotloglevel.md)
* [HotServerType](enums/hotservertype.md)

### Classes

* [Hot](classes/hot.md)
* [HotAPI](classes/hotapi.md)
* [HotBuilder](classes/hotbuilder.md)
* [HotClient](classes/hotclient.md)
* [HotComponent](classes/hotcomponent.md)
* [HotCreator](classes/hotcreator.md)
* [HotDB](classes/hotdb.md)
* [HotDBMySQL](classes/hotdbmysql.md)
* [HotDBSchema](classes/hotdbschema.md)
* [HotFile](classes/hotfile.md)
* [HotHTTPServer](classes/hothttpserver.md)
* [HotIO](classes/hotio.md)
* [HotLog](classes/hotlog.md)
* [HotPage](classes/hotpage.md)
* [HotPreprocessor](classes/hotpreprocessor.md)
* [HotRoute](classes/hotroute.md)
* [HotRouteMethod](classes/hotroutemethod.md)
* [HotServer](classes/hotserver.md)
* [HotTestDestination](classes/hottestdestination.md)
* [HotTestDriver](classes/hottestdriver.md)
* [HotTestElement](classes/hottestelement.md)
* [HotTestElementOptions](classes/hottestelementoptions.md)
* [HotTestMap](classes/hottestmap.md)
* [HotTestSeleniumDriver](classes/hottestseleniumdriver.md)
* [HotTester](classes/hottester.md)
* [HotTesterAPI](classes/hottesterapi.md)
* [HotTesterMocha](classes/hottestermocha.md)
* [HotTesterMochaSelenium](classes/hottestermochaselenium.md)
* [HotTesterServer](classes/hottesterserver.md)
* [MySQLSchema](classes/mysqlschema.md)
* [MySQLSchemaField](classes/mysqlschemafield.md)
* [MySQLSchemaTable](classes/mysqlschematable.md)

### Interfaces

* [CSSObject](interfaces/cssobject.md)
* [HotDBConnectionInterface](interfaces/hotdbconnectioninterface.md)
* [HotDestination](interfaces/hotdestination.md)
* [HotSite](interfaces/hotsite.md)
* [HotSiteMapPath](interfaces/hotsitemappath.md)
* [HotSiteRoute](interfaces/hotsiteroute.md)
* [HotStartOptions](interfaces/hotstartoptions.md)
* [HotTestPage](interfaces/hottestpage.md)
* [HotTestStop](interfaces/hotteststop.md)
* [IHotComponent](interfaces/ihotcomponent.md)
* [IHotFile](interfaces/ihotfile.md)
* [IHotPage](interfaces/ihotpage.md)
* [IHotPreprocessor](interfaces/ihotpreprocessor.md)
* [IHotServer](interfaces/ihotserver.md)
* [IHotTestElement](interfaces/ihottestelement.md)
* [IHotTestElementOptions](interfaces/ihottestelementoptions.md)
* [IMySQLSchemaField](interfaces/imysqlschemafield.md)
* [MySQLResults](interfaces/mysqlresults.md)
* [MySQLSchemaFieldResult](interfaces/mysqlschemafieldresult.md)
* [StaticRoute](interfaces/staticroute.md)
* [TestCaseObject](interfaces/testcaseobject.md)

### Type aliases

* [APItoLoad](globals.md#apitoload)
* [ClientExecutionFunction](globals.md#clientexecutionfunction)
* [HotTestPath](globals.md#hottestpath)
* [ServerAuthorizationFunction](globals.md#serverauthorizationfunction)
* [ServerExecutionFunction](globals.md#serverexecutionfunction)
* [ServerRegistrationFunction](globals.md#serverregistrationfunction)
* [TestCaseFunction](globals.md#testcasefunction)

### Variables

* [VERSION](globals.md#version)
* [asyncExec](globals.md#asyncexec)
* [globalLogLevel](globals.md#globalloglevel)
* [hotsitePath](globals.md#hotsitepath)
* [processor](globals.md#processor)
* [util](globals.md#util)

### Functions

* [checkIfPathExists](globals.md#checkifpathexists)
* [getKeyValuePair](globals.md#getkeyvaluepair)
* [handleBuildCommands](globals.md#handlebuildcommands)
* [handleCreateCommands](globals.md#handlecreatecommands)
* [handleRunCommands](globals.md#handleruncommands)
* [start](globals.md#start)
* [startAPIServer](globals.md#startapiserver)

## Type aliases

### APItoLoad

Ƭ  **APItoLoad**: { exportedName: string ; path: string  }

*Defined in [cli.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L30)*

The API to load.

#### Type declaration:

Name | Type |
------ | ------ |
`exportedName` | string |
`path` | string |

___

### ClientExecutionFunction

Ƭ  **ClientExecutionFunction**: (...args: any[]) => Promise<any\>

*Defined in [HotRouteMethod.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotRouteMethod.ts#L28)*

A function that will be executed by the client.

___

### HotTestPath

Ƭ  **HotTestPath**: (driver: [HotTestDriver](classes/hottestdriver.md), ...args: any) => Promise<any\>

*Defined in [HotTestMap.ts:8](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTestMap.ts#L8)*

Create a test path for later execution.

___

### ServerAuthorizationFunction

Ƭ  **ServerAuthorizationFunction**: (req: any, res: any, jsonObj: any, queryObj: any) => Promise<any\>

*Defined in [HotRouteMethod.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotRouteMethod.ts#L36)*

A function that will be executed by the server for authorization. Any value
returned from this function will be passed to the ServerExecutionFunction.
If an undefined value is returned, this indicates the server was not able
to authenticate the user, so the ServerExecutionFunction will not be
executed.

___

### ServerExecutionFunction

Ƭ  **ServerExecutionFunction**: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any\>

*Defined in [HotRouteMethod.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotRouteMethod.ts#L23)*

A function that will be executed by the server.

___

### ServerRegistrationFunction

Ƭ  **ServerRegistrationFunction**: () => Promise<boolean\>

*Defined in [HotRouteMethod.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotRouteMethod.ts#L19)*

A function that will be executed by the server when first registering with Express.
If this returns false, this route method will not be registered.

___

### TestCaseFunction

Ƭ  **TestCaseFunction**: (driver: [HotTestDriver](classes/hottestdriver.md)) => Promise<any\> \| (driver: [HotTestDriver](classes/hottestdriver.md)) => any

*Defined in [HotRouteMethod.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotRouteMethod.ts#L40)*

The test case function to execute.

## Variables

### VERSION

• `Let` **VERSION**: string = ""

*Defined in [cli.ts:20](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L20)*

___

### asyncExec

• `Const` **asyncExec**: any = util.promisify (require ("child\_process").exec)

*Defined in [HotCreator.ts:3](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L3)*

___

### globalLogLevel

• `Let` **globalLogLevel**: [HotLogLevel](enums/hotloglevel.md) = null

*Defined in [cli.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L25)*

___

### hotsitePath

• `Let` **hotsitePath**: string = ""

*Defined in [cli.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L24)*

___

### processor

• `Let` **processor**: [HotPreprocessor](classes/hotpreprocessor.md) = new HotPreprocessor ()

*Defined in [cli.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L21)*

___

### util

• `Const` **util**: any = require ("util")

*Defined in [HotCreator.ts:2](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotCreator.ts#L2)*

## Functions

### checkIfPathExists

▸ **checkIfPathExists**(`path`: string): boolean

*Defined in [cli.ts:650](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L650)*

Check if the path exists.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** boolean

___

### getKeyValuePair

▸ **getKeyValuePair**(`str`: string): object

*Defined in [cli.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L81)*

Get a key/value pair from a string.

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |

**Returns:** object

Name | Type |
------ | ------ |
`key` | string |
`value` | string |

___

### handleBuildCommands

▸ **handleBuildCommands**(): Promise<Command\>

*Defined in [cli.ts:99](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L99)*

Handle any build commands.

**Returns:** Promise<Command\>

___

### handleCreateCommands

▸ **handleCreateCommands**(): Promise<Command\>

*Defined in [cli.ts:154](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L154)*

Handle create commands.

**Returns:** Promise<Command\>

___

### handleRunCommands

▸ **handleRunCommands**(): Promise<Command\>

*Defined in [cli.ts:254](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L254)*

Handle run commands.

**Returns:** Promise<Command\>

___

### start

▸ **start**(): Promise<void\>

*Defined in [cli.ts:663](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L663)*

Start the CLI app.

**Returns:** Promise<void\>

___

### startAPIServer

▸ **startAPIServer**(`server`: [HotHTTPServer](classes/hothttpserver.md), `loadedAPI`: [APItoLoad](globals.md#apitoload), `baseAPIUrl`: string, `dbinfo`: [HotDBConnectionInterface](interfaces/hotdbconnectioninterface.md), `isAPIOnly`: boolean): Promise<[HotAPI](classes/hotapi.md)\>

*Defined in [cli.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/cli.ts#L38)*

Start the API server.

#### Parameters:

Name | Type |
------ | ------ |
`server` | [HotHTTPServer](classes/hothttpserver.md) |
`loadedAPI` | [APItoLoad](globals.md#apitoload) |
`baseAPIUrl` | string |
`dbinfo` | [HotDBConnectionInterface](interfaces/hotdbconnectioninterface.md) |
`isAPIOnly` | boolean |

**Returns:** Promise<[HotAPI](classes/hotapi.md)\>
