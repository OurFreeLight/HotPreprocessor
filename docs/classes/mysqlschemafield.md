**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / MySQLSchemaField

# Class: MySQLSchemaField

The database field.

## Hierarchy

* **MySQLSchemaField**

## Implements

* [IMySQLSchemaField](../interfaces/imysqlschemafield.md)

## Index

### Constructors

* [constructor](mysqlschemafield.md#constructor)

### Properties

* [autoIncrement](mysqlschemafield.md#autoincrement)
* [binaryColumn](mysqlschemafield.md#binarycolumn)
* [dataType](mysqlschemafield.md#datatype)
* [defaultValue](mysqlschemafield.md#defaultvalue)
* [fillZeroes](mysqlschemafield.md#fillzeroes)
* [generatedColumn](mysqlschemafield.md#generatedcolumn)
* [name](mysqlschemafield.md#name)
* [notNull](mysqlschemafield.md#notnull)
* [primaryKey](mysqlschemafield.md#primarykey)
* [strAroundDefaultValue](mysqlschemafield.md#strarounddefaultvalue)
* [uniqueIndex](mysqlschemafield.md#uniqueindex)
* [unsignedDataType](mysqlschemafield.md#unsigneddatatype)

### Methods

* [generate](mysqlschemafield.md#generate)
* [compare](mysqlschemafield.md#compare)
* [parse](mysqlschemafield.md#parse)

## Constructors

### constructor

\+ **new MySQLSchemaField**(`name`: string \| [IMySQLSchemaField](../interfaces/imysqlschemafield.md), `dataType`: string, `defaultValue`: string, `primaryKey`: boolean, `notNull`: boolean, `uniqueIndex`: boolean, `binaryColumn`: boolean, `unsignedDataType`: boolean, `fillZeroes`: boolean, `autoIncrement`: boolean, `generatedColumn`: boolean, `strAroundDefaultValue`: string): [MySQLSchemaField](mysqlschemafield.md)

*Defined in [schemas/mysql/MySQLSchemaField.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L143)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string \| [IMySQLSchemaField](../interfaces/imysqlschemafield.md) | - |
`dataType` | string | "" |
`defaultValue` | string | "" |
`primaryKey` | boolean | false |
`notNull` | boolean | true |
`uniqueIndex` | boolean | false |
`binaryColumn` | boolean | false |
`unsignedDataType` | boolean | false |
`fillZeroes` | boolean | false |
`autoIncrement` | boolean | false |
`generatedColumn` | boolean | false |
`strAroundDefaultValue` | string | "'" |

**Returns:** [MySQLSchemaField](mysqlschemafield.md)

## Properties

### autoIncrement

•  **autoIncrement**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[autoIncrement](../interfaces/imysqlschemafield.md#autoincrement)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:129](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L129)*

Set as an auto incrementing column.

___

### binaryColumn

•  **binaryColumn**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[binaryColumn](../interfaces/imysqlschemafield.md#binarycolumn)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L117)*

Set as a binary column.

___

### dataType

•  **dataType**: string

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[dataType](../interfaces/imysqlschemafield.md#datatype)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:101](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L101)*

The data type, be sure to include the length of the
data type here as well.

___

### defaultValue

•  **defaultValue**: string

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[defaultValue](../interfaces/imysqlschemafield.md#defaultvalue)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:138](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L138)*

Set the default value. If this is set to null, a
MySQL NULL value will be used.

___

### fillZeroes

•  **fillZeroes**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[fillZeroes](../interfaces/imysqlschemafield.md#fillzeroes)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:125](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L125)*

If this column is a number, fill with zeroes.

___

### generatedColumn

•  **generatedColumn**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[generatedColumn](../interfaces/imysqlschemafield.md#generatedcolumn)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:133](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L133)*

Set as a generated column.

___

### name

•  **name**: string

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[name](../interfaces/imysqlschemafield.md#name)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:96](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L96)*

The name of the field.

___

### notNull

•  **notNull**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[notNull](../interfaces/imysqlschemafield.md#notnull)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:109](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L109)*

Set as a not null.

___

### primaryKey

•  **primaryKey**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[primaryKey](../interfaces/imysqlschemafield.md#primarykey)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:105](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L105)*

Set as a primary key.

___

### strAroundDefaultValue

•  **strAroundDefaultValue**: string

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[strAroundDefaultValue](../interfaces/imysqlschemafield.md#strarounddefaultvalue)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L143)*

Set the string to be used when setting the default
value. The default is: '

___

### uniqueIndex

•  **uniqueIndex**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[uniqueIndex](../interfaces/imysqlschemafield.md#uniqueindex)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:113](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L113)*

Set as a unique index.

___

### unsignedDataType

•  **unsignedDataType**: boolean

*Implementation of [IMySQLSchemaField](../interfaces/imysqlschemafield.md).[unsignedDataType](../interfaces/imysqlschemafield.md#unsigneddatatype)*

*Defined in [schemas/mysql/MySQLSchemaField.ts:121](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L121)*

Set as an unsigned data type.

## Methods

### generate

▸ **generate**(): Promise\<[MySQLSchemaFieldResult](../interfaces/mysqlschemafieldresult.md)>

*Defined in [schemas/mysql/MySQLSchemaField.ts:326](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L326)*

Generate the db command.

**Returns:** Promise\<[MySQLSchemaFieldResult](../interfaces/mysqlschemafieldresult.md)>

___

### compare

▸ `Static`**compare**(`field1`: [MySQLSchemaField](mysqlschemafield.md), `field2`: [MySQLSchemaField](mysqlschemafield.md), `onlyKeys`: string[], `stringFilter`: RegExp): boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L201)*

Compare two different fields. This will iterate through all keys in each field. Any
string values found will have stringFilter applied to it, removing everything that
is in that stringFilter regex. Additionally for any empty strings found it will
compare to any undefined/null on the other side, and treat them as the same.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`field1` | [MySQLSchemaField](mysqlschemafield.md) | - | The first field to compare. |
`field2` | [MySQLSchemaField](mysqlschemafield.md) | - | The second field to compare. |
`onlyKeys` | string[] | null | Only compare using the provided keys. If set to null, this will compare using all of the keys in these objects. |
`stringFilter` | RegExp | new RegExp ("(\\s+|\\'+|\\\"+|\\`+|\\(+|\\)+)", "g") | The regex to be used to help make any filters on any detected strings. The default regex provided will remove any whitespaces, single/doube quotes, back ticks, and parenthesis. If this is set to null, it will not be used.  |

**Returns:** boolean

___

### parse

▸ `Static`**parse**(`json`: any): [MySQLSchemaField](mysqlschemafield.md)

*Defined in [schemas/mysql/MySQLSchemaField.ts:266](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/schemas/mysql/MySQLSchemaField.ts#L266)*

Parse a JSON object and get a MySQLSchemaField object from it.
Warning! This is only partially implemented. This will not check
the following fields:
* Binary column
* unique
* zero-filled
* generated column

#### Parameters:

Name | Type |
------ | ------ |
`json` | any |

**Returns:** [MySQLSchemaField](mysqlschemafield.md)
