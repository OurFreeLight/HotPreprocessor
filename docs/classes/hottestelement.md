**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestElement

# Class: HotTestElement

A test element.

## Hierarchy

* **HotTestElement**

## Implements

* [IHotTestElement](../interfaces/ihottestelement.md)

## Index

### Constructors

* [constructor](hottestelement.md#constructor)

### Properties

* [func](hottestelement.md#func)
* [name](hottestelement.md#name)
* [value](hottestelement.md#value)

## Constructors

### constructor

\+ **new HotTestElement**(`name`: string \| [IHotTestElement](../interfaces/ihottestelement.md), `func?`: string, `value?`: any): [HotTestElement](hottestelement.md)

*Defined in [HotTestElement.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTestElement.ts#L80)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`name` | string \| [IHotTestElement](../interfaces/ihottestelement.md) | - |
`func` | string | "" |
`value` | any | null |

**Returns:** [HotTestElement](hottestelement.md)

## Properties

### func

•  **func**: string

*Implementation of [IHotTestElement](../interfaces/ihottestelement.md).[func](../interfaces/ihottestelement.md#func)*

*Defined in [HotTestElement.ts:76](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTestElement.ts#L76)*

The name of the function to execute
while executing the test.

___

### name

•  **name**: string

*Implementation of [IHotTestElement](../interfaces/ihottestelement.md).[name](../interfaces/ihottestelement.md#name)*

*Defined in [HotTestElement.ts:71](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTestElement.ts#L71)*

The name of the element.

___

### value

•  **value**: any

*Implementation of [IHotTestElement](../interfaces/ihottestelement.md).[value](../interfaces/ihottestelement.md#value)*

*Defined in [HotTestElement.ts:80](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotTestElement.ts#L80)*

The value to use.
