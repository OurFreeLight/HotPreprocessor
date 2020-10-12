**[hotpreprocessor](README.md)**

> Globals

# hotpreprocessor

## Index

### Enumerations

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
* [IHotPreprocessor](classes/ihotpreprocessor.md)
* [MySQLSchema](classes/mysqlschema.md)
* [MySQLSchemaField](classes/mysqlschemafield.md)
* [MySQLSchemaTable](classes/mysqlschematable.md)

### Interfaces

* [CSSObject](interfaces/cssobject.md)
* [HotDBConnectionInterface](interfaces/hotdbconnectioninterface.md)
* [HotSite](interfaces/hotsite.md)
* [IHotComponent](interfaces/ihotcomponent.md)
* [IHotFile](interfaces/ihotfile.md)
* [IHotPage](interfaces/ihotpage.md)
* [IHotServer](interfaces/ihotserver.md)
* [MySQLSchemaFieldResult](interfaces/mysqlschemafieldresult.md)
* [StaticRoute](interfaces/staticroute.md)

### Type aliases

* [ClientExecutionFunction](globals.md#clientexecutionfunction)
* [ServerAuthorizationFunction](globals.md#serverauthorizationfunction)
* [ServerExecutionFunction](globals.md#serverexecutionfunction)

### Functions

* [start](globals.md#start)

## Type aliases

### ClientExecutionFunction

Ƭ  **ClientExecutionFunction**: (...args: any[]) => Promise\<any>

*Defined in [HotRouteMethod.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L21)*

A function that will be executed by the client.

___

### ServerAuthorizationFunction

Ƭ  **ServerAuthorizationFunction**: (req: any,res: any) => Promise\<any>

*Defined in [HotRouteMethod.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L25)*

A function that will be executed by the server for authorization.

___

### ServerExecutionFunction

Ƭ  **ServerExecutionFunction**: (req: any,res: any,authorizedValue: any,jsonObj: any,queryObj: any) => Promise\<any>

*Defined in [HotRouteMethod.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotRouteMethod.ts#L16)*

A function that will be executed by the server.

## Functions

### start

▸ **start**(): Promise\<void>

*Defined in [cli.ts:10](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/cli.ts#L10)*

**Returns:** Promise\<void>
