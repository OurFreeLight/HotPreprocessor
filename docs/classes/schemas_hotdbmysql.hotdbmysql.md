[hotpreprocessor](../README.md) / [Exports](../modules.md) / [schemas/HotDBMySQL](../modules/schemas_hotdbmysql.md) / HotDBMySQL

# Class: HotDBMySQL

[schemas/HotDBMySQL](../modules/schemas_hotdbmysql.md).HotDBMySQL

The MySQL database connection.

## Hierarchy

* [*HotDB*](hotdb.hotdb-1.md)<mysql.Connection, [*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md), [*MySQLSchema*](schemas_mysql_mysqlschema.mysqlschema.md)\>

  ↳ **HotDBMySQL**

## Table of contents

### Constructors

- [constructor](schemas_hotdbmysql.hotdbmysql.md#constructor)

### Properties

- [connectionStatus](schemas_hotdbmysql.hotdbmysql.md#connectionstatus)
- [db](schemas_hotdbmysql.hotdbmysql.md#db)
- [schema](schemas_hotdbmysql.hotdbmysql.md#schema)
- [type](schemas_hotdbmysql.hotdbmysql.md#type)

### Methods

- [connect](schemas_hotdbmysql.hotdbmysql.md#connect)
- [dbCheck](schemas_hotdbmysql.hotdbmysql.md#dbcheck)
- [disconnect](schemas_hotdbmysql.hotdbmysql.md#disconnect)
- [multiQuery](schemas_hotdbmysql.hotdbmysql.md#multiquery)
- [query](schemas_hotdbmysql.hotdbmysql.md#query)
- [queryOne](schemas_hotdbmysql.hotdbmysql.md#queryone)
- [syncAllTables](schemas_hotdbmysql.hotdbmysql.md#syncalltables)
- [syncTable](schemas_hotdbmysql.hotdbmysql.md#synctable)
- [tableCheck](schemas_hotdbmysql.hotdbmysql.md#tablecheck)

## Constructors

### constructor

\+ **new HotDBMySQL**(`db?`: *Connection*, `type?`: *string*, `schema?`: [*MySQLSchema*](schemas_mysql_mysqlschema.mysqlschema.md)): [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`db` | *Connection* | null |
`type` | *string* | "mysql" |
`schema` | [*MySQLSchema*](schemas_mysql_mysqlschema.mysqlschema.md) | null |

**Returns:** [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md)

Inherited from: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L22)

## Properties

### connectionStatus

• **connectionStatus**: [*ConnectionStatus*](../enums/hotdb.connectionstatus.md)

The connection status.

Inherited from: [HotDB](hotdb.hotdb-1.md).[connectionStatus](hotdb.hotdb-1.md#connectionstatus)

Defined in: [HotDB.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotDB.ts#L30)

___

### db

• **db**: *Connection*

The connection to the database (or the driver).

Inherited from: [HotDB](hotdb.hotdb-1.md).[db](hotdb.hotdb-1.md#db)

Defined in: [HotDB.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotDB.ts#L26)

___

### schema

• **schema**: [*MySQLSchema*](schemas_mysql_mysqlschema.mysqlschema.md)

The db schema. This will generate a database structure
and keep it maintained as needed.

Inherited from: [HotDB](hotdb.hotdb-1.md).[schema](hotdb.hotdb-1.md#schema)

Defined in: [HotDB.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotDB.ts#L35)

___

### type

• **type**: *string*

The database type.

Inherited from: [HotDB](hotdb.hotdb-1.md).[type](hotdb.hotdb-1.md#type)

Defined in: [HotDB.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotDB.ts#L22)

## Methods

### connect

▸ **connect**(`connectionInfo`: [*HotDBConnectionInterface*](../interfaces/hotdbconnectioninterface.hotdbconnectioninterface-1.md)): *Promise*<any[]\>

Connect to the database.

#### Parameters:

Name | Type |
:------ | :------ |
`connectionInfo` | [*HotDBConnectionInterface*](../interfaces/hotdbconnectioninterface.hotdbconnectioninterface-1.md) |

**Returns:** *Promise*<any[]\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L31)

___

### dbCheck

▸ `Protected`**dbCheck**(): *void*

Checks to see if this has a database connection.

**Returns:** *void*

Defined in: [schemas/HotDBMySQL.ts:61](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L61)

___

### disconnect

▸ **disconnect**(): *Promise*<void\>

Disconnect from the server.

**Returns:** *Promise*<void\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L256)

___

### multiQuery

▸ **multiQuery**(`queryStrings`: *string*[] \| { `query`: *string* ; `values`: *any*[]  }[]): *Promise*<[*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md)[]\>

Make multiple queries. **Warning! This can be a security vulnerability
if misused! Ideally this should only be used when make changes to tables!
Additionally, this could overwhelm the server and each command sent is not
guaranteed to be done in order.**

#### Parameters:

Name | Type |
:------ | :------ |
`queryStrings` | *string*[] \| { `query`: *string* ; `values`: *any*[]  }[] |

**Returns:** *Promise*<[*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md)[]\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:217](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L217)

___

### query

▸ **query**(`queryString`: *string*, `values?`: *any*[]): *Promise*<[*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md)\>

The query to make.

#### Parameters:

Name | Type |
:------ | :------ |
`queryString` | *string* |
`values` | *any*[] |

**Returns:** *Promise*<[*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md)\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:168](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L168)

___

### queryOne

▸ **queryOne**(`queryString`: *string*, `values?`: *any*[]): *Promise*<[*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md)\>

Make a single query. If there are no results, null will be in MySQLResults.results

#### Parameters:

Name | Type |
:------ | :------ |
`queryString` | *string* |
`values` | *any*[] |

**Returns:** *Promise*<[*MySQLResults*](../interfaces/schemas_hotdbmysql.mysqlresults.md)\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:187](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L187)

___

### syncAllTables

▸ **syncAllTables**(`throwErrors?`: *boolean*): *Promise*<boolean\>

Synchronize all tables.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`throwErrors` | *boolean* | true |

**Returns:** *Promise*<boolean\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L70)

___

### syncTable

▸ **syncTable**(`tableName`: *string*, `throwErrors?`: *boolean*): *Promise*<boolean\>

Synchronize a table. This will create/modify the table based on whether it
exists, and if there's been any changes to any fields.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`tableName` | *string* | - |
`throwErrors` | *boolean* | true |

**Returns:** *Promise*<boolean\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:91](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L91)

___

### tableCheck

▸ **tableCheck**(`tableName`: *string*): *Promise*<boolean\>

Checks if the table exists.

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | *string* |

**Returns:** *Promise*<boolean\>

Overrides: [HotDB](hotdb.hotdb-1.md)

Defined in: [schemas/HotDBMySQL.ts:141](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/HotDBMySQL.ts#L141)
