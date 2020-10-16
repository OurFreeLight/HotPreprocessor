**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotDB

# Class: HotDB\<DBType, DBResultType, DBSchema>

The server-side database connection.

## Type parameters

Name | Default |
------ | ------ |
`DBType` | any |
`DBResultType` | any |
`DBSchema` | HotDBSchema |

## Hierarchy

* **HotDB**

  ↳ [HotDBMySQL](hotdbmysql.md)

## Index

### Constructors

* [constructor](hotdb.md#constructor)

### Properties

* [connectionStatus](hotdb.md#connectionstatus)
* [db](hotdb.md#db)
* [schema](hotdb.md#schema)
* [type](hotdb.md#type)

### Methods

* [connect](hotdb.md#connect)
* [disconnect](hotdb.md#disconnect)
* [multiQuery](hotdb.md#multiquery)
* [query](hotdb.md#query)
* [syncAllTables](hotdb.md#syncalltables)
* [syncTable](hotdb.md#synctable)
* [tableCheck](hotdb.md#tablecheck)

## Constructors

### constructor

\+ **new HotDB**(`db`: DBType, `type`: string, `schema`: DBSchema): [HotDB](hotdb.md)

*Defined in [HotDB.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L35)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`db` | DBType | null |
`type` | string | "" |
`schema` | DBSchema | null |

**Returns:** [HotDB](hotdb.md)

## Properties

### connectionStatus

•  **connectionStatus**: [ConnectionStatus](../enums/connectionstatus.md)

*Defined in [HotDB.ts:30](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L30)*

The connection status.

___

### db

•  **db**: DBType

*Defined in [HotDB.ts:26](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L26)*

The connection to the database (or the driver).

___

### schema

•  **schema**: DBSchema

*Defined in [HotDB.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L35)*

The db schema. This will generate a database structure
and keep it maintained as needed.

___

### type

•  **type**: string

*Defined in [HotDB.ts:22](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L22)*

The database type.

## Methods

### connect

▸ `Abstract`**connect**(`connectionInfo`: [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md)): Promise\<any[]>

*Defined in [HotDB.ts:49](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L49)*

Connect to the database. This will only start connecting
if db is null.

#### Parameters:

Name | Type |
------ | ------ |
`connectionInfo` | [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md) |

**Returns:** Promise\<any[]>

___

### disconnect

▸ `Abstract`**disconnect**(): Promise\<void>

*Defined in [HotDB.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L74)*

Disconnect from the server.

**Returns:** Promise\<void>

___

### multiQuery

▸ `Abstract`**multiQuery**(`queryStrings`: string[] \| { query: string ; values: any[]  }[]): Promise\<DBResultType[]>

*Defined in [HotDB.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L70)*

Make multiple queries.

#### Parameters:

Name | Type |
------ | ------ |
`queryStrings` | string[] \| { query: string ; values: any[]  }[] |

**Returns:** Promise\<DBResultType[]>

___

### query

▸ `Abstract`**query**(`queryString`: string, `values?`: any[]): Promise\<DBResultType>

*Defined in [HotDB.ts:66](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L66)*

The query to make.

#### Parameters:

Name | Type |
------ | ------ |
`queryString` | string |
`values?` | any[] |

**Returns:** Promise\<DBResultType>

___

### syncAllTables

▸ `Abstract`**syncAllTables**(`throwErrors?`: boolean): Promise\<boolean>

*Defined in [HotDB.ts:53](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L53)*

Synchronize all tables.

#### Parameters:

Name | Type |
------ | ------ |
`throwErrors?` | boolean |

**Returns:** Promise\<boolean>

___

### syncTable

▸ `Abstract`**syncTable**(`tableName`: string, `throwErrors?`: boolean): Promise\<boolean>

*Defined in [HotDB.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L58)*

Synchronize a table. This will create/modify the table based on whether it
exists, and if there's been any changes to any fields.

#### Parameters:

Name | Type |
------ | ------ |
`tableName` | string |
`throwErrors?` | boolean |

**Returns:** Promise\<boolean>

___

### tableCheck

▸ `Abstract`**tableCheck**(`tableName`: string): Promise\<boolean>

*Defined in [HotDB.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/4cb6771/src/HotDB.ts#L62)*

Checks if the table exists.

#### Parameters:

Name | Type |
------ | ------ |
`tableName` | string |

**Returns:** Promise\<boolean>
