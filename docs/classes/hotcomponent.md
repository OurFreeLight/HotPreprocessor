**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotComponent

# Class: HotComponent

A component to preprocess.

## Hierarchy

* **HotComponent**

## Implements

* [IHotComponent](../interfaces/ihotcomponent.md)

## Index

### Constructors

* [constructor](hotcomponent.md#constructor)

### Properties

* [api](hotcomponent.md#api)
* [elementOptions](hotcomponent.md#elementoptions)
* [events](hotcomponent.md#events)
* [htmlElement](hotcomponent.md#htmlelement)
* [name](hotcomponent.md#name)
* [processor](hotcomponent.md#processor)
* [tag](hotcomponent.md#tag)
* [type](hotcomponent.md#type)
* [value](hotcomponent.md#value)

### Methods

* [click](hotcomponent.md#click)
* [handleAttributes](hotcomponent.md#handleattributes)
* [onCreated](hotcomponent.md#oncreated)
* [output](hotcomponent.md#output)

## Constructors

### constructor

\+ **new HotComponent**(`copy`: [IHotComponent](../interfaces/ihotcomponent.md) \| [HotPreprocessor](hotpreprocessor.md), `api`: [HotAPI](hotapi.md)): [HotComponent](hotcomponent.md)

*Defined in [HotComponent.ts:99](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L99)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`copy` | [IHotComponent](../interfaces/ihotcomponent.md) \| [HotPreprocessor](hotpreprocessor.md) | - |
`api` | [HotAPI](hotapi.md) | null |

**Returns:** [HotComponent](hotcomponent.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[api](../interfaces/ihotcomponent.md#api)*

*Defined in [HotComponent.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L77)*

The connected API.

___

### elementOptions

•  **elementOptions**: ElementDefinitionOptions

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[elementOptions](../interfaces/ihotcomponent.md#elementoptions)*

*Defined in [HotComponent.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L81)*

The options to include with registering this component.

___

### events

•  **events**: { [name:string]: { func: Function ; options: any ; type: string  };  }

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[events](../interfaces/ihotcomponent.md#events)*

*Defined in [HotComponent.ts:93](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L93)*

The events to trigger.

___

### htmlElement

•  **htmlElement**: HTMLElement

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[htmlElement](../interfaces/ihotcomponent.md#htmlelement)*

*Defined in [HotComponent.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L65)*

The associated HTMLElement.

___

### name

•  **name**: string

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[name](../interfaces/ihotcomponent.md#name)*

*Defined in [HotComponent.ts:69](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L69)*

The name of the component.

___

### processor

•  **processor**: [HotPreprocessor](hotpreprocessor.md)

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[processor](../interfaces/ihotcomponent.md#processor)*

*Defined in [HotComponent.ts:61](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L61)*

The processor to use.

___

### tag

•  **tag**: string

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[tag](../interfaces/ihotcomponent.md#tag)*

*Defined in [HotComponent.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L73)*

The name of the tag.

___

### type

•  **type**: string

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[type](../interfaces/ihotcomponent.md#type)*

*Defined in [HotComponent.ts:85](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L85)*

The type of component.

___

### value

•  **value**: any

*Implementation of [IHotComponent](../interfaces/ihotcomponent.md).[value](../interfaces/ihotcomponent.md#value)*

*Defined in [HotComponent.ts:89](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L89)*

The value of the component.

## Methods

### click

▸ `Abstract`**click**(): Promise\<void>

*Defined in [HotComponent.ts:152](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L152)*

Handle a click event.

**Returns:** Promise\<void>

___

### handleAttributes

▸ `Optional`**handleAttributes**(`attributes`: NamedNodeMap): Promise\<void>

*Defined in [HotComponent.ts:147](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L147)*

Handle the attributes manually.

#### Parameters:

Name | Type |
------ | ------ |
`attributes` | NamedNodeMap |

**Returns:** Promise\<void>

___

### onCreated

▸ **onCreated**(`element`: HTMLElement): Promise\<any>

*Defined in [HotComponent.ts:139](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L139)*

Event that's called when this component is created. This is
called before output is called. Right after this is called,
the attributes from the HTMLElement will be processed. If
the functionality of the attributes processing need to be
overwritten, use the handleAttributes method to handle them.

#### Parameters:

Name | Type |
------ | ------ |
`element` | HTMLElement |

**Returns:** Promise\<any>

___

### output

▸ `Abstract`**output**(): Promise\<string>

*Defined in [HotComponent.ts:157](https://github.com/OurFreeLight/HotPreprocessor/blob/9c94bd6/src/HotComponent.ts#L157)*

Output the component.

**Returns:** Promise\<string>
