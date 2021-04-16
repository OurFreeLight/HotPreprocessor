[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTestElement](../modules/hottestelement.md) / HotTestElementOptions

# Class: HotTestElementOptions

[HotTestElement](../modules/hottestelement.md).HotTestElementOptions

Hot test element options.

## Implements

* [*IHotTestElementOptions*](../interfaces/hottestelement.ihottestelementoptions.md)

## Table of contents

### Constructors

- [constructor](hottestelement.hottestelementoptions.md#constructor)

### Properties

- [ignoreMissingElementError](hottestelement.hottestelementoptions.md#ignoremissingelementerror)
- [mustBeVisible](hottestelement.hottestelementoptions.md#mustbevisible)

## Constructors

### constructor

\+ **new HotTestElementOptions**(`copy?`: [*IHotTestElementOptions*](../interfaces/hottestelement.ihottestelementoptions.md)): [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)

#### Parameters:

Name | Type |
:------ | :------ |
`copy` | [*IHotTestElementOptions*](../interfaces/hottestelement.ihottestelementoptions.md) |

**Returns:** [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)

Defined in: [HotTestElement.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTestElement.ts#L34)

## Properties

### ignoreMissingElementError

• **ignoreMissingElementError**: *boolean*

If the test element is missing, ignore the error. This
will cause the rest of the function to return immediately
without any exceptions being thrown.

Implementation of: [IHotTestElementOptions](../interfaces/hottestelement.ihottestelementoptions.md).[ignoreMissingElementError](../interfaces/hottestelement.ihottestelementoptions.md#ignoremissingelementerror)

Defined in: [HotTestElement.ts:34](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTestElement.ts#L34)

___

### mustBeVisible

• **mustBeVisible**: *boolean*

Indicates that the test element must be visible in
order to select it.

Implementation of: [IHotTestElementOptions](../interfaces/hottestelement.ihottestelementoptions.md).[mustBeVisible](../interfaces/hottestelement.ihottestelementoptions.md#mustbevisible)

Defined in: [HotTestElement.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTestElement.ts#L28)
