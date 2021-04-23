[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotComponent](../modules/hotcomponent.md) / IHotComponent

# Interface: IHotComponent

[HotComponent](../modules/hotcomponent.md).IHotComponent

A component to preprocess.

## Implemented by

* [*HotComponent*](../classes/hotcomponent.hotcomponent-1.md)

## Table of contents

### Properties

- [api](hotcomponent.ihotcomponent.md#api)
- [elementOptions](hotcomponent.ihotcomponent.md#elementoptions)
- [events](hotcomponent.ihotcomponent.md#events)
- [htmlElement](hotcomponent.ihotcomponent.md#htmlelement)
- [name](hotcomponent.ihotcomponent.md#name)
- [processor](hotcomponent.ihotcomponent.md#processor)
- [tag](hotcomponent.ihotcomponent.md#tag)
- [type](hotcomponent.ihotcomponent.md#type)
- [value](hotcomponent.ihotcomponent.md#value)

## Properties

### api

• `Optional` **api**: [*HotAPI*](../classes/hotapi.hotapi-1.md)

The connected API.

Defined in: [HotComponent.ts:28](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L28)

___

### elementOptions

• `Optional` **elementOptions**: ElementDefinitionOptions

The options to include with registering this component.

Defined in: [HotComponent.ts:32](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L32)

___

### events

• `Optional` **events**: *object*

The events to trigger.

#### Type declaration:

Defined in: [HotComponent.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L44)

___

### htmlElement

• `Optional` **htmlElement**: HTMLElement

The associated HTMLElement.

Defined in: [HotComponent.ts:16](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L16)

___

### name

• `Optional` **name**: *string*

The name of the page.

Defined in: [HotComponent.ts:20](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L20)

___

### processor

• **processor**: [*HotPreprocessor*](../classes/hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Defined in: [HotComponent.ts:12](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L12)

___

### tag

• `Optional` **tag**: *string*

The name of the tag.

Defined in: [HotComponent.ts:24](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L24)

___

### type

• `Optional` **type**: *string*

The type of component.

Defined in: [HotComponent.ts:36](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L36)

___

### value

• `Optional` **value**: *any*

The value of the component.

Defined in: [HotComponent.ts:40](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotComponent.ts#L40)
