**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestElementOptions

# Class: HotTestElementOptions

Hot test element options.

## Hierarchy

* **HotTestElementOptions**

## Implements

* [IHotTestElementOptions](../interfaces/ihottestelementoptions.md)

## Index

### Constructors

* [constructor](hottestelementoptions.md#constructor)

### Properties

* [ignoreMissingElementError](hottestelementoptions.md#ignoremissingelementerror)
* [mustBeVisible](hottestelementoptions.md#mustbevisible)

## Constructors

### constructor

\+ **new HotTestElementOptions**(`copy?`: [IHotTestElementOptions](../interfaces/ihottestelementoptions.md)): [HotTestElementOptions](hottestelementoptions.md)

*Defined in [HotTestElement.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestElement.ts#L34)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`copy` | [IHotTestElementOptions](../interfaces/ihottestelementoptions.md) | {} |

**Returns:** [HotTestElementOptions](hottestelementoptions.md)

## Properties

### ignoreMissingElementError

•  **ignoreMissingElementError**: boolean

*Implementation of [IHotTestElementOptions](../interfaces/ihottestelementoptions.md).[ignoreMissingElementError](../interfaces/ihottestelementoptions.md#ignoremissingelementerror)*

*Defined in [HotTestElement.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestElement.ts#L34)*

If the test element is missing, ignore the error. This
will cause the rest of the function to return immediately
without any exceptions being thrown.

___

### mustBeVisible

•  **mustBeVisible**: boolean

*Implementation of [IHotTestElementOptions](../interfaces/ihottestelementoptions.md).[mustBeVisible](../interfaces/ihottestelementoptions.md#mustbevisible)*

*Defined in [HotTestElement.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestElement.ts#L28)*

Indicates that the test element must be visible in
order to select it.
