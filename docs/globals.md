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
* [HotClient](classes/hotclient.md)
* [HotComponent](classes/hotcomponent.md)
* [HotDB](classes/hotdb.md)
* [HotDBMySQL](classes/hotdbmysql.md)
* [HotDBSchema](classes/hotdbschema.md)
* [HotFile](classes/hotfile.md)
* [HotHTTPServer](classes/hothttpserver.md)
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

* [ClientExecutionFunction](globals.md#clientexecutionfunction)
* [HotTestPath](globals.md#hottestpath)
* [ServerAuthorizationFunction](globals.md#serverauthorizationfunction)
* [ServerExecutionFunction](globals.md#serverexecutionfunction)
* [ServerRegistrationFunction](globals.md#serverregistrationfunction)
* [TestCaseFunction](globals.md#testcasefunction)

### Functions

* [start](globals.md#start)

## Type aliases

### ClientExecutionFunction

Ƭ  **ClientExecutionFunction**: (...args: any[]) => Promise<any\>

*Defined in [HotRouteMethod.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRouteMethod.ts#L28)*

A function that will be executed by the client.

___

### HotTestPath

Ƭ  **HotTestPath**: (driver: [HotTestDriver](classes/hottestdriver.md), ...args: any) => Promise<any\>

*Defined in [HotTestMap.ts:8](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTestMap.ts#L8)*

Create a test path for later execution.

___

### ServerAuthorizationFunction

Ƭ  **ServerAuthorizationFunction**: (req: any, res: any, jsonObj: any, queryObj: any) => Promise<any\>

*Defined in [HotRouteMethod.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRouteMethod.ts#L36)*

A function that will be executed by the server for authorization. Any value
returned from this function will be passed to the ServerExecutionFunction.
If an undefined value is returned, this indicates the server was not able
to authenticate the user, so the ServerExecutionFunction will not be
executed.

___

### ServerExecutionFunction

Ƭ  **ServerExecutionFunction**: (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any) => Promise<any\>

*Defined in [HotRouteMethod.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRouteMethod.ts#L23)*

A function that will be executed by the server.

___

### ServerRegistrationFunction

Ƭ  **ServerRegistrationFunction**: () => Promise<boolean\>

*Defined in [HotRouteMethod.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRouteMethod.ts#L19)*

A function that will be executed by the server when first registering with Express.
If this returns false, this route method will not be registered.

___

### TestCaseFunction

Ƭ  **TestCaseFunction**: (driver: [HotTestDriver](classes/hottestdriver.md)) => Promise<any\> \| (driver: [HotTestDriver](classes/hottestdriver.md)) => any

*Defined in [HotRouteMethod.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotRouteMethod.ts#L40)*

The test case function to execute.

## Functions

### start

▸ **start**(): Promise<void\>

*Defined in [cli.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/cli.ts#L12)*

**Returns:** Promise<void\>
