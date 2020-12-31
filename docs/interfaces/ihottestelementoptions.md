**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IHotTestElementOptions

# Interface: IHotTestElementOptions

Hot test element options.

## Hierarchy

* **IHotTestElementOptions**

## Implemented by

* [HotTestElementOptions](../classes/hottestelementoptions.md)

## Index

### Properties

* [ignoreMissingElementError](ihottestelementoptions.md#ignoremissingelementerror)
* [mustBeVisible](ihottestelementoptions.md#mustbevisible)

## Properties

### ignoreMissingElementError

• `Optional` **ignoreMissingElementError**: boolean

*Defined in [HotTestElement.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTestElement.ts#L16)*

If the test element is missing, ignore the error. This
will cause the rest of the function to return immediately
without any exceptions being thrown.

___

### mustBeVisible

• `Optional` **mustBeVisible**: boolean

*Defined in [HotTestElement.ts:10](https://github.com/OurFreeLight/HotPreprocessor/blob/79295d2/src/HotTestElement.ts#L10)*

Indicates that the test element must be visible in
order to select it.
