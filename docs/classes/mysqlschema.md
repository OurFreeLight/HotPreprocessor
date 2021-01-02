**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / MySQLSchema

# Class: MySQLSchema

The MySQL schema.

## Hierarchy

* [HotDBSchema](hotdbschema.md)

  ↳ **MySQLSchema**

## Index

### Constructors

* [constructor](mysqlschema.md#constructor)

### Properties

* [name](mysqlschema.md#name)
* [tables](mysqlschema.md#tables)

### Methods

* [addFieldToTable](mysqlschema.md#addfieldtotable)
* [addFieldsToTable](mysqlschema.md#addfieldstotable)
* [addTable](mysqlschema.md#addtable)
* [generateStructure](mysqlschema.md#generatestructure)
* [generateTableStructure](mysqlschema.md#generatetablestructure)

## Constructors

### constructor

\+ **new MySQLSchema**(`name`: string): [MySQLSchema](mysqlschema.md)

*Overrides [HotDBSchema](hotdbschema.md).[constructor](hotdbschema.md#constructor)*

*Defined in [schemas/mysql/MySQLSchema.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [MySQLSchema](mysqlschema.md)

## Properties

### name

•  **name**: string

*Inherited from [HotDBSchema](hotdbschema.md).[name](hotdbschema.md#name)*

*Defined in [schemas/HotDBSchema.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/HotDBSchema.ts#L15)*

The name of this schema.

___

### tables

•  **tables**: { [name:string]: [MySQLSchemaTable](mysqlschematable.md);  }

*Defined in [schemas/mysql/MySQLSchema.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L15)*

The tables in this schema.

## Methods

### addFieldToTable

▸ **addFieldToTable**(`tableName`: string, `field`: [MySQLSchemaField](mysqlschemafield.md)): void

*Defined in [schemas/mysql/MySQLSchema.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L35)*

Add a field to a table.

#### Parameters:

Name | Type |
------ | ------ |
`tableName` | string |
`field` | [MySQLSchemaField](mysqlschemafield.md) |

**Returns:** void

___

### addFieldsToTable

▸ **addFieldsToTable**(`tableName`: string, `fields`: [MySQLSchemaField](mysqlschemafield.md)[]): void

*Defined in [schemas/mysql/MySQLSchema.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L46)*

Add a field to a table.

#### Parameters:

Name | Type |
------ | ------ |
`tableName` | string |
`fields` | [MySQLSchemaField](mysqlschemafield.md)[] |

**Returns:** void

___

### addTable

▸ **addTable**(`table`: [MySQLSchemaTable](mysqlschematable.md)): void

*Defined in [schemas/mysql/MySQLSchema.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L27)*

Add a table to this schema.

#### Parameters:

Name | Type |
------ | ------ |
`table` | [MySQLSchemaTable](mysqlschematable.md) |

**Returns:** void

___

### generateStructure

▸ **generateStructure**(`type?`: [HotDBGenerationType](../enums/hotdbgenerationtype.md), `db?`: [HotDBMySQL](hotdbmysql.md)): Promise<string[][]\>

*Defined in [schemas/mysql/MySQLSchema.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L78)*

Generate the entire db structure. If type is set to modify, you must pass a db with an
active connection.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`type` | [HotDBGenerationType](../enums/hotdbgenerationtype.md) | HotDBGenerationType.Create |
`db` | [HotDBMySQL](hotdbmysql.md) | null |

**Returns:** Promise<string[][]\>

___

### generateTableStructure

▸ **generateTableStructure**(`tableName`: string, `type?`: [HotDBGenerationType](../enums/hotdbgenerationtype.md), `db?`: [HotDBMySQL](hotdbmysql.md)): Promise<string[]\>

*Defined in [schemas/mysql/MySQLSchema.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchema.ts#L62)*

Generate a table's structure. If type is set to modify, you must pass a db with an
active connection.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`tableName` | string | - |
`type` | [HotDBGenerationType](../enums/hotdbgenerationtype.md) | HotDBGenerationType.Create |
`db` | [HotDBMySQL](hotdbmysql.md) | null |

**Returns:** Promise<string[]\>
