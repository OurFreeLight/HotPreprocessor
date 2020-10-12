**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / IHotComponent

# Interface: IHotComponent

A component to preprocess.

## Hierarchy

* **IHotComponent**

## Implemented by

* [HotComponent](../classes/hotcomponent.md)

## Index

### Properties

* [api](ihotcomponent.md#api)
* [elementOptions](ihotcomponent.md#elementoptions)
* [events](ihotcomponent.md#events)
* [htmlElement](ihotcomponent.md#htmlelement)
* [name](ihotcomponent.md#name)
* [processor](ihotcomponent.md#processor)
* [tag](ihotcomponent.md#tag)
* [type](ihotcomponent.md#type)
* [value](ihotcomponent.md#value)

## Properties

### api

• `Optional` **api**: [HotAPI](../classes/hotapi.md)

*Defined in [HotComponent.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L28)*

The connected API.

___

### elementOptions

• `Optional` **elementOptions**: ElementDefinitionOptions

*Defined in [HotComponent.ts:32](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L32)*

The options to include with registering this component.

___

### events

• `Optional` **events**: { [name:string]: { func: Function ; options?: any ; type: string  };  }

*Defined in [HotComponent.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L44)*

The events to trigger.

___

### htmlElement

• `Optional` **htmlElement**: HTMLElement

*Defined in [HotComponent.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L16)*

The associated HTMLElement.

___

### name

• `Optional` **name**: string

*Defined in [HotComponent.ts:20](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L20)*

The name of the page.

___

### processor

•  **processor**: [HotPreprocessor](../classes/hotpreprocessor.md)

*Defined in [HotComponent.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L12)*

The processor to use.

___

### tag

• `Optional` **tag**: string

*Defined in [HotComponent.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L24)*

The name of the tag.

___

### type

• `Optional` **type**: string

*Defined in [HotComponent.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L36)*

The type of component.

___

### value

• `Optional` **value**: any

*Defined in [HotComponent.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotComponent.ts#L40)*

The value of the component.
