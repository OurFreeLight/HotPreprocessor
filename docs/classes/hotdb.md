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

* [db](hotdb.md#db)
* [schema](hotdb.md#schema)
* [type](hotdb.md#type)

### Methods

* [connect](hotdb.md#connect)
* [disconnect](hotdb.md#disconnect)
* [multiQuery](hotdb.md#multiquery)
* [query](hotdb.md#query)

## Constructors

### constructor

\+ **new HotDB**(`db`: DBType, `type`: string, `schema`: DBSchema): [HotDB](hotdb.md)

*Defined in [HotDB.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L21)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`db` | DBType | null |
`type` | string | "" |
`schema` | DBSchema | null |

**Returns:** [HotDB](hotdb.md)

## Properties

### db

•  **db**: DBType

*Defined in [HotDB.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L16)*

The connection to the database (or the driver).

___

### schema

•  **schema**: DBSchema

*Defined in [HotDB.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L21)*

The db schema. This will generate a database structure
and keep it maintained as needed.

___

### type

•  **type**: string

*Defined in [HotDB.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L12)*

The database type.

## Methods

### connect

▸ `Abstract`**connect**(`connectionInfo`: [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md)): Promise\<any[]>

*Defined in [HotDB.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L34)*

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

*Defined in [HotDB.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L46)*

Disconnect from the server.

**Returns:** Promise\<void>

___

### multiQuery

▸ `Abstract`**multiQuery**(`queryStrings`: string[] \| { query: string ; values: any[]  }[]): Promise\<DBResultType[]>

*Defined in [HotDB.ts:42](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L42)*

Make multiple queries.

#### Parameters:

Name | Type |
------ | ------ |
`queryStrings` | string[] \| { query: string ; values: any[]  }[] |

**Returns:** Promise\<DBResultType[]>

___

### query

▸ `Abstract`**query**(`queryString`: string, `values?`: any[]): Promise\<DBResultType>

*Defined in [HotDB.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L38)*

The query to make.

#### Parameters:

Name | Type |
------ | ------ |
`queryString` | string |
`values?` | any[] |

**Returns:** Promise\<DBResultType>
