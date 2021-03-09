[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotComponent](../modules/hotcomponent.md) / HotComponent

# Class: HotComponent

[HotComponent](../modules/hotcomponent.md).HotComponent

A component to preprocess.

## Implements

* [*IHotComponent*](../interfaces/hotcomponent.ihotcomponent.md)

## Table of contents

### Constructors

- [constructor](hotcomponent.hotcomponent-1.md#constructor)

### Properties

- [api](hotcomponent.hotcomponent-1.md#api)
- [elementOptions](hotcomponent.hotcomponent-1.md#elementoptions)
- [events](hotcomponent.hotcomponent-1.md#events)
- [htmlElement](hotcomponent.hotcomponent-1.md#htmlelement)
- [name](hotcomponent.hotcomponent-1.md#name)
- [processor](hotcomponent.hotcomponent-1.md#processor)
- [tag](hotcomponent.hotcomponent-1.md#tag)
- [type](hotcomponent.hotcomponent-1.md#type)
- [value](hotcomponent.hotcomponent-1.md#value)

### Methods

- [click](hotcomponent.hotcomponent-1.md#click)
- [handleAttributes](hotcomponent.hotcomponent-1.md#handleattributes)
- [onCreated](hotcomponent.hotcomponent-1.md#oncreated)
- [output](hotcomponent.hotcomponent-1.md#output)

## Constructors

### constructor

\+ **new HotComponent**(`copy`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) \| [*IHotComponent*](../interfaces/hotcomponent.ihotcomponent.md), `api?`: [*HotAPI*](hotapi.hotapi-1.md)): [*HotComponent*](hotcomponent.hotcomponent-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`copy` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) \| [*IHotComponent*](../interfaces/hotcomponent.ihotcomponent.md) | - |
`api` | [*HotAPI*](hotapi.hotapi-1.md) | null |

**Returns:** [*HotComponent*](hotcomponent.hotcomponent-1.md)

Defined in: [HotComponent.ts:99](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L99)

## Properties

### api

• **api**: [*HotAPI*](hotapi.hotapi-1.md)

The connected API.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[api](../interfaces/hotcomponent.ihotcomponent.md#api)

Defined in: [HotComponent.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L77)

___

### elementOptions

• **elementOptions**: ElementDefinitionOptions

The options to include with registering this component.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[elementOptions](../interfaces/hotcomponent.ihotcomponent.md#elementoptions)

Defined in: [HotComponent.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L81)

___

### events

• **events**: *object*

The events to trigger.

#### Type declaration:

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[events](../interfaces/hotcomponent.ihotcomponent.md#events)

Defined in: [HotComponent.ts:93](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L93)

___

### htmlElement

• **htmlElement**: HTMLElement

The associated HTMLElement.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[htmlElement](../interfaces/hotcomponent.ihotcomponent.md#htmlelement)

Defined in: [HotComponent.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L65)

___

### name

• **name**: *string*

The name of the component.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[name](../interfaces/hotcomponent.ihotcomponent.md#name)

Defined in: [HotComponent.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L69)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The processor to use.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[processor](../interfaces/hotcomponent.ihotcomponent.md#processor)

Defined in: [HotComponent.ts:61](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L61)

___

### tag

• **tag**: *string*

The name of the tag.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[tag](../interfaces/hotcomponent.ihotcomponent.md#tag)

Defined in: [HotComponent.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L73)

___

### type

• **type**: *string*

The type of component.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[type](../interfaces/hotcomponent.ihotcomponent.md#type)

Defined in: [HotComponent.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L85)

___

### value

• **value**: *any*

The value of the component.

Implementation of: [IHotComponent](../interfaces/hotcomponent.ihotcomponent.md).[value](../interfaces/hotcomponent.ihotcomponent.md#value)

Defined in: [HotComponent.ts:89](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L89)

## Methods

### click

▸ `Abstract`**click**(): *Promise*<void\>

Handle a click event.

**Returns:** *Promise*<void\>

Defined in: [HotComponent.ts:152](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L152)

___

### handleAttributes

▸ `Optional`**handleAttributes**(`attributes`: NamedNodeMap): *Promise*<void\>

Handle the attributes manually.

#### Parameters:

Name | Type |
:------ | :------ |
`attributes` | NamedNodeMap |

**Returns:** *Promise*<void\>

Defined in: [HotComponent.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L147)

___

### onCreated

▸ **onCreated**(`element`: HTMLElement): *Promise*<any\>

Event that's called when this component is created. This is
called before output is called. Right after this is called,
the attributes from the HTMLElement will be processed. If
the functionality of the attributes processing need to be
overwritten, use the handleAttributes method to handle them.

#### Parameters:

Name | Type |
:------ | :------ |
`element` | HTMLElement |

**Returns:** *Promise*<any\>

Defined in: [HotComponent.ts:139](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L139)

___

### output

▸ `Abstract`**output**(): *Promise*<string\>

Output the component.

**Returns:** *Promise*<string\>

Defined in: [HotComponent.ts:157](https://github.com/OurFreeLight/HotPreprocessor/blob/6714234/src/HotComponent.ts#L157)
