**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotPreprocessor

# Class: HotPreprocessor

The main class that handles all HTML preprocessing, then outputs the
results.

## Hierarchy

* **HotPreprocessor**

## Implements

* [IHotPreprocessor](ihotpreprocessor.md)

## Index

### Constructors

* [constructor](hotpreprocessor.md#constructor)

### Properties

* [api](hotpreprocessor.md#api)
* [apiContent](hotpreprocessor.md#apicontent)
* [components](hotpreprocessor.md#components)
* [hotSite](hotpreprocessor.md#hotsite)
* [logger](hotpreprocessor.md#logger)
* [pageContent](hotpreprocessor.md#pagecontent)
* [pages](hotpreprocessor.md#pages)
* [isWeb](hotpreprocessor.md#isweb)

### Methods

* [addComponent](hotpreprocessor.md#addcomponent)
* [addPage](hotpreprocessor.md#addpage)
* [createExpressRoutes](hotpreprocessor.md#createexpressroutes)
* [generateContent](hotpreprocessor.md#generatecontent)
* [getComponent](hotpreprocessor.md#getcomponent)
* [getPage](hotpreprocessor.md#getpage)
* [loadHotSite](hotpreprocessor.md#loadhotsite)
* [process](hotpreprocessor.md#process)
* [registerComponent](hotpreprocessor.md#registercomponent)
* [addHtml](hotpreprocessor.md#addhtml)
* [displayContent](hotpreprocessor.md#displaycontent)
* [displayUrl](hotpreprocessor.md#displayurl)
* [onReady](hotpreprocessor.md#onready)
* [parseBoolean](hotpreprocessor.md#parseboolean)
* [processContent](hotpreprocessor.md#processcontent)
* [processLocalFile](hotpreprocessor.md#processlocalfile)
* [processUrl](hotpreprocessor.md#processurl)
* [useOutput](hotpreprocessor.md#useoutput)

## Constructors

### constructor

\+ **new HotPreprocessor**(`copy`: [IHotPreprocessor](ihotpreprocessor.md)): [HotPreprocessor](hotpreprocessor.md)

*Defined in [HotPreprocessor.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L130)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`copy` | [IHotPreprocessor](ihotpreprocessor.md) | {} |

**Returns:** [HotPreprocessor](hotpreprocessor.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Defined in [HotPreprocessor.ts:106](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L106)*

The api that's used to communicate with.

___

### apiContent

•  **apiContent**: string

*Defined in [HotPreprocessor.ts:122](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L122)*

The api content to use when about to load HotPreprocessor.

___

### components

•  **components**: { [name:string]: [HotComponent](hotcomponent.md);  }

*Defined in [HotPreprocessor.ts:114](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L114)*

The components that can be constructed.

___

### hotSite

•  **hotSite**: [HotSite](../interfaces/hotsite.md)

*Defined in [HotPreprocessor.ts:118](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L118)*

The loaded hotsite.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Defined in [HotPreprocessor.ts:130](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L130)*

The logger.

___

### pageContent

•  **pageContent**: string

*Defined in [HotPreprocessor.ts:126](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L126)*

The page content to use when about to load HotPreprocessor.

___

### pages

•  **pages**: { [name:string]: [HotPage](hotpage.md);  }

*Defined in [HotPreprocessor.ts:110](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L110)*

The pages that can be constructed.

___

### isWeb

▪ `Static` **isWeb**: boolean = false

*Defined in [HotPreprocessor.ts:102](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L102)*

Indicates if this is a web build.

## Methods

### addComponent

▸ **addComponent**(`component`: [HotComponent](hotcomponent.md)): void

*Defined in [HotPreprocessor.ts:233](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L233)*

Add and register a component.

#### Parameters:

Name | Type |
------ | ------ |
`component` | [HotComponent](hotcomponent.md) |

**Returns:** void

___

### addPage

▸ **addPage**(`page`: [HotPage](hotpage.md)): void

*Defined in [HotPreprocessor.ts:217](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L217)*

Add a page.

#### Parameters:

Name | Type |
------ | ------ |
`page` | [HotPage](hotpage.md) |

**Returns:** void

___

### createExpressRoutes

▸ **createExpressRoutes**(`expressApp`: any, `jsSrcPath`: string): void

*Defined in [HotPreprocessor.ts:467](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L467)*

Create the Express routes from the given pages. Be sure to load the
pages first before doing this. This method is meant to be used for
customized Express applications. If you wish to use the loaded routes
from this HotPreprocessor object with HotHTTPServer, be sure to use
the loadHotSite method in HotHTTPServer.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`expressApp` | any | - |
`jsSrcPath` | string | "./js/HotPreprocessor.js" |

**Returns:** void

___

### generateContent

▸ **generateContent**(`routeKey`: string, `name`: string, `url`: string, `jsSrcPath`: string): string

*Defined in [HotPreprocessor.ts:402](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L402)*

Generate the content to send to a client.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`routeKey` | string | - |
`name` | string | "" |
`url` | string | "./" |
`jsSrcPath` | string | "./js/HotPreprocessor.js" |

**Returns:** string

___

### getComponent

▸ **getComponent**(`name`: string): [HotComponent](hotcomponent.md)

*Defined in [HotPreprocessor.ts:303](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L303)*

Get a component to process.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [HotComponent](hotcomponent.md)

___

### getPage

▸ **getPage**(`pageName`: string): [HotPage](hotpage.md)

*Defined in [HotPreprocessor.ts:225](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L225)*

Get a page to process.

#### Parameters:

Name | Type |
------ | ------ |
`pageName` | string |

**Returns:** [HotPage](hotpage.md)

___

### loadHotSite

▸ **loadHotSite**(`path`: string): Promise\<void>

*Defined in [HotPreprocessor.ts:348](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L348)*

Load from a HotSite.json file.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise\<void>

___

### process

▸ **process**(`pageName`: string): Promise\<string>

*Defined in [HotPreprocessor.ts:484](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L484)*

Process a page and get the result.

#### Parameters:

Name | Type |
------ | ------ |
`pageName` | string |

**Returns:** Promise\<string>

___

### registerComponent

▸ **registerComponent**(`component`: [HotComponent](hotcomponent.md)): void

*Defined in [HotPreprocessor.ts:242](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L242)*

Register a component for use as a HTML tag.

#### Parameters:

Name | Type |
------ | ------ |
`component` | [HotComponent](hotcomponent.md) |

**Returns:** void

___

### addHtml

▸ `Static`**addHtml**(`parent`: string \| HTMLElement, `html`: string \| HTMLElement): HTMLElement \| HTMLElement[]

*Defined in [HotPreprocessor.ts:311](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L311)*

Add a new HTML element(s) to the current document.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | string \| HTMLElement |
`html` | string \| HTMLElement |

**Returns:** HTMLElement \| HTMLElement[]

___

### displayContent

▸ `Static`**displayContent**(`content`: string, `name`: string, `processor`: [HotPreprocessor](hotpreprocessor.md)): Promise\<[HotPreprocessor](hotpreprocessor.md)>

*Defined in [HotPreprocessor.ts:602](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L602)*

Process and replace the current HTML page with the hott script.
This is meant for web browser use only.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`content` | string | - |
`name` | string | - |
`processor` | [HotPreprocessor](hotpreprocessor.md) | null |

**Returns:** Promise\<[HotPreprocessor](hotpreprocessor.md)>

___

### displayUrl

▸ `Static`**displayUrl**(`url`: string, `name`: string, `processor`: [HotPreprocessor](hotpreprocessor.md)): Promise\<[HotPreprocessor](hotpreprocessor.md)>

*Defined in [HotPreprocessor.ts:581](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L581)*

Process and replace the current HTML page with the hott script from the given url.
This is meant for web browser use only.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`url` | string | - |
`name` | string | url |
`processor` | [HotPreprocessor](hotpreprocessor.md) | null |

**Returns:** Promise\<[HotPreprocessor](hotpreprocessor.md)>

___

### onReady

▸ `Static`**onReady**(`readyFunc`: () => void): void

*Defined in [HotPreprocessor.ts:558](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L558)*

When the window has finished loading, execute the function.
This is meant for web browser use only.

#### Parameters:

Name | Type |
------ | ------ |
`readyFunc` | () => void |

**Returns:** void

___

### parseBoolean

▸ `Static`**parseBoolean**(`value`: string): boolean

*Defined in [HotPreprocessor.ts:180](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L180)*

Parse a boolean value.

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** boolean

___

### processContent

▸ `Static`**processContent**(`processor`: [HotPreprocessor](hotpreprocessor.md), `content`: string, `name`: string): Promise\<string>

*Defined in [HotPreprocessor.ts:537](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L537)*

Process content and get the result.

#### Parameters:

Name | Type |
------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) |
`content` | string |
`name` | string |

**Returns:** Promise\<string>

___

### processLocalFile

▸ `Static`**processLocalFile**(`localFilepath`: string, `name`: string): Promise\<string>

*Defined in [HotPreprocessor.ts:495](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L495)*

Process a local file and get the result.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`localFilepath` | string | - |
`name` | string | localFilepath |

**Returns:** Promise\<string>

___

### processUrl

▸ `Static`**processUrl**(`processor`: [HotPreprocessor](hotpreprocessor.md), `url`: string, `name`: string): Promise\<string>

*Defined in [HotPreprocessor.ts:516](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L516)*

Process a url and get the result.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) | - |
`url` | string | - |
`name` | string | url |

**Returns:** Promise\<string>

___

### useOutput

▸ `Static`**useOutput**(`output`: string): void

*Defined in [HotPreprocessor.ts:570](https://github.com/OurFreeLight/HotPreprocessor/blob/5d07e7d/src/HotPreprocessor.ts#L570)*

Replace the current HTML page with the output.
This is meant for web browser use only.

#### Parameters:

Name | Type |
------ | ------ |
`output` | string |

**Returns:** void
