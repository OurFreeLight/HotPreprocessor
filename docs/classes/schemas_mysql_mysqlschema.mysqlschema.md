[hotpreprocessor](../README.md) / [Exports](../modules.md) / [schemas/mysql/MySQLSchema](../modules/schemas_mysql_mysqlschema.md) / MySQLSchema

# Class: MySQLSchema

[schemas/mysql/MySQLSchema](../modules/schemas_mysql_mysqlschema.md).MySQLSchema

The MySQL schema.

## Hierarchy

* [*HotDBSchema*](schemas_hotdbschema.hotdbschema.md)

  ↳ **MySQLSchema**

## Table of contents

### Constructors

- [constructor](schemas_mysql_mysqlschema.mysqlschema.md#constructor)

### Properties

- [name](schemas_mysql_mysqlschema.mysqlschema.md#name)
- [tables](schemas_mysql_mysqlschema.mysqlschema.md#tables)

### Methods

- [addFieldToTable](schemas_mysql_mysqlschema.mysqlschema.md#addfieldtotable)
- [addFieldsToTable](schemas_mysql_mysqlschema.mysqlschema.md#addfieldstotable)
- [addTable](schemas_mysql_mysqlschema.mysqlschema.md#addtable)
- [generateStructure](schemas_mysql_mysqlschema.mysqlschema.md#generatestructure)
- [generateTableStructure](schemas_mysql_mysqlschema.mysqlschema.md#generatetablestructure)

## Constructors

### constructor

\+ **new MySQLSchema**(`name`: *string*): [*MySQLSchema*](schemas_mysql_mysqlschema.mysqlschema.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*MySQLSchema*](schemas_mysql_mysqlschema.mysqlschema.md)

Inherited from: [HotDBSchema](schemas_hotdbschema.hotdbschema.md)

Defined in: [schemas/mysql/MySQLSchema.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L15)

## Properties

### name

• **name**: *string*

The name of this schema.

Inherited from: [HotDBSchema](schemas_hotdbschema.hotdbschema.md).[name](schemas_hotdbschema.hotdbschema.md#name)

Defined in: [schemas/HotDBSchema.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/HotDBSchema.ts#L15)

___

### tables

• **tables**: *object*

The tables in this schema.

#### Type declaration:

Defined in: [schemas/mysql/MySQLSchema.ts:15](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L15)

## Methods

### addFieldToTable

▸ **addFieldToTable**(`tableName`: *string*, `field`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)): *void*

Add a field to a table.

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | *string* |
`field` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md) |

**Returns:** *void*

Defined in: [schemas/mysql/MySQLSchema.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L35)

___

### addFieldsToTable

▸ **addFieldsToTable**(`tableName`: *string*, `fields`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[]): *void*

Add a field to a table.

#### Parameters:

Name | Type |
:------ | :------ |
`tableName` | *string* |
`fields` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[] |

**Returns:** *void*

Defined in: [schemas/mysql/MySQLSchema.ts:46](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L46)

___

### addTable

▸ **addTable**(`table`: [*MySQLSchemaTable*](schemas_mysql_mysqlschematable.mysqlschematable.md)): *void*

Add a table to this schema.

#### Parameters:

Name | Type |
:------ | :------ |
`table` | [*MySQLSchemaTable*](schemas_mysql_mysqlschematable.mysqlschematable.md) |

**Returns:** *void*

Defined in: [schemas/mysql/MySQLSchema.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L27)

___

### generateStructure

▸ **generateStructure**(`type?`: [*HotDBGenerationType*](../enums/schemas_hotdbschema.hotdbgenerationtype.md), `db?`: [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md)): *Promise*<string[][]\>

Generate the entire db structure. If type is set to modify, you must pass a db with an
active connection.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`type` | [*HotDBGenerationType*](../enums/schemas_hotdbschema.hotdbgenerationtype.md) | - |
`db` | [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md) | null |

**Returns:** *Promise*<string[][]\>

Defined in: [schemas/mysql/MySQLSchema.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L78)

___

### generateTableStructure

▸ **generateTableStructure**(`tableName`: *string*, `type?`: [*HotDBGenerationType*](../enums/schemas_hotdbschema.hotdbgenerationtype.md), `db?`: [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md)): *Promise*<string[]\>

Generate a table's structure. If type is set to modify, you must pass a db with an
active connection.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`tableName` | *string* | - |
`type` | [*HotDBGenerationType*](../enums/schemas_hotdbschema.hotdbgenerationtype.md) | - |
`db` | [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md) | null |

**Returns:** *Promise*<string[]\>

Defined in: [schemas/mysql/MySQLSchema.ts:62](https://github.com/OurFreeLight/HotPreprocessor/blob/042e7cd/src/schemas/mysql/MySQLSchema.ts#L62)
