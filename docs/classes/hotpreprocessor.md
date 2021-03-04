**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotPreprocessor

# Class: HotPreprocessor

The main class that handles all HTML preprocessing, then outputs the
results.

## Hierarchy

* **HotPreprocessor**

## Implements

* [IHotPreprocessor](../interfaces/ihotpreprocessor.md)

## Index

### Constructors

* [constructor](hotpreprocessor.md#constructor)

### Properties

* [api](hotpreprocessor.md#api)
* [apiContent](hotpreprocessor.md#apicontent)
* [components](hotpreprocessor.md#components)
* [files](hotpreprocessor.md#files)
* [hotSite](hotpreprocessor.md#hotsite)
* [logger](hotpreprocessor.md#logger)
* [mode](hotpreprocessor.md#mode)
* [pageContent](hotpreprocessor.md#pagecontent)
* [pages](hotpreprocessor.md#pages)
* [publicSecrets](hotpreprocessor.md#publicsecrets)
* [testerAPI](hotpreprocessor.md#testerapi)
* [testerApiContent](hotpreprocessor.md#testerapicontent)
* [testers](hotpreprocessor.md#testers)
* [isReadyForTesting](hotpreprocessor.md#isreadyfortesting)
* [isWeb](hotpreprocessor.md#isweb)
* [onReadyForTesting](hotpreprocessor.md#onreadyfortesting)

### Methods

* [addComponent](hotpreprocessor.md#addcomponent)
* [addFile](hotpreprocessor.md#addfile)
* [addPage](hotpreprocessor.md#addpage)
* [addTester](hotpreprocessor.md#addtester)
* [createExpressRoutes](hotpreprocessor.md#createexpressroutes)
* [executeAllTests](hotpreprocessor.md#executealltests)
* [executeTests](hotpreprocessor.md#executetests)
* [generateContent](hotpreprocessor.md#generatecontent)
* [getComponent](hotpreprocessor.md#getcomponent)
* [getFile](hotpreprocessor.md#getfile)
* [getPage](hotpreprocessor.md#getpage)
* [getRouteFromName](hotpreprocessor.md#getroutefromname)
* [getRouteKeyFromName](hotpreprocessor.md#getroutekeyfromname)
* [getTestingMapUrls](hotpreprocessor.md#gettestingmapurls)
* [getTestingMaps](hotpreprocessor.md#gettestingmaps)
* [loadHotFiles](hotpreprocessor.md#loadhotfiles)
* [loadHotSite](hotpreprocessor.md#loadhotsite)
* [process](hotpreprocessor.md#process)
* [registerComponent](hotpreprocessor.md#registercomponent)
* [addHtml](hotpreprocessor.md#addhtml)
* [checkHotSiteName](hotpreprocessor.md#checkhotsitename)
* [displayContent](hotpreprocessor.md#displaycontent)
* [displayUrl](hotpreprocessor.md#displayurl)
* [getValueFromHotSiteObj](hotpreprocessor.md#getvaluefromhotsiteobj)
* [onReady](hotpreprocessor.md#onready)
* [parseBoolean](hotpreprocessor.md#parseboolean)
* [processContent](hotpreprocessor.md#processcontent)
* [processLocalFile](hotpreprocessor.md#processlocalfile)
* [processUrl](hotpreprocessor.md#processurl)
* [replaceKey](hotpreprocessor.md#replacekey)
* [useOutput](hotpreprocessor.md#useoutput)
* [wait](hotpreprocessor.md#wait)
* [waitForTesters](hotpreprocessor.md#waitfortesters)

## Constructors

### constructor

\+ **new HotPreprocessor**(`copy?`: [IHotPreprocessor](../interfaces/ihotpreprocessor.md)): [HotPreprocessor](hotpreprocessor.md)

*Defined in [HotPreprocessor.ts:389](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L389)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`copy` | [IHotPreprocessor](../interfaces/ihotpreprocessor.md) | {} |

**Returns:** [HotPreprocessor](hotpreprocessor.md)

## Properties

### api

•  **api**: [HotAPI](hotapi.md)

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[api](../interfaces/ihotpreprocessor.md#api)*

*Defined in [HotPreprocessor.ts:345](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L345)*

The api that's used to communicate with.

___

### apiContent

•  **apiContent**: string

*Defined in [HotPreprocessor.ts:369](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L369)*

The api content to use when about to load HotPreprocessor.

___

### components

•  **components**: { [name:string]: [HotComponent](hotcomponent.md);  }

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[components](../interfaces/ihotpreprocessor.md#components)*

*Defined in [HotPreprocessor.ts:357](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L357)*

The components that can be constructed.

___

### files

•  **files**: { [name:string]: [HotFile](hotfile.md);  }

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[files](../interfaces/ihotpreprocessor.md#files)*

*Defined in [HotPreprocessor.ts:361](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L361)*

The files that can be stored for later use.

___

### hotSite

•  **hotSite**: [HotSite](../interfaces/hotsite.md)

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[hotSite](../interfaces/ihotpreprocessor.md#hotsite)*

*Defined in [HotPreprocessor.ts:365](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L365)*

The loaded hotsite.

___

### logger

•  **logger**: [HotLog](hotlog.md)

*Defined in [HotPreprocessor.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L381)*

The logger.

___

### mode

•  **mode**: [DeveloperMode](../enums/developermode.md)

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[mode](../interfaces/ihotpreprocessor.md#mode)*

*Defined in [HotPreprocessor.ts:341](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L341)*

Indicates what type of execution this is.

___

### pageContent

•  **pageContent**: string

*Defined in [HotPreprocessor.ts:377](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L377)*

The page content to use when about to load HotPreprocessor.

___

### pages

•  **pages**: { [name:string]: [HotPage](hotpage.md);  }

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[pages](../interfaces/ihotpreprocessor.md#pages)*

*Defined in [HotPreprocessor.ts:353](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L353)*

The pages that can be constructed.

___

### publicSecrets

•  **publicSecrets**: any

*Defined in [HotPreprocessor.ts:385](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L385)*

The secrets that can be exposed publicly.

___

### testerAPI

•  **testerAPI**: [HotAPI](hotapi.md)

*Implementation of [IHotPreprocessor](../interfaces/ihotpreprocessor.md).[testerAPI](../interfaces/ihotpreprocessor.md#testerapi)*

*Defined in [HotPreprocessor.ts:349](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L349)*

The tester api that's used to communicate with.

___

### testerApiContent

•  **testerApiContent**: string

*Defined in [HotPreprocessor.ts:373](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L373)*

The tester api content to use when about to load HotPreprocessor.

___

### testers

•  **testers**: { [name:string]: [HotTester](hottester.md);  }

*Defined in [HotPreprocessor.ts:389](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L389)*

The secrets that can be exposed publicly.

___

### isReadyForTesting

▪ `Static` **isReadyForTesting**: boolean = false

*Defined in [HotPreprocessor.ts:333](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L333)*

Indicates if this is ready for testing.

___

### isWeb

▪ `Static` **isWeb**: boolean = false

*Defined in [HotPreprocessor.ts:329](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L329)*

Indicates if this is a web build.

___

### onReadyForTesting

▪ `Static` **onReadyForTesting**: () => Promise<void\> = null

*Defined in [HotPreprocessor.ts:337](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L337)*

Executes this event when this page is ready for testing.

## Methods

### addComponent

▸ **addComponent**(`component`: [HotComponent](hotcomponent.md)): void

*Defined in [HotPreprocessor.ts:574](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L574)*

Add and register a component.

#### Parameters:

Name | Type |
------ | ------ |
`component` | [HotComponent](hotcomponent.md) |

**Returns:** void

___

### addFile

▸ **addFile**(`file`: [HotFile](hotfile.md)): void

*Defined in [HotPreprocessor.ts:547](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L547)*

Add a file.

#### Parameters:

Name | Type |
------ | ------ |
`file` | [HotFile](hotfile.md) |

**Returns:** void

___

### addPage

▸ **addPage**(`page`: [HotPage](hotpage.md)): void

*Defined in [HotPreprocessor.ts:531](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L531)*

Add a page.

#### Parameters:

Name | Type |
------ | ------ |
`page` | [HotPage](hotpage.md) |

**Returns:** void

___

### addTester

▸ **addTester**(`tester`: [HotTester](hottester.md)): void

*Defined in [HotPreprocessor.ts:1210](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1210)*

Add a tester for use later.

#### Parameters:

Name | Type |
------ | ------ |
`tester` | [HotTester](hottester.md) |

**Returns:** void

___

### createExpressRoutes

▸ **createExpressRoutes**(`expressApp`: any, `jsSrcPath?`: string): void

*Defined in [HotPreprocessor.ts:1193](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1193)*

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

### executeAllTests

▸ **executeAllTests**(`testerName`: string): Promise<void\>

*Defined in [HotPreprocessor.ts:1323](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1323)*

Execute all tests from the HotSite testing object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`testerName` | string | The tester to use to execute tests. |

**Returns:** Promise<void\>

___

### executeTests

▸ **executeTests**(`testerName`: string, `mapName`: string): Promise<void\>

*Defined in [HotPreprocessor.ts:1307](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1307)*

Execute tests.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`testerName` | string | The tester to use to execute tests. |
`mapName` | string | The map or maps to use to navigate through tests.  |

**Returns:** Promise<void\>

___

### generateContent

▸ **generateContent**(`routeKey`: string, `name?`: string, `url?`: string, `jsSrcPath?`: string, `passArgs?`: boolean, `args?`: any): string

*Defined in [HotPreprocessor.ts:994](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L994)*

Generate the content to send to a client.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`routeKey` | string | - |
`name` | string | "" |
`url` | string | "./" |
`jsSrcPath` | string | "./js/HotPreprocessor.js" |
`passArgs` | boolean | true |
`args` | any | null |

**Returns:** string

___

### getComponent

▸ **getComponent**(`name`: string): [HotComponent](hotcomponent.md)

*Defined in [HotPreprocessor.ts:644](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L644)*

Get a component to process.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [HotComponent](hotcomponent.md)

___

### getFile

▸ **getFile**(`name`: string): [HotFile](hotfile.md)

*Defined in [HotPreprocessor.ts:563](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L563)*

Get a file.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [HotFile](hotfile.md)

___

### getPage

▸ **getPage**(`pageName`: string): [HotPage](hotpage.md)

*Defined in [HotPreprocessor.ts:539](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L539)*

Get a page to process.

#### Parameters:

Name | Type |
------ | ------ |
`pageName` | string |

**Returns:** [HotPage](hotpage.md)

___

### getRouteFromName

▸ **getRouteFromName**(`name`: string): [HotSiteRoute](../interfaces/hotsiteroute.md)

*Defined in [HotPreprocessor.ts:1290](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1290)*

Get a route from a route's name.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** [HotSiteRoute](../interfaces/hotsiteroute.md)

___

### getRouteKeyFromName

▸ **getRouteKeyFromName**(`name`: string): string

*Defined in [HotPreprocessor.ts:1262](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1262)*

Get a route's key from a route's name.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string

___

### getTestingMapUrls

▸ **getTestingMapUrls**(): string[]

*Defined in [HotPreprocessor.ts:1235](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1235)*

Get the list of urls for each map from the HotSite.

**Returns:** string[]

___

### getTestingMaps

▸ **getTestingMaps**(): string[]

*Defined in [HotPreprocessor.ts:1218](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1218)*

Get the list of maps for testing from the HotSite.

**Returns:** string[]

___

### loadHotFiles

▸ **loadHotFiles**(`files`: { [name:string]: { content?: string ; localFile?: string ; url?: string  };  }, `forceContentLoading?`: boolean): Promise<void\>

*Defined in [HotPreprocessor.ts:943](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L943)*

Load an array of files. If a file already has content, it will not be reloaded
unless forceContentLoading is set to true.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`files` | { [name:string]: { content?: string ; localFile?: string ; url?: string  };  } | - |
`forceContentLoading` | boolean | false |

**Returns:** Promise<void\>

___

### loadHotSite

▸ **loadHotSite**(`path`: string): Promise<void\>

*Defined in [HotPreprocessor.ts:756](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L756)*

Load from a HotSite.json file. Be sure to load and attach any testers before
loading a HotSite.

#### Parameters:

Name | Type |
------ | ------ |
`path` | string |

**Returns:** Promise<void\>

___

### process

▸ **process**(`pageName`: string, `args?`: any): Promise<string\>

*Defined in [HotPreprocessor.ts:1342](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1342)*

Process a page and get the result.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`pageName` | string | - |
`args` | any | null |

**Returns:** Promise<string\>

___

### registerComponent

▸ **registerComponent**(`component`: [HotComponent](hotcomponent.md)): void

*Defined in [HotPreprocessor.ts:583](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L583)*

Register a component for use as a HTML tag.

#### Parameters:

Name | Type |
------ | ------ |
`component` | [HotComponent](hotcomponent.md) |

**Returns:** void

___

### addHtml

▸ `Static`**addHtml**(`parent`: string \| HTMLElement, `html`: string \| HTMLElement): HTMLElement \| HTMLElement[]

*Defined in [HotPreprocessor.ts:652](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L652)*

Add a new HTML element(s) to the current document.

#### Parameters:

Name | Type |
------ | ------ |
`parent` | string \| HTMLElement |
`html` | string \| HTMLElement |

**Returns:** HTMLElement \| HTMLElement[]

___

### checkHotSiteName

▸ `Static`**checkHotSiteName**(`hotsiteName`: string, `throwException?`: boolean): boolean

*Defined in [HotPreprocessor.ts:689](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L689)*

Check if a HotSite's name is valid.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`hotsiteName` | string | - |
`throwException` | boolean | false |

**Returns:** boolean

___

### displayContent

▸ `Static`**displayContent**(`content`: string, `name`: string, `processor?`: [HotPreprocessor](hotpreprocessor.md)): Promise<[HotPreprocessor](hotpreprocessor.md)\>

*Defined in [HotPreprocessor.ts:1607](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1607)*

Process and replace the current HTML page with the hott script.
This is meant for web browser use only.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`content` | string | - |
`name` | string | - |
`processor` | [HotPreprocessor](hotpreprocessor.md) | null |

**Returns:** Promise<[HotPreprocessor](hotpreprocessor.md)\>

___

### displayUrl

▸ `Static`**displayUrl**(`url`: string \| [HotStartOptions](../interfaces/hotstartoptions.md), `name?`: string, `processor?`: [HotPreprocessor](hotpreprocessor.md), `args?`: any): Promise<[HotPreprocessor](hotpreprocessor.md)\>

*Defined in [HotPreprocessor.ts:1457](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1457)*

Process and replace the current HTML page with the hott script from the given url.
This is meant for web browser use only.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`url` | string \| [HotStartOptions](../interfaces/hotstartoptions.md) | - |
`name` | string | null |
`processor` | [HotPreprocessor](hotpreprocessor.md) | null |
`args` | any | null |

**Returns:** Promise<[HotPreprocessor](hotpreprocessor.md)\>

___

### getValueFromHotSiteObj

▸ `Static`**getValueFromHotSiteObj**(`hotsite`: [HotSite](../interfaces/hotsite.md), `params`: string[]): any

*Defined in [HotPreprocessor.ts:721](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L721)*

Get a value from a HotSite object.

#### Parameters:

Name | Type |
------ | ------ |
`hotsite` | [HotSite](../interfaces/hotsite.md) |
`params` | string[] |

**Returns:** any

___

### onReady

▸ `Static`**onReady**(`readyFunc`: () => void): void

*Defined in [HotPreprocessor.ts:1419](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1419)*

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

*Defined in [HotPreprocessor.ts:480](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L480)*

Parse a boolean value.

#### Parameters:

Name | Type |
------ | ------ |
`value` | string |

**Returns:** boolean

___

### processContent

▸ `Static`**processContent**(`processor`: [HotPreprocessor](hotpreprocessor.md), `content`: string, `name`: string, `args?`: any): Promise<string\>

*Defined in [HotPreprocessor.ts:1397](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1397)*

Process content and get the result.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`processor` | [HotPreprocessor](hotpreprocessor.md) | - |
`content` | string | - |
`name` | string | - |
`args` | any | null |

**Returns:** Promise<string\>

___

### processLocalFile

▸ `Static`**processLocalFile**(`localFilepath`: string, `name?`: string, `args?`: any): Promise<string\>

*Defined in [HotPreprocessor.ts:1353](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1353)*

Process a local file and get the result.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`localFilepath` | string | - |
`name` | string | localFilepath |
`args` | any | null |

**Returns:** Promise<string\>

___

### processUrl

▸ `Static`**processUrl**(`options`: [HotStartOptions](../interfaces/hotstartoptions.md)): Promise<string\>

*Defined in [HotPreprocessor.ts:1374](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1374)*

Process a url and get the result.

#### Parameters:

Name | Type |
------ | ------ |
`options` | [HotStartOptions](../interfaces/hotstartoptions.md) |

**Returns:** Promise<string\>

___

### replaceKey

▸ `Static`**replaceKey**(`str`: string, `key`: string, `value`: string): string

*Defined in [HotPreprocessor.ts:711](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L711)*

Replace a key in a ${KEY} with a value.

#### Parameters:

Name | Type |
------ | ------ |
`str` | string |
`key` | string |
`value` | string |

**Returns:** string

___

### useOutput

▸ `Static`**useOutput**(`output`: string): void

*Defined in [HotPreprocessor.ts:1431](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1431)*

Replace the current HTML page with the output.
This is meant for web browser use only.

#### Parameters:

Name | Type |
------ | ------ |
`output` | string |

**Returns:** void

___

### wait

▸ `Static`**wait**(`numMilliseconds`: number): Promise<void\>

*Defined in [HotPreprocessor.ts:517](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L517)*

Wait for a number of milliseconds.

#### Parameters:

Name | Type |
------ | ------ |
`numMilliseconds` | number |

**Returns:** Promise<void\>

___

### waitForTesters

▸ `Static`**waitForTesters**(): Promise<void\>

*Defined in [HotPreprocessor.ts:1444](https://github.com/OurFreeLight/HotPreprocessor/blob/a28393c/src/HotPreprocessor.ts#L1444)*

Wait for testers to load.

**`fixme`** This does not wait for ALL testers to finish loading. Only
the first one.

**Returns:** Promise<void\>
