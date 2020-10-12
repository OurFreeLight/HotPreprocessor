**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / MySQLSchemaField

# Class: MySQLSchemaField

The database field.

## Hierarchy

* **MySQLSchemaField**

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
* [uniqueIndex](mysqlschemafield.md#uniqueindex)
* [unsignedDataType](mysqlschemafield.md#unsigneddatatype)

### Methods

* [generate](mysqlschemafield.md#generate)
* [compare](mysqlschemafield.md#compare)
* [parse](mysqlschemafield.md#parse)

## Constructors

### constructor

\+ **new MySQLSchemaField**(`name`: string, `dataType`: string, `defaultValue`: string, `primaryKey`: boolean, `notNull`: boolean, `uniqueIndex`: boolean, `binaryColumn`: boolean, `unsignedDataType`: boolean, `fillZeroes`: boolean, `autoIncrement`: boolean, `generatedColumn`: boolean): [MySQLSchemaField](mysqlschemafield.md)

*Defined in [schemas/mysql/MySQLSchemaField.ts:79](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L79)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string | "" |
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

**Returns:** [MySQLSchemaField](mysqlschemafield.md)

## Properties

### autoIncrement

•  **autoIncrement**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L71)*

Set as an auto incrementing column.

___

### binaryColumn

•  **binaryColumn**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L59)*

Set as a binary column.

___

### dataType

•  **dataType**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L43)*

The data type, be sure to include the length of the
data type here as well.

___

### defaultValue

•  **defaultValue**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:79](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L79)*

Set the default value.

___

### fillZeroes

•  **fillZeroes**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:67](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L67)*

If this column is a number, fill with zeroes.

___

### generatedColumn

•  **generatedColumn**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:75](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L75)*

Set as a generated column.

___

### name

•  **name**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L38)*

The name of the field.

___

### notNull

•  **notNull**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L51)*

Set as a not null.

___

### primaryKey

•  **primaryKey**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:47](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L47)*

Set as a primary key.

___

### uniqueIndex

•  **uniqueIndex**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:55](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L55)*

Set as a unique index.

___

### unsignedDataType

•  **unsignedDataType**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L63)*

Set as an unsigned data type.

## Methods

### generate

▸ **generate**(): Promise\<[MySQLSchemaFieldResult](../interfaces/mysqlschemafieldresult.md)>

*Defined in [schemas/mysql/MySQLSchemaField.ts:211](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L211)*

Generate the db command.

**Returns:** Promise\<[MySQLSchemaFieldResult](../interfaces/mysqlschemafieldresult.md)>

___

### compare

▸ `Static`**compare**(`field1`: [MySQLSchemaField](mysqlschemafield.md), `field2`: [MySQLSchemaField](mysqlschemafield.md), `onlyKeys`: string[], `caseInsensitive`: boolean): boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L110)*

Compare two different fields.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`field1` | [MySQLSchemaField](mysqlschemafield.md) | - | The first field to compare. |
`field2` | [MySQLSchemaField](mysqlschemafield.md) | - | The second field to compare. |
`onlyKeys` | string[] | null | Only compare using the provided keys. If set to null, this will compare using all of the keys in these objects. |
`caseInsensitive` | boolean | true | If set to true, all detected string values will be compared as case insensitive.  |

**Returns:** boolean

___

### parse

▸ `Static`**parse**(`json`: any): [MySQLSchemaField](mysqlschemafield.md)

*Defined in [schemas/mysql/MySQLSchemaField.ts:151](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/schemas/mysql/MySQLSchemaField.ts#L151)*

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
