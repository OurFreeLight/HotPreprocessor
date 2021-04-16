[hotpreprocessor](../README.md) / [Exports](../modules.md) / [schemas/mysql/MySQLSchemaTable](../modules/schemas_mysql_mysqlschematable.md) / MySQLSchemaTable

# Class: MySQLSchemaTable

[schemas/mysql/MySQLSchemaTable](../modules/schemas_mysql_mysqlschematable.md).MySQLSchemaTable

The database table.

## Table of contents

### Constructors

- [constructor](schemas_mysql_mysqlschematable.mysqlschematable.md#constructor)

### Properties

- [charset](schemas_mysql_mysqlschematable.mysqlschematable.md#charset)
- [description](schemas_mysql_mysqlschematable.mysqlschematable.md#description)
- [engine](schemas_mysql_mysqlschematable.mysqlschematable.md#engine)
- [fields](schemas_mysql_mysqlschematable.mysqlschematable.md#fields)
- [name](schemas_mysql_mysqlschematable.mysqlschematable.md#name)

### Methods

- [addField](schemas_mysql_mysqlschematable.mysqlschematable.md#addfield)
- [addFields](schemas_mysql_mysqlschematable.mysqlschematable.md#addfields)
- [generate](schemas_mysql_mysqlschematable.mysqlschematable.md#generate)

## Constructors

### constructor

\+ **new MySQLSchemaTable**(`name?`: *string*, `fields?`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[]): [*MySQLSchemaTable*](schemas_mysql_mysqlschematable.mysqlschematable.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* | "" |
`fields` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[] | - |

**Returns:** [*MySQLSchemaTable*](schemas_mysql_mysqlschematable.mysqlschematable.md)

Defined in: [schemas/mysql/MySQLSchemaTable.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L29)

## Properties

### charset

• **charset**: *string*

The table's charset to use.

Defined in: [schemas/mysql/MySQLSchemaTable.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L29)

___

### description

• **description**: *string*

The table's description.

Defined in: [schemas/mysql/MySQLSchemaTable.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L17)

___

### engine

• **engine**: *string*

The table's engine to use.

Defined in: [schemas/mysql/MySQLSchemaTable.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L25)

___

### fields

• **fields**: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[]

The fields in the table.

Defined in: [schemas/mysql/MySQLSchemaTable.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L21)

___

### name

• **name**: *string*

The name of the table.

Defined in: [schemas/mysql/MySQLSchemaTable.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L13)

## Methods

### addField

▸ **addField**(`field`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)): *void*

Add a field.

#### Parameters:

Name | Type |
:------ | :------ |
`field` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md) |

**Returns:** *void*

Defined in: [schemas/mysql/MySQLSchemaTable.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L43)

___

### addFields

▸ **addFields**(`fields`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[]): *void*

Add a field.

#### Parameters:

Name | Type |
:------ | :------ |
`fields` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)[] |

**Returns:** *void*

Defined in: [schemas/mysql/MySQLSchemaTable.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L51)

___

### generate

▸ **generate**(`type?`: [*HotDBGenerationType*](../enums/schemas_hotdbschema.hotdbgenerationtype.md), `db?`: [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md)): *Promise*<string[]\>

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
:------ | :------ | :------ |
`type` | [*HotDBGenerationType*](../enums/schemas_hotdbschema.hotdbgenerationtype.md) | - |
`db` | [*HotDBMySQL*](schemas_hotdbmysql.hotdbmysql.md) | null |

**Returns:** *Promise*<string[]\>

Defined in: [schemas/mysql/MySQLSchemaTable.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaTable.ts#L70)
