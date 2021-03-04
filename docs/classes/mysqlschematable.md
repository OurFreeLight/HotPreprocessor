**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / MySQLSchemaTable

# Class: MySQLSchemaTable

The database table.

## Hierarchy

* **MySQLSchemaTable**

## Index

### Constructors

* [constructor](mysqlschematable.md#constructor)

### Properties

* [charset](mysqlschematable.md#charset)
* [description](mysqlschematable.md#description)
* [engine](mysqlschematable.md#engine)
* [fields](mysqlschematable.md#fields)
* [name](mysqlschematable.md#name)

### Methods

* [addField](mysqlschematable.md#addfield)
* [addFields](mysqlschematable.md#addfields)
* [generate](mysqlschematable.md#generate)

## Constructors

### constructor

\+ **new MySQLSchemaTable**(`name?`: string, `fields?`: [MySQLSchemaField](mysqlschemafield.md)[]): [MySQLSchemaTable](mysqlschematable.md)

*Defined in [schemas/mysql/MySQLSchemaTable.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L29)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string | "" |
`fields` | [MySQLSchemaField](mysqlschemafield.md)[] | [] |

**Returns:** [MySQLSchemaTable](mysqlschematable.md)

## Properties

### charset

•  **charset**: string

*Defined in [schemas/mysql/MySQLSchemaTable.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L29)*

The table's charset to use.

___

### description

•  **description**: string

*Defined in [schemas/mysql/MySQLSchemaTable.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L17)*

The table's description.

___

### engine

•  **engine**: string

*Defined in [schemas/mysql/MySQLSchemaTable.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L25)*

The table's engine to use.

___

### fields

•  **fields**: [MySQLSchemaField](mysqlschemafield.md)[]

*Defined in [schemas/mysql/MySQLSchemaTable.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L21)*

The fields in the table.

___

### name

•  **name**: string

*Defined in [schemas/mysql/MySQLSchemaTable.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L13)*

The name of the table.

## Methods

### addField

▸ **addField**(`field`: [MySQLSchemaField](mysqlschemafield.md)): void

*Defined in [schemas/mysql/MySQLSchemaTable.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L43)*

Add a field.

#### Parameters:

Name | Type |
------ | ------ |
`field` | [MySQLSchemaField](mysqlschemafield.md) |

**Returns:** void

___

### addFields

▸ **addFields**(`fields`: [MySQLSchemaField](mysqlschemafield.md)[]): void

*Defined in [schemas/mysql/MySQLSchemaTable.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L51)*

Add a field.

#### Parameters:

Name | Type |
------ | ------ |
`fields` | [MySQLSchemaField](mysqlschemafield.md)[] |

**Returns:** void

___

### generate

▸ **generate**(`type?`: [HotDBGenerationType](../enums/hotdbgenerationtype.md), `db?`: [HotDBMySQL](hotdbmysql.md)): Promise<string[]\>

*Defined in [schemas/mysql/MySQLSchemaTable.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/schemas/mysql/MySQLSchemaTable.ts#L70)*

Generate the db command. If type is set to modify, you must pass a db with an
active connection. Since field parsing isn't completely implemented yet, not all
fields will be modified correctly. Use modifiying with caution. This will
skip checking for:
* Binary columnexistingFields
* unique
* zero-filled
* generated column

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`type` | [HotDBGenerationType](../enums/hotdbgenerationtype.md) | HotDBGenerationType.Create |
`db` | [HotDBMySQL](hotdbmysql.md) | null |

**Returns:** Promise<string[]\>
