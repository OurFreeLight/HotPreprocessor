[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotDB](../modules/hotdb.md) / HotDB

# Class: HotDB<DBType, DBResultType, DBSchema\>

[HotDB](../modules/hotdb.md).HotDB

The server-side database connection.

## Type parameters

Name | Default |
:------ | :------ |
`DBType` | *any* |
`DBResultType` | *any* |
`DBSchema` | [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md) |

## Hierarchy

* **HotDB**

  ↳ [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md)

## Table of contents

### Constructors

- [constructor](hotdb.hotdb-1.md#constructor)

### Properties

- [connectionStatus](hotdb.hotdb-1.md#connectionstatus)
- [db](hotdb.hotdb-1.md#db)
- [schema](hotdb.hotdb-1.md#schema)
- [type](hotdb.hotdb-1.md#type)

### Methods

- [connect](hotdb.hotdb-1.md#connect)
- [disconnect](hotdb.hotdb-1.md#disconnect)
- [multiQuery](hotdb.hotdb-1.md#multiquery)
- [query](hotdb.hotdb-1.md#query)
- [queryOne](hotdb.hotdb-1.md#queryone)
- [syncAllTables](hotdb.hotdb-1.md#syncalltables)
- [syncTable](hotdb.hotdb-1.md#synctable)
- [tableCheck](hotdb.hotdb-1.md#tablecheck)

## Constructors

### constructor

\+ **new HotDB**<DBType, DBResultType, DBSchema\>(`db?`: DBType, `type?`: *string*, `schema?`: DBSchema): [*HotDB*](hotdb.hotdb-1.md)<DBType, DBResultType, DBSchema\>

#### Type parameters:

Name | Default |
:------ | :------ |
`DBType` | *any* |
`DBResultType` | *any* |
`DBSchema` | [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md) |

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`db` | DBType | null |
`type` | *string* | "" |
`schema` | DBSchema | null |

**Returns:** [*HotDB*](hotdb.hotdb-1.md)<DBType, DBResultType, DBSchema\>

Defined in: [HotDB.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L35)

## Properties

### connectionStatus

• **connectionStatus**: [*ConnectionStatus*](../enums/hotdb.connectionstatus.md)

The connection status.

Defined in: [HotDB.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L30)

___

### db

• **db**: DBType

The connection to the database (or the driver).

Defined in: [HotDB.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L26)

___

### schema

• **schema**: DBSchema

The db schema. This will generate a database structure
and keep it maintained as needed.

Defined in: [HotDB.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L35)

___

### type

• **type**: *string*

The database type.

Defined in: [HotDB.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L22)

## Methods

### connect

▸ `Abstract`**connect**(`connectionInfo`: [*HotDBConnectionInterface*](../interfaces/hotdbconnectioninterface.hotdbconnectioninterface-1.md)): *Promise*<any[]\>

Connect to the database. This will only start connecting
if db is null.

#### Parameters:

Name | Type |
:------ | :------ |
`connectionInfo` | [*HotDBConnectionInterface*](../interfaces/hotdbconnectioninterface.hotdbconnectioninterface-1.md) |

**Returns:** *Promise*<any[]\>

Defined in: [HotDB.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L49)

___

### disconnect

▸ `Abstract`**disconnect**(): *Promise*<void\>

Disconnect from the server.

**Returns:** *Promise*<void\>

Defined in: [HotDB.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L78)

___

### multiQuery

▸ `Abstract`**multiQuery**(`queryStrings`: *string*[] \| { `query`: *string* ; `values`: *any*[]  }[]): *Promise*<DBResultType[]\>

Make multiple queries.

#### Parameters:

Name | Type |
:------ | :------ |
`queryStrings` | *string*[] \| { `query`: *string* ; `values`: *any*[]  }[] |

**Returns:** *Promise*<DBResultType[]\>

Defined in: [HotDB.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L74)

___

### query

▸ `Abstract`**query**(`queryString`: *string*, `values?`: *any*[]): *Promise*<DBResultType\>

The query to make.

#### Parameters:

Name | Type |
:------ | :------ |
`queryString` | *string* |
`values?` | *any*[] |

**Returns:** *Promise*<DBResultType\>

Defined in: [HotDB.ts:66](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L66)

___

### queryOne

▸ `Abstract`**queryOne**(`queryString`: *string*, `values?`: *any*[]): *Promise*<DBResultType\>

Make a single query.

#### Parameters:

Name | Type |
:------ | :------ |
`queryString` | *string* |
`values?` | *any*[] |

**Returns:** *Promise*<DBResultType\>

Defined in: [HotDB.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L70)

___

### syncAllTables

▸ `Abstract`**syncAllTables**(`throwErrors?`: *boolean*): *Promise*<boolean\>

Synchronize all tables.

#### Parameters:

Name | Type |
:------ | :------ |
`throwErrors?` | *boolean* |

**Returns:** *Promise*<boolean\>

Defined in: [HotDB.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L53)

___

### syncTable

▸ `Abstract`**syncTable**(`tableName`: *string*, `throwErrors?`: *boolean*): *Promise*<boolean\>

Synchronize a table. This will create/modify the table based on whether it
exists, and if there's been any changes to any fields.

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | *string* |
`throwErrors?` | *boolean* |

**Returns:** *Promise*<boolean\>

Defined in: [HotDB.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L58)

___

### tableCheck

▸ `Abstract`**tableCheck**(`tableName`: *string*): *Promise*<boolean\>

Checks if the table exists.

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [HotDB.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/HotDB.ts#L62)
