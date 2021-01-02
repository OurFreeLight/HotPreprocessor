**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IMySQLSchemaField

# Interface: IMySQLSchemaField

The database field.

## Hierarchy

* **IMySQLSchemaField**

## Implemented by

* [MySQLSchemaField](../classes/mysqlschemafield.md)

## Index

### Properties

* [autoIncrement](imysqlschemafield.md#autoincrement)
* [binaryColumn](imysqlschemafield.md#binarycolumn)
* [dataType](imysqlschemafield.md#datatype)
* [defaultValue](imysqlschemafield.md#defaultvalue)
* [fillZeroes](imysqlschemafield.md#fillzeroes)
* [generatedColumn](imysqlschemafield.md#generatedcolumn)
* [name](imysqlschemafield.md#name)
* [notNull](imysqlschemafield.md#notnull)
* [primaryKey](imysqlschemafield.md#primarykey)
* [strAroundDefaultValue](imysqlschemafield.md#strarounddefaultvalue)
* [uniqueIndex](imysqlschemafield.md#uniqueindex)
* [unsignedDataType](imysqlschemafield.md#unsigneddatatype)

## Properties

### autoIncrement

• `Optional` **autoIncrement**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L71)*

Set as an auto incrementing column.

___

### binaryColumn

• `Optional` **binaryColumn**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L59)*

Set as a binary column.

___

### dataType

•  **dataType**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L43)*

The data type, be sure to include the length of the
data type here as well.

___

### defaultValue

• `Optional` **defaultValue**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L80)*

Set the default value. If this is set to null, a
MySQL NULL value will be used.

___

### fillZeroes

• `Optional` **fillZeroes**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:67](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L67)*

If this column is a number, fill with zeroes.

___

### generatedColumn

• `Optional` **generatedColumn**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:75](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L75)*

Set as a generated column.

___

### name

•  **name**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L38)*

The name of the field.

___

### notNull

• `Optional` **notNull**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L51)*

Set as a not null.

___

### primaryKey

• `Optional` **primaryKey**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:47](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L47)*

Set as a primary key.

___

### strAroundDefaultValue

• `Optional` **strAroundDefaultValue**: string

*Defined in [schemas/mysql/MySQLSchemaField.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L85)*

Set the string to be used when setting the default
value. The default is: '

___

### uniqueIndex

• `Optional` **uniqueIndex**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:55](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L55)*

Set as a unique index.

___

### unsignedDataType

• `Optional` **unsignedDataType**: boolean

*Defined in [schemas/mysql/MySQLSchemaField.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/schemas/mysql/MySQLSchemaField.ts#L63)*

Set as an unsigned data type.
