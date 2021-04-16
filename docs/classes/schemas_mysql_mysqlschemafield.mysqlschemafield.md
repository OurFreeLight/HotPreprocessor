[hotpreprocessor](../README.md) / [Exports](../modules.md) / [schemas/mysql/MySQLSchemaField](../modules/schemas_mysql_mysqlschemafield.md) / MySQLSchemaField

# Class: MySQLSchemaField

[schemas/mysql/MySQLSchemaField](../modules/schemas_mysql_mysqlschemafield.md).MySQLSchemaField

The database field.

## Implements

* [*IMySQLSchemaField*](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md)

## Table of contents

### Constructors

- [constructor](schemas_mysql_mysqlschemafield.mysqlschemafield.md#constructor)

### Properties

- [autoIncrement](schemas_mysql_mysqlschemafield.mysqlschemafield.md#autoincrement)
- [binaryColumn](schemas_mysql_mysqlschemafield.mysqlschemafield.md#binarycolumn)
- [dataType](schemas_mysql_mysqlschemafield.mysqlschemafield.md#datatype)
- [defaultValue](schemas_mysql_mysqlschemafield.mysqlschemafield.md#defaultvalue)
- [fillZeroes](schemas_mysql_mysqlschemafield.mysqlschemafield.md#fillzeroes)
- [generatedColumn](schemas_mysql_mysqlschemafield.mysqlschemafield.md#generatedcolumn)
- [name](schemas_mysql_mysqlschemafield.mysqlschemafield.md#name)
- [notNull](schemas_mysql_mysqlschemafield.mysqlschemafield.md#notnull)
- [primaryKey](schemas_mysql_mysqlschemafield.mysqlschemafield.md#primarykey)
- [strAroundDefaultValue](schemas_mysql_mysqlschemafield.mysqlschemafield.md#strarounddefaultvalue)
- [uniqueIndex](schemas_mysql_mysqlschemafield.mysqlschemafield.md#uniqueindex)
- [unsignedDataType](schemas_mysql_mysqlschemafield.mysqlschemafield.md#unsigneddatatype)

### Methods

- [generate](schemas_mysql_mysqlschemafield.mysqlschemafield.md#generate)
- [compare](schemas_mysql_mysqlschemafield.mysqlschemafield.md#compare)
- [parse](schemas_mysql_mysqlschemafield.mysqlschemafield.md#parse)

## Constructors

### constructor

\+ **new MySQLSchemaField**(`name`: *string* \| [*IMySQLSchemaField*](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md), `dataType?`: *string*, `defaultValue?`: *string*, `primaryKey?`: *boolean*, `notNull?`: *boolean*, `uniqueIndex?`: *boolean*, `binaryColumn?`: *boolean*, `unsignedDataType?`: *boolean*, `fillZeroes?`: *boolean*, `autoIncrement?`: *boolean*, `generatedColumn?`: *boolean*, `strAroundDefaultValue?`: *string*): [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* \| [*IMySQLSchemaField*](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md) | - |
`dataType` | *string* | "" |
`defaultValue` | *string* | "" |
`primaryKey` | *boolean* | false |
`notNull` | *boolean* | true |
`uniqueIndex` | *boolean* | false |
`binaryColumn` | *boolean* | false |
`unsignedDataType` | *boolean* | false |
`fillZeroes` | *boolean* | false |
`autoIncrement` | *boolean* | false |
`generatedColumn` | *boolean* | false |
`strAroundDefaultValue` | *string* | "'" |

**Returns:** [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)

Defined in: [schemas/mysql/MySQLSchemaField.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L143)

## Properties

### autoIncrement

• **autoIncrement**: *boolean*

Set as an auto incrementing column.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[autoIncrement](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#autoincrement)

Defined in: [schemas/mysql/MySQLSchemaField.ts:129](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L129)

___

### binaryColumn

• **binaryColumn**: *boolean*

Set as a binary column.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[binaryColumn](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#binarycolumn)

Defined in: [schemas/mysql/MySQLSchemaField.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L117)

___

### dataType

• **dataType**: *string*

The data type, be sure to include the length of the
data type here as well.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[dataType](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#datatype)

Defined in: [schemas/mysql/MySQLSchemaField.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L101)

___

### defaultValue

• **defaultValue**: *string*

Set the default value. If this is set to null, a
MySQL NULL value will be used.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[defaultValue](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#defaultvalue)

Defined in: [schemas/mysql/MySQLSchemaField.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L138)

___

### fillZeroes

• **fillZeroes**: *boolean*

If this column is a number, fill with zeroes.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[fillZeroes](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#fillzeroes)

Defined in: [schemas/mysql/MySQLSchemaField.ts:125](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L125)

___

### generatedColumn

• **generatedColumn**: *boolean*

Set as a generated column.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[generatedColumn](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#generatedcolumn)

Defined in: [schemas/mysql/MySQLSchemaField.ts:133](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L133)

___

### name

• **name**: *string*

The name of the field.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[name](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#name)

Defined in: [schemas/mysql/MySQLSchemaField.ts:96](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L96)

___

### notNull

• **notNull**: *boolean*

Set as a not null.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[notNull](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#notnull)

Defined in: [schemas/mysql/MySQLSchemaField.ts:109](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L109)

___

### primaryKey

• **primaryKey**: *boolean*

Set as a primary key.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[primaryKey](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#primarykey)

Defined in: [schemas/mysql/MySQLSchemaField.ts:105](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L105)

___

### strAroundDefaultValue

• **strAroundDefaultValue**: *string*

Set the string to be used when setting the default
value. The default is: '

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[strAroundDefaultValue](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#strarounddefaultvalue)

Defined in: [schemas/mysql/MySQLSchemaField.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L143)

___

### uniqueIndex

• **uniqueIndex**: *boolean*

Set as a unique index.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[uniqueIndex](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#uniqueindex)

Defined in: [schemas/mysql/MySQLSchemaField.ts:113](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L113)

___

### unsignedDataType

• **unsignedDataType**: *boolean*

Set as an unsigned data type.

Implementation of: [IMySQLSchemaField](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md).[unsignedDataType](../interfaces/schemas_mysql_mysqlschemafield.imysqlschemafield.md#unsigneddatatype)

Defined in: [schemas/mysql/MySQLSchemaField.ts:121](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L121)

## Methods

### generate

▸ **generate**(): *Promise*<[*MySQLSchemaFieldResult*](../interfaces/schemas_mysql_mysqlschemafield.mysqlschemafieldresult.md)\>

Generate the db command.

**Returns:** *Promise*<[*MySQLSchemaFieldResult*](../interfaces/schemas_mysql_mysqlschemafield.mysqlschemafieldresult.md)\>

Defined in: [schemas/mysql/MySQLSchemaField.ts:326](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L326)

___

### compare

▸ `Static`**compare**(`field1`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md), `field2`: [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md), `onlyKeys?`: *string*[], `stringFilter?`: *RegExp*): *boolean*

Compare two different fields. This will iterate through all keys in each field. Any
string values found will have stringFilter applied to it, removing everything that
is in that stringFilter regex. Additionally for any empty strings found it will
compare to any undefined/null on the other side, and treat them as the same.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`field1` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md) | - | The first field to compare.   |
`field2` | [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md) | - | The second field to compare.   |
`onlyKeys` | *string*[] | null | Only compare using the provided keys. If set to null, this will compare using all of the keys in these objects.   |
`stringFilter` | *RegExp* | - | The regex to be used to help make any filters on any detected strings. The default regex provided will remove any whitespaces, single/doube quotes, back ticks, and parenthesis. If this is set to null, it will not be used.    |

**Returns:** *boolean*

Defined in: [schemas/mysql/MySQLSchemaField.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L201)

___

### parse

▸ `Static`**parse**(`json`: *any*): [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)

Parse a JSON object and get a MySQLSchemaField object from it.
Warning! This is only partially implemented. This will not check
the following fields:
* Binary column
* unique
* zero-filled
* generated column

#### Parameters:

Name | Type |
:------ | :------ |
`json` | *any* |

**Returns:** [*MySQLSchemaField*](schemas_mysql_mysqlschemafield.mysqlschemafield.md)

Defined in: [schemas/mysql/MySQLSchemaField.ts:266](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/schemas/mysql/MySQLSchemaField.ts#L266)
