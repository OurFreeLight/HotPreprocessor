**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotDBMySQL

# Class: HotDBMySQL

The MySQL database connection.

## Hierarchy

* [HotDB](hotdb.md)<Connection, [MySQLResults](../interfaces/mysqlresults.md), [MySQLSchema](mysqlschema.md)\>

  ↳ **HotDBMySQL**

## Index

### Constructors

* [constructor](hotdbmysql.md#constructor)

### Properties

* [connectionStatus](hotdbmysql.md#connectionstatus)
* [db](hotdbmysql.md#db)
* [schema](hotdbmysql.md#schema)
* [type](hotdbmysql.md#type)

### Methods

* [connect](hotdbmysql.md#connect)
* [dbCheck](hotdbmysql.md#dbcheck)
* [disconnect](hotdbmysql.md#disconnect)
* [multiQuery](hotdbmysql.md#multiquery)
* [query](hotdbmysql.md#query)
* [queryOne](hotdbmysql.md#queryone)
* [syncAllTables](hotdbmysql.md#syncalltables)
* [syncTable](hotdbmysql.md#synctable)
* [tableCheck](hotdbmysql.md#tablecheck)

## Constructors

### constructor

\+ **new HotDBMySQL**(`db?`: Connection, `type?`: string, `schema?`: [MySQLSchema](mysqlschema.md)): [HotDBMySQL](hotdbmysql.md)

*Overrides [HotDB](hotdb.md).[constructor](hotdb.md#constructor)*

*Defined in [schemas/HotDBMySQL.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L22)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`db` | Connection | null |
`type` | string | "mysql" |
`schema` | [MySQLSchema](mysqlschema.md) | null |

**Returns:** [HotDBMySQL](hotdbmysql.md)

## Properties

### connectionStatus

•  **connectionStatus**: [ConnectionStatus](../enums/connectionstatus.md)

*Inherited from [HotDB](hotdb.md).[connectionStatus](hotdb.md#connectionstatus)*

*Defined in [HotDB.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotDB.ts#L30)*

The connection status.

___

### db

•  **db**: Connection

*Inherited from [HotDB](hotdb.md).[db](hotdb.md#db)*

*Defined in [HotDB.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotDB.ts#L26)*

The connection to the database (or the driver).

___

### schema

•  **schema**: [MySQLSchema](mysqlschema.md)

*Inherited from [HotDB](hotdb.md).[schema](hotdb.md#schema)*

*Defined in [HotDB.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotDB.ts#L35)*

The db schema. This will generate a database structure
and keep it maintained as needed.

___

### type

•  **type**: string

*Inherited from [HotDB](hotdb.md).[type](hotdb.md#type)*

*Defined in [HotDB.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotDB.ts#L22)*

The database type.

## Methods

### connect

▸ **connect**(`connectionInfo`: [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md)): Promise<any[]\>

*Overrides [HotDB](hotdb.md).[connect](hotdb.md#connect)*

*Defined in [schemas/HotDBMySQL.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L31)*

Connect to the database.

#### Parameters:

Name | Type |
------ | ------ |
`connectionInfo` | [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md) |

**Returns:** Promise<any[]\>

___

### dbCheck

▸ `Protected`**dbCheck**(): void

*Defined in [schemas/HotDBMySQL.ts:61](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L61)*

Checks to see if this has a database connection.

**Returns:** void

___

### disconnect

▸ **disconnect**(): Promise<void\>

*Overrides [HotDB](hotdb.md).[disconnect](hotdb.md#disconnect)*

*Defined in [schemas/HotDBMySQL.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L256)*

Disconnect from the server.

**Returns:** Promise<void\>

___

### multiQuery

▸ **multiQuery**(`queryStrings`: string[] \| { query: string ; values: any[]  }[]): Promise<[MySQLResults](../interfaces/mysqlresults.md)[]\>

*Overrides [HotDB](hotdb.md).[multiQuery](hotdb.md#multiquery)*

*Defined in [schemas/HotDBMySQL.ts:217](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L217)*

Make multiple queries. **Warning! This can be a security vulnerability
if misused! Ideally this should only be used when make changes to tables!
Additionally, this could overwhelm the server and each command sent is not
guaranteed to be done in order.**

#### Parameters:

Name | Type |
------ | ------ |
`queryStrings` | string[] \| { query: string ; values: any[]  }[] |

**Returns:** Promise<[MySQLResults](../interfaces/mysqlresults.md)[]\>

___

### query

▸ **query**(`queryString`: string, `values?`: any[]): Promise<[MySQLResults](../interfaces/mysqlresults.md)\>

*Overrides [HotDB](hotdb.md).[query](hotdb.md#query)*

*Defined in [schemas/HotDBMySQL.ts:168](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L168)*

The query to make.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`queryString` | string | - |
`values` | any[] | [] |

**Returns:** Promise<[MySQLResults](../interfaces/mysqlresults.md)\>

___

### queryOne

▸ **queryOne**(`queryString`: string, `values?`: any[]): Promise<[MySQLResults](../interfaces/mysqlresults.md)\>

*Overrides [HotDB](hotdb.md).[queryOne](hotdb.md#queryone)*

*Defined in [schemas/HotDBMySQL.ts:187](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L187)*

Make a single query. If there are no results, null will be in MySQLResults.results

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`queryString` | string | - |
`values` | any[] | [] |

**Returns:** Promise<[MySQLResults](../interfaces/mysqlresults.md)\>

___

### syncAllTables

▸ **syncAllTables**(`throwErrors?`: boolean): Promise<boolean\>

*Overrides [HotDB](hotdb.md).[syncAllTables](hotdb.md#syncalltables)*

*Defined in [schemas/HotDBMySQL.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L70)*

Synchronize all tables.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`throwErrors` | boolean | true |

**Returns:** Promise<boolean\>

___

### syncTable

▸ **syncTable**(`tableName`: string, `throwErrors?`: boolean): Promise<boolean\>

*Overrides [HotDB](hotdb.md).[syncTable](hotdb.md#synctable)*

*Defined in [schemas/HotDBMySQL.ts:91](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L91)*

Synchronize a table. This will create/modify the table based on whether it
exists, and if there's been any changes to any fields.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tableName` | string | - |
`throwErrors` | boolean | true |

**Returns:** Promise<boolean\>

___

### tableCheck

▸ **tableCheck**(`tableName`: string): Promise<boolean\>

*Overrides [HotDB](hotdb.md).[tableCheck](hotdb.md#tablecheck)*

*Defined in [schemas/HotDBMySQL.ts:141](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/schemas/HotDBMySQL.ts#L141)*

Checks if the table exists.

#### Parameters:

Name | Type |
------ | ------ |
`tableName` | string |

**Returns:** Promise<boolean\>
