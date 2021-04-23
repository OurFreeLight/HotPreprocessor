[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotPreprocessor](../modules/hotpreprocessor.md) / HotPreprocessor

# Class: HotPreprocessor

[HotPreprocessor](../modules/hotpreprocessor.md).HotPreprocessor

The main class that handles all HTML preprocessing, then outputs the
results.

## Implements

* [*IHotPreprocessor*](../interfaces/hotpreprocessor.ihotpreprocessor.md)

## Table of contents

### Constructors

- [constructor](hotpreprocessor.hotpreprocessor-1.md#constructor)

### Properties

- [api](hotpreprocessor.hotpreprocessor-1.md#api)
- [apiContent](hotpreprocessor.hotpreprocessor-1.md#apicontent)
- [components](hotpreprocessor.hotpreprocessor-1.md#components)
- [files](hotpreprocessor.hotpreprocessor-1.md#files)
- [hotSite](hotpreprocessor.hotpreprocessor-1.md#hotsite)
- [logger](hotpreprocessor.hotpreprocessor-1.md#logger)
- [mode](hotpreprocessor.hotpreprocessor-1.md#mode)
- [pageContent](hotpreprocessor.hotpreprocessor-1.md#pagecontent)
- [pages](hotpreprocessor.hotpreprocessor-1.md#pages)
- [publicSecrets](hotpreprocessor.hotpreprocessor-1.md#publicsecrets)
- [testerAPI](hotpreprocessor.hotpreprocessor-1.md#testerapi)
- [testerApiContent](hotpreprocessor.hotpreprocessor-1.md#testerapicontent)
- [testers](hotpreprocessor.hotpreprocessor-1.md#testers)
- [isReadyForTesting](hotpreprocessor.hotpreprocessor-1.md#isreadyfortesting)
- [isWeb](hotpreprocessor.hotpreprocessor-1.md#isweb)
- [onReadyForTesting](hotpreprocessor.hotpreprocessor-1.md#onreadyfortesting)

### Methods

- [addComponent](hotpreprocessor.hotpreprocessor-1.md#addcomponent)
- [addFile](hotpreprocessor.hotpreprocessor-1.md#addfile)
- [addPage](hotpreprocessor.hotpreprocessor-1.md#addpage)
- [addTester](hotpreprocessor.hotpreprocessor-1.md#addtester)
- [createExpressRoutes](hotpreprocessor.hotpreprocessor-1.md#createexpressroutes)
- [executeAllTests](hotpreprocessor.hotpreprocessor-1.md#executealltests)
- [executeTests](hotpreprocessor.hotpreprocessor-1.md#executetests)
- [generateContent](hotpreprocessor.hotpreprocessor-1.md#generatecontent)
- [getComponent](hotpreprocessor.hotpreprocessor-1.md#getcomponent)
- [getFile](hotpreprocessor.hotpreprocessor-1.md#getfile)
- [getPage](hotpreprocessor.hotpreprocessor-1.md#getpage)
- [getRouteFromName](hotpreprocessor.hotpreprocessor-1.md#getroutefromname)
- [getRouteKeyFromName](hotpreprocessor.hotpreprocessor-1.md#getroutekeyfromname)
- [getTestingMapUrls](hotpreprocessor.hotpreprocessor-1.md#gettestingmapurls)
- [getTestingMaps](hotpreprocessor.hotpreprocessor-1.md#gettestingmaps)
- [loadHotFiles](hotpreprocessor.hotpreprocessor-1.md#loadhotfiles)
- [loadHotSite](hotpreprocessor.hotpreprocessor-1.md#loadhotsite)
- [process](hotpreprocessor.hotpreprocessor-1.md#process)
- [registerComponent](hotpreprocessor.hotpreprocessor-1.md#registercomponent)
- [addHtml](hotpreprocessor.hotpreprocessor-1.md#addhtml)
- [checkHotSiteName](hotpreprocessor.hotpreprocessor-1.md#checkhotsitename)
- [displayContent](hotpreprocessor.hotpreprocessor-1.md#displaycontent)
- [displayUrl](hotpreprocessor.hotpreprocessor-1.md#displayurl)
- [getParam](hotpreprocessor.hotpreprocessor-1.md#getparam)
- [getValueFromHotSiteObj](hotpreprocessor.hotpreprocessor-1.md#getvaluefromhotsiteobj)
- [onReady](hotpreprocessor.hotpreprocessor-1.md#onready)
- [parseBoolean](hotpreprocessor.hotpreprocessor-1.md#parseboolean)
- [processContent](hotpreprocessor.hotpreprocessor-1.md#processcontent)
- [processLocalFile](hotpreprocessor.hotpreprocessor-1.md#processlocalfile)
- [processUrl](hotpreprocessor.hotpreprocessor-1.md#processurl)
- [replaceKey](hotpreprocessor.hotpreprocessor-1.md#replacekey)
- [useOutput](hotpreprocessor.hotpreprocessor-1.md#useoutput)
- [wait](hotpreprocessor.hotpreprocessor-1.md#wait)
- [waitForTesters](hotpreprocessor.hotpreprocessor-1.md#waitfortesters)

## Constructors

### constructor

\+ **new HotPreprocessor**(`copy?`: [*IHotPreprocessor*](../interfaces/hotpreprocessor.ihotpreprocessor.md)): [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`copy` | [*IHotPreprocessor*](../interfaces/hotpreprocessor.ihotpreprocessor.md) |

**Returns:** [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

Defined in: [HotPreprocessor.ts:397](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L397)

## Properties

### api

• **api**: [*HotAPI*](hotapi.hotapi-1.md)

The api that's used to communicate with.

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[api](../interfaces/hotpreprocessor.ihotpreprocessor.md#api)

Defined in: [HotPreprocessor.ts:353](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L353)

___

### apiContent

• **apiContent**: *string*

The api content to use when about to load HotPreprocessor.

Defined in: [HotPreprocessor.ts:377](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L377)

___

### components

• **components**: *object*

The components that can be constructed.

#### Type declaration:

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[components](../interfaces/hotpreprocessor.ihotpreprocessor.md#components)

Defined in: [HotPreprocessor.ts:365](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L365)

___

### files

• **files**: *object*

The files that can be stored for later use.

#### Type declaration:

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[files](../interfaces/hotpreprocessor.ihotpreprocessor.md#files)

Defined in: [HotPreprocessor.ts:369](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L369)

___

### hotSite

• **hotSite**: [*HotSite*](../interfaces/hotpreprocessor.hotsite.md)

The loaded hotsite.

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[hotSite](../interfaces/hotpreprocessor.ihotpreprocessor.md#hotsite)

Defined in: [HotPreprocessor.ts:373](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L373)

___

### logger

• **logger**: [*HotLog*](hotlog.hotlog-1.md)

The logger.

Defined in: [HotPreprocessor.ts:389](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L389)

___

### mode

• **mode**: [*DeveloperMode*](../enums/hot.developermode.md)

Indicates what type of execution this is.

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[mode](../interfaces/hotpreprocessor.ihotpreprocessor.md#mode)

Defined in: [HotPreprocessor.ts:349](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L349)

___

### pageContent

• **pageContent**: *string*

The page content to use when about to load HotPreprocessor.

Defined in: [HotPreprocessor.ts:385](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L385)

___

### pages

• **pages**: *object*

The pages that can be constructed.

#### Type declaration:

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[pages](../interfaces/hotpreprocessor.ihotpreprocessor.md#pages)

Defined in: [HotPreprocessor.ts:361](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L361)

___

### publicSecrets

• **publicSecrets**: *any*

The secrets that can be exposed publicly.

Defined in: [HotPreprocessor.ts:393](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L393)

___

### testerAPI

• **testerAPI**: [*HotAPI*](hotapi.hotapi-1.md)

The tester api that's used to communicate with.

Implementation of: [IHotPreprocessor](../interfaces/hotpreprocessor.ihotpreprocessor.md).[testerAPI](../interfaces/hotpreprocessor.ihotpreprocessor.md#testerapi)

Defined in: [HotPreprocessor.ts:357](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L357)

___

### testerApiContent

• **testerApiContent**: *string*

The tester api content to use when about to load HotPreprocessor.

Defined in: [HotPreprocessor.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L381)

___

### testers

• **testers**: *object*

The secrets that can be exposed publicly.

#### Type declaration:

Defined in: [HotPreprocessor.ts:397](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L397)

___

### isReadyForTesting

▪ `Static` **isReadyForTesting**: *boolean*= false

Indicates if this is ready for testing.

Defined in: [HotPreprocessor.ts:341](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L341)

___

### isWeb

▪ `Static` **isWeb**: *boolean*= false

Indicates if this is a web build.

Defined in: [HotPreprocessor.ts:337](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L337)

___

### onReadyForTesting

▪ `Static` **onReadyForTesting**: () => *Promise*<void\>= null

Executes this event when this page is ready for testing.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:345](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L345)

Defined in: [HotPreprocessor.ts:345](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L345)

## Methods

### addComponent

▸ **addComponent**(`component`: [*HotComponent*](hotcomponent.hotcomponent-1.md)): *void*

Add and register a component.

#### Parameters:

Name | Type |
:------ | :------ |
`component` | [*HotComponent*](hotcomponent.hotcomponent-1.md) |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:613](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L613)

___

### addFile

▸ **addFile**(`file`: [*HotFile*](hotfile.hotfile-1.md)): *void*

Add a file.

#### Parameters:

Name | Type |
:------ | :------ |
`file` | [*HotFile*](hotfile.hotfile-1.md) |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:586](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L586)

___

### addPage

▸ **addPage**(`page`: [*HotPage*](hotpage.hotpage-1.md)): *void*

Add a page.

#### Parameters:

Name | Type |
:------ | :------ |
`page` | [*HotPage*](hotpage.hotpage-1.md) |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:570](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L570)

___

### addTester

▸ **addTester**(`tester`: [*HotTester*](hottester.hottester-1.md)): *void*

Add a tester for use later.

#### Parameters:

Name | Type |
:------ | :------ |
`tester` | [*HotTester*](hottester.hottester-1.md) |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:1282](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1282)

___

### createExpressRoutes

▸ **createExpressRoutes**(`expressApp`: *any*, `jsSrcPath?`: *string*): *void*

Create the Express routes from the given pages. Be sure to load the
pages first before doing this. This method is meant to be used for
customized Express applications. If you wish to use the loaded routes
from this HotPreprocessor object with HotHTTPServer, be sure to use
the loadHotSite method in HotHTTPServer.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`expressApp` | *any* | - |
`jsSrcPath` | *string* | "./js/HotPreprocessor.js" |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:1265](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1265)

___

### executeAllTests

▸ **executeAllTests**(`testerName`: *string*): *Promise*<void\>

Execute all tests from the HotSite testing object.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`testerName` | *string* | The tester to use to execute tests.   |

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:1395](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1395)

___

### executeTests

▸ **executeTests**(`testerName`: *string*, `mapName`: *string*): *Promise*<void\>

Execute tests.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`testerName` | *string* | The tester to use to execute tests.   |
`mapName` | *string* | The map or maps to use to navigate through tests.    |

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:1379](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1379)

___

### generateContent

▸ **generateContent**(`routeKey`: *string*, `name?`: *string*, `url?`: *string*, `jsSrcPath?`: *string*, `passArgs?`: *boolean*, `args?`: *any*): *string*

Generate the content to send to a client.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`routeKey` | *string* | - |
`name` | *string* | "" |
`url` | *string* | "./" |
`jsSrcPath` | *string* | "./js/HotPreprocessor.js" |
`passArgs` | *boolean* | true |
`args` | *any* | null |

**Returns:** *string*

Defined in: [HotPreprocessor.ts:1036](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1036)

___

### getComponent

▸ **getComponent**(`name`: *string*): [*HotComponent*](hotcomponent.hotcomponent-1.md)

Get a component to process.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*HotComponent*](hotcomponent.hotcomponent-1.md)

Defined in: [HotPreprocessor.ts:683](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L683)

___

### getFile

▸ **getFile**(`name`: *string*): [*HotFile*](hotfile.hotfile-1.md)

Get a file.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*HotFile*](hotfile.hotfile-1.md)

Defined in: [HotPreprocessor.ts:602](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L602)

___

### getPage

▸ **getPage**(`pageName`: *string*): [*HotPage*](hotpage.hotpage-1.md)

Get a page to process.

#### Parameters:

Name | Type |
:------ | :------ |
`pageName` | *string* |

**Returns:** [*HotPage*](hotpage.hotpage-1.md)

Defined in: [HotPreprocessor.ts:578](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L578)

___

### getRouteFromName

▸ **getRouteFromName**(`name`: *string*): [*HotSiteRoute*](../interfaces/hotpreprocessor.hotsiteroute.md)

Get a route from a route's name.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** [*HotSiteRoute*](../interfaces/hotpreprocessor.hotsiteroute.md)

Defined in: [HotPreprocessor.ts:1362](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1362)

___

### getRouteKeyFromName

▸ **getRouteKeyFromName**(`name`: *string*): *string*

Get a route's key from a route's name.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *string*

Defined in: [HotPreprocessor.ts:1334](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1334)

___

### getTestingMapUrls

▸ **getTestingMapUrls**(): *string*[]

Get the list of urls for each map from the HotSite.

**Returns:** *string*[]

Defined in: [HotPreprocessor.ts:1307](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1307)

___

### getTestingMaps

▸ **getTestingMaps**(): *string*[]

Get the list of maps for testing from the HotSite.

**Returns:** *string*[]

Defined in: [HotPreprocessor.ts:1290](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1290)

___

### loadHotFiles

▸ **loadHotFiles**(`files`: { [name: string]: { `content?`: *string* ; `localFile?`: *string* ; `url?`: *string*  };  }, `forceContentLoading?`: *boolean*): *Promise*<void\>

Load an array of files. If a file already has content, it will not be reloaded
unless forceContentLoading is set to true.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`files` | *object* | - |
`forceContentLoading` | *boolean* | false |

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:985](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L985)

___

### loadHotSite

▸ **loadHotSite**(`path`: *string*): *Promise*<void\>

Load from a HotSite.json file. Be sure to load and attach any testers before
loading a HotSite.

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:795](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L795)

___

### process

▸ **process**(`pageName`: *string*, `args?`: *any*): *Promise*<string\>

Process a page and get the result.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`pageName` | *string* | - |
`args` | *any* | null |

**Returns:** *Promise*<string\>

Defined in: [HotPreprocessor.ts:1414](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1414)

___

### registerComponent

▸ **registerComponent**(`component`: [*HotComponent*](hotcomponent.hotcomponent-1.md)): *void*

Register a component for use as a HTML tag.

#### Parameters:

Name | Type |
:------ | :------ |
`component` | [*HotComponent*](hotcomponent.hotcomponent-1.md) |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:622](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L622)

___

### addHtml

▸ `Static`**addHtml**(`parent`: *string* \| HTMLElement, `html`: *string* \| HTMLElement): HTMLElement \| HTMLElement[]

Add a new HTML element(s) to the current document.

#### Parameters:

Name | Type |
:------ | :------ |
`parent` | *string* \| HTMLElement |
`html` | *string* \| HTMLElement |

**Returns:** HTMLElement \| HTMLElement[]

Defined in: [HotPreprocessor.ts:691](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L691)

___

### checkHotSiteName

▸ `Static`**checkHotSiteName**(`hotsiteName`: *string*, `throwException?`: *boolean*): *boolean*

Check if a HotSite's name is valid.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`hotsiteName` | *string* | - |
`throwException` | *boolean* | false |

**Returns:** *boolean*

Defined in: [HotPreprocessor.ts:728](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L728)

___

### displayContent

▸ `Static`**displayContent**(`content`: *string*, `name`: *string*, `processor?`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)): *Promise*<[*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)\>

Process and replace the current HTML page with the hott script.
This is meant for web browser use only.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`content` | *string* | - |
`name` | *string* | - |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | null |

**Returns:** *Promise*<[*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)\>

Defined in: [HotPreprocessor.ts:1679](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1679)

___

### displayUrl

▸ `Static`**displayUrl**(`url`: *string* \| [*HotStartOptions*](../interfaces/hotpreprocessor.hotstartoptions.md), `name?`: *string*, `processor?`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `args?`: *any*): *Promise*<[*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)\>

Process and replace the current HTML page with the hott script from the given url.
This is meant for web browser use only.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`url` | *string* \| [*HotStartOptions*](../interfaces/hotpreprocessor.hotstartoptions.md) | - |
`name` | *string* | null |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | null |
`args` | *any* | null |

**Returns:** *Promise*<[*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)\>

Defined in: [HotPreprocessor.ts:1529](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1529)

___

### getParam

▸ `Static`**getParam**(`name`: *string*, `objWithParam`: *any*, `required?`: *boolean*, `throwException?`: *boolean*): *any*

Check if a required parameter exists inside an object. If it exists, return the value.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`name` | *string* | - |
`objWithParam` | *any* | - |
`required` | *boolean* | true |
`throwException` | *boolean* | true |

**Returns:** *any*

Defined in: [HotPreprocessor.ts:525](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L525)

___

### getValueFromHotSiteObj

▸ `Static`**getValueFromHotSiteObj**(`hotsite`: [*HotSite*](../interfaces/hotpreprocessor.hotsite.md), `params`: *string*[]): *any*

Get a value from a HotSite object.

#### Parameters:

Name | Type |
:------ | :------ |
`hotsite` | [*HotSite*](../interfaces/hotpreprocessor.hotsite.md) |
`params` | *string*[] |

**Returns:** *any*

Defined in: [HotPreprocessor.ts:760](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L760)

___

### onReady

▸ `Static`**onReady**(`readyFunc`: () => *void*): *void*

When the window has finished loading, execute the function.
This is meant for web browser use only.

#### Parameters:

Name | Type |
:------ | :------ |
`readyFunc` | () => *void* |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:1491](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1491)

___

### parseBoolean

▸ `Static`**parseBoolean**(`value`: *string*): *boolean*

Parse a boolean value.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *string* |

**Returns:** *boolean*

Defined in: [HotPreprocessor.ts:488](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L488)

___

### processContent

▸ `Static`**processContent**(`processor`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `content`: *string*, `name`: *string*, `args?`: *any*): *Promise*<string\>

Process content and get the result.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | - |
`content` | *string* | - |
`name` | *string* | - |
`args` | *any* | null |

**Returns:** *Promise*<string\>

Defined in: [HotPreprocessor.ts:1469](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1469)

___

### processLocalFile

▸ `Static`**processLocalFile**(`localFilepath`: *string*, `name?`: *string*, `args?`: *any*): *Promise*<string\>

Process a local file and get the result.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`localFilepath` | *string* | - |
`name` | *string* | - |
`args` | *any* | null |

**Returns:** *Promise*<string\>

Defined in: [HotPreprocessor.ts:1425](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1425)

___

### processUrl

▸ `Static`**processUrl**(`options`: [*HotStartOptions*](../interfaces/hotpreprocessor.hotstartoptions.md)): *Promise*<string\>

Process a url and get the result.

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*HotStartOptions*](../interfaces/hotpreprocessor.hotstartoptions.md) |

**Returns:** *Promise*<string\>

Defined in: [HotPreprocessor.ts:1446](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1446)

___

### replaceKey

▸ `Static`**replaceKey**(`str`: *string*, `key`: *string*, `value`: *string*): *string*

Replace a key in a ${KEY} with a value.

#### Parameters:

Name | Type |
:------ | :------ |
`str` | *string* |
`key` | *string* |
`value` | *string* |

**Returns:** *string*

Defined in: [HotPreprocessor.ts:750](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L750)

___

### useOutput

▸ `Static`**useOutput**(`output`: *string*): *void*

Replace the current HTML page with the output.
This is meant for web browser use only.

#### Parameters:

Name | Type |
:------ | :------ |
`output` | *string* |

**Returns:** *void*

Defined in: [HotPreprocessor.ts:1503](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1503)

___

### wait

▸ `Static`**wait**(`numMilliseconds`: *number*): *Promise*<void\>

Wait for a number of milliseconds.

#### Parameters:

Name | Type |
:------ | :------ |
`numMilliseconds` | *number* |

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:556](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L556)

___

### waitForTesters

▸ `Static`**waitForTesters**(): *Promise*<void\>

Wait for testers to load.

**`fixme`** This does not wait for ALL testers to finish loading. Only
the first one.

**Returns:** *Promise*<void\>

Defined in: [HotPreprocessor.ts:1516](https://github.com/OurFreeLight/HotPreprocessor/blob/5a339e8/src/HotPreprocessor.ts#L1516)
