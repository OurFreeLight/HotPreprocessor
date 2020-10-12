**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotDBMySQL

# Class: HotDBMySQL

The MySQL database connection.

## Hierarchy

* [HotDB](hotdb.md)\<Connection, { fields: FieldInfo[] ; results: any  }, [MySQLSchema](mysqlschema.md)>

  ↳ **HotDBMySQL**

## Index

### Constructors

* [constructor](hotdbmysql.md#constructor)

### Properties

* [db](hotdbmysql.md#db)
* [schema](hotdbmysql.md#schema)
* [type](hotdbmysql.md#type)

### Methods

* [connect](hotdbmysql.md#connect)
* [dbCheck](hotdbmysql.md#dbcheck)
* [disconnect](hotdbmysql.md#disconnect)
* [multiQuery](hotdbmysql.md#multiquery)
* [query](hotdbmysql.md#query)

## Constructors

### constructor

\+ **new HotDBMySQL**(`db`: Connection, `type`: string, `schema`: [MySQLSchema](mysqlschema.md)): [HotDBMySQL](hotdbmysql.md)

*Overrides [HotDB](hotdb.md).[constructor](hotdb.md#constructor)*

*Defined in [schemas/HotMySQL.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/HotMySQL.ts#L12)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`db` | Connection | null |
`type` | string | "mysql" |
`schema` | [MySQLSchema](mysqlschema.md) | null |

**Returns:** [HotDBMySQL](hotdbmysql.md)

## Properties

### db

•  **db**: Connection

*Inherited from [HotDB](hotdb.md).[db](hotdb.md#db)*

*Defined in [HotDB.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L16)*

The connection to the database (or the driver).

___

### schema

•  **schema**: [MySQLSchema](mysqlschema.md)

*Inherited from [HotDB](hotdb.md).[schema](hotdb.md#schema)*

*Defined in [HotDB.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L21)*

The db schema. This will generate a database structure
and keep it maintained as needed.

___

### type

•  **type**: string

*Inherited from [HotDB](hotdb.md).[type](hotdb.md#type)*

*Defined in [HotDB.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotDB.ts#L12)*

The database type.

## Methods

### connect

▸ **connect**(`connectionInfo`: [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md)): Promise\<any[]>

*Overrides [HotDB](hotdb.md).[connect](hotdb.md#connect)*

*Defined in [schemas/HotMySQL.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/HotMySQL.ts#L21)*

Connect to the database.

#### Parameters:

Name | Type |
------ | ------ |
`connectionInfo` | [HotDBConnectionInterface](../interfaces/hotdbconnectioninterface.md) |

**Returns:** Promise\<any[]>

___

### dbCheck

▸ `Protected`**dbCheck**(): void

*Defined in [schemas/HotMySQL.ts:45](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/HotMySQL.ts#L45)*

Checks to see if this has a database connection.

**Returns:** void

___

### disconnect

▸ **disconnect**(): Promise\<void>

*Overrides [HotDB](hotdb.md).[disconnect](hotdb.md#disconnect)*

*Defined in [schemas/HotMySQL.ts:112](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/HotMySQL.ts#L112)*

Disconnect from the server.

**Returns:** Promise\<void>

___

### multiQuery

▸ **multiQuery**(`queryStrings`: string[] \| { query: string ; values: any[]  }[]): Promise\<{ fields: FieldInfo[] ; results: any  }[]>

*Overrides [HotDB](hotdb.md).[multiQuery](hotdb.md#multiquery)*

*Defined in [schemas/HotMySQL.ts:75](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/HotMySQL.ts#L75)*

Make multiple queries. Warning! This can be a security vulnerability
if misused! Ideally this should only be used when make changes to tables!

#### Parameters:

Name | Type |
------ | ------ |
`queryStrings` | string[] \| { query: string ; values: any[]  }[] |

**Returns:** Promise\<{ fields: FieldInfo[] ; results: any  }[]>

___

### query

▸ **query**(`queryString`: string, `values`: any[]): Promise\<{ fields: FieldInfo[] ; results: any  }>

*Overrides [HotDB](hotdb.md).[query](hotdb.md#query)*

*Defined in [schemas/HotMySQL.ts:54](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/HotMySQL.ts#L54)*

The query to make.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`queryString` | string | - |
`values` | any[] | [] |

**Returns:** Promise\<{ fields: FieldInfo[] ; results: any  }>
