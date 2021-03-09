[hotpreprocessor](../README.md) / [Exports](../modules.md) / [schemas/mysql/MySQLSchemaField](../modules/schemas_mysql_mysqlschemafield.md) / IMySQLSchemaField

# Interface: IMySQLSchemaField

[schemas/mysql/MySQLSchemaField](../modules/schemas_mysql_mysqlschemafield.md).IMySQLSchemaField

The database field.

## Implemented by

* [*MySQLSchemaField*](../classes/schemas_mysql_mysqlschemafield.mysqlschemafield.md)

## Table of contents

### Properties

- [autoIncrement](schemas_mysql_mysqlschemafield.imysqlschemafield.md#autoincrement)
- [binaryColumn](schemas_mysql_mysqlschemafield.imysqlschemafield.md#binarycolumn)
- [dataType](schemas_mysql_mysqlschemafield.imysqlschemafield.md#datatype)
- [defaultValue](schemas_mysql_mysqlschemafield.imysqlschemafield.md#defaultvalue)
- [fillZeroes](schemas_mysql_mysqlschemafield.imysqlschemafield.md#fillzeroes)
- [generatedColumn](schemas_mysql_mysqlschemafield.imysqlschemafield.md#generatedcolumn)
- [name](schemas_mysql_mysqlschemafield.imysqlschemafield.md#name)
- [notNull](schemas_mysql_mysqlschemafield.imysqlschemafield.md#notnull)
- [primaryKey](schemas_mysql_mysqlschemafield.imysqlschemafield.md#primarykey)
- [strAroundDefaultValue](schemas_mysql_mysqlschemafield.imysqlschemafield.md#strarounddefaultvalue)
- [uniqueIndex](schemas_mysql_mysqlschemafield.imysqlschemafield.md#uniqueindex)
- [unsignedDataType](schemas_mysql_mysqlschemafield.imysqlschemafield.md#unsigneddatatype)

## Properties

### autoIncrement

• `Optional` **autoIncrement**: *boolean*

Set as an auto incrementing column.

Defined in: [schemas/mysql/MySQLSchemaField.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L71)

___

### binaryColumn

• `Optional` **binaryColumn**: *boolean*

Set as a binary column.

Defined in: [schemas/mysql/MySQLSchemaField.ts:59](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L59)

___

### dataType

• **dataType**: *string*

The data type, be sure to include the length of the
data type here as well.

Defined in: [schemas/mysql/MySQLSchemaField.ts:43](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L43)

___

### defaultValue

• `Optional` **defaultValue**: *string*

Set the default value. If this is set to null, a
MySQL NULL value will be used.

Defined in: [schemas/mysql/MySQLSchemaField.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L80)

___

### fillZeroes

• `Optional` **fillZeroes**: *boolean*

If this column is a number, fill with zeroes.

Defined in: [schemas/mysql/MySQLSchemaField.ts:67](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L67)

___

### generatedColumn

• `Optional` **generatedColumn**: *boolean*

Set as a generated column.

Defined in: [schemas/mysql/MySQLSchemaField.ts:75](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L75)

___

### name

• **name**: *string*

The name of the field.

Defined in: [schemas/mysql/MySQLSchemaField.ts:38](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L38)

___

### notNull

• `Optional` **notNull**: *boolean*

Set as a not null.

Defined in: [schemas/mysql/MySQLSchemaField.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L51)

___

### primaryKey

• `Optional` **primaryKey**: *boolean*

Set as a primary key.

Defined in: [schemas/mysql/MySQLSchemaField.ts:47](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L47)

___

### strAroundDefaultValue

• `Optional` **strAroundDefaultValue**: *string*

Set the string to be used when setting the default
value. The default is: '

Defined in: [schemas/mysql/MySQLSchemaField.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L85)

___

### uniqueIndex

• `Optional` **uniqueIndex**: *boolean*

Set as a unique index.

Defined in: [schemas/mysql/MySQLSchemaField.ts:55](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L55)

___

### unsignedDataType

• `Optional` **unsignedDataType**: *boolean*

Set as an unsigned data type.

Defined in: [schemas/mysql/MySQLSchemaField.ts:63](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/schemas/mysql/MySQLSchemaField.ts#L63)
