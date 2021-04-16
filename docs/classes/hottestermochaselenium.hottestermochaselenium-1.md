[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTesterMochaSelenium](../modules/hottestermochaselenium.md) / HotTesterMochaSelenium

# Class: HotTesterMochaSelenium

[HotTesterMochaSelenium](../modules/hottestermochaselenium.md).HotTesterMochaSelenium

The tester that uses Mocha to executes all tests.

## Hierarchy

* [*HotTester*](hottester.hottester-1.md)

  ↳ **HotTesterMochaSelenium**

## Table of contents

### Constructors

- [constructor](hottestermochaselenium.hottestermochaselenium-1.md#constructor)

### Properties

- [afterAll](hottestermochaselenium.hottestermochaselenium-1.md#afterall)
- [baseUrl](hottestermochaselenium.hottestermochaselenium-1.md#baseurl)
- [beforeAll](hottestermochaselenium.hottestermochaselenium-1.md#beforeall)
- [driver](hottestermochaselenium.hottestermochaselenium-1.md#driver)
- [finishedLoading](hottestermochaselenium.hottestermochaselenium-1.md#finishedloading)
- [hasBeenDestroyed](hottestermochaselenium.hottestermochaselenium-1.md#hasbeendestroyed)
- [hasBeenSetup](hottestermochaselenium.hottestermochaselenium-1.md#hasbeensetup)
- [mocha](hottestermochaselenium.hottestermochaselenium-1.md#mocha)
- [name](hottestermochaselenium.hottestermochaselenium-1.md#name)
- [onSetup](hottestermochaselenium.hottestermochaselenium-1.md#onsetup)
- [processor](hottestermochaselenium.hottestermochaselenium-1.md#processor)
- [suite](hottestermochaselenium.hottestermochaselenium-1.md#suite)
- [testMaps](hottestermochaselenium.hottestermochaselenium-1.md#testmaps)
- [timeout](hottestermochaselenium.hottestermochaselenium-1.md#timeout)
- [waitForTesterData](hottestermochaselenium.hottestermochaselenium-1.md#waitfortesterdata)

### Methods

- [destroy](hottestermochaselenium.hottestermochaselenium-1.md#destroy)
- [execute](hottestermochaselenium.hottestermochaselenium-1.md#execute)
- [executeCommand](hottestermochaselenium.hottestermochaselenium-1.md#executecommand)
- [executeTestAPIPath](hottestermochaselenium.hottestermochaselenium-1.md#executetestapipath)
- [executeTestAPIPaths](hottestermochaselenium.hottestermochaselenium-1.md#executetestapipaths)
- [executeTestPagePath](hottestermochaselenium.hottestermochaselenium-1.md#executetestpagepath)
- [executeTestPagePaths](hottestermochaselenium.hottestermochaselenium-1.md#executetestpagepaths)
- [getTestPage](hottestermochaselenium.hottestermochaselenium-1.md#gettestpage)
- [getTestPath](hottestermochaselenium.hottestermochaselenium-1.md#gettestpath)
- [onCommand](hottestermochaselenium.hottestermochaselenium-1.md#oncommand)
- [onExecute](hottestermochaselenium.hottestermochaselenium-1.md#onexecute)
- [onFinishedLoading](hottestermochaselenium.hottestermochaselenium-1.md#onfinishedloading)
- [onTestAPIPathEnd](hottestermochaselenium.hottestermochaselenium-1.md#ontestapipathend)
- [onTestAPIPathStart](hottestermochaselenium.hottestermochaselenium-1.md#ontestapipathstart)
- [onTestEnd](hottestermochaselenium.hottestermochaselenium-1.md#ontestend)
- [onTestPagePathEnd](hottestermochaselenium.hottestermochaselenium-1.md#ontestpagepathend)
- [onTestPagePathStart](hottestermochaselenium.hottestermochaselenium-1.md#ontestpagepathstart)
- [onTestStart](hottestermochaselenium.hottestermochaselenium-1.md#onteststart)
- [setup](hottestermochaselenium.hottestermochaselenium-1.md#setup)
- [waitForData](hottestermochaselenium.hottestermochaselenium-1.md#waitfordata)
- [interpretDestination](hottestermochaselenium.hottestermochaselenium-1.md#interpretdestination)

## Constructors

### constructor

\+ **new HotTesterMochaSelenium**(`processor`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `name`: *string*, `baseUrl`: *string*, `testMaps?`: { [name: string]: [*HotTestMap*](hottestmap.hottestmap-1.md);  }, `onSetup?`: (`driver`: *WebDriver*) => *Promise*<boolean\>, `beforeAll?`: () => *Promise*<void\>, `afterAll?`: () => *Promise*<void\>): [*HotTesterMochaSelenium*](hottestermochaselenium.hottestermochaselenium-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | - |
`name` | *string* | - |
`baseUrl` | *string* | - |
`testMaps` | *object* | - |
`onSetup` | (`driver`: *WebDriver*) => *Promise*<boolean\> | null |
`beforeAll` | () => *Promise*<void\> | null |
`afterAll` | () => *Promise*<void\> | null |

**Returns:** [*HotTesterMochaSelenium*](hottestermochaselenium.hottestermochaselenium-1.md)

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L50)

## Properties

### afterAll

• **afterAll**: () => *Promise*<void\>

The Mocha afterAll event to call before any tests are executed.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotTesterMochaSelenium.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L39)

Defined in: [HotTesterMochaSelenium.ts:39](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L39)

___

### baseUrl

• **baseUrl**: *string*

The base url that will construct future urls.

Inherited from: [HotTester](hottester.hottester-1.md).[baseUrl](hottester.hottester-1.md#baseurl)

Defined in: [HotTester.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L74)

___

### beforeAll

• **beforeAll**: () => *Promise*<void\>

The Mocha beforeAll event to call before any tests are executed.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotTesterMochaSelenium.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L35)

Defined in: [HotTesterMochaSelenium.ts:35](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L35)

___

### driver

• **driver**: [*HotTestSeleniumDriver*](hottestseleniumdriver.hottestseleniumdriver-1.md)

The driver to use when running tests.

Overrides: [HotTester](hottester.hottester-1.md).[driver](hottester.hottester-1.md#driver)

Defined in: [HotTesterMochaSelenium.ts:19](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L19)

___

### finishedLoading

• **finishedLoading**: *boolean*

Has this tester finished loading?

Inherited from: [HotTester](hottester.hottester-1.md).[finishedLoading](hottester.hottester-1.md#finishedloading)

Defined in: [HotTester.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L90)

___

### hasBeenDestroyed

• **hasBeenDestroyed**: *boolean*

Has this tester finished setting up?

Inherited from: [HotTester](hottester.hottester-1.md).[hasBeenDestroyed](hottester.hottester-1.md#hasbeendestroyed)

Defined in: [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L98)

___

### hasBeenSetup

• **hasBeenSetup**: *boolean*

Has this tester finished setting up?

Inherited from: [HotTester](hottester.hottester-1.md).[hasBeenSetup](hottester.hottester-1.md#hasbeensetup)

Defined in: [HotTester.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L94)

___

### mocha

• **mocha**: *Mocha*

The mocha instance to run.

Defined in: [HotTesterMochaSelenium.ts:23](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L23)

___

### name

• **name**: *string*

The tester name.

Inherited from: [HotTester](hottester.hottester-1.md).[name](hottester.hottester-1.md#name)

Defined in: [HotTester.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L70)

___

### onSetup

• **onSetup**: (`driver`: *WebDriver*, `url`: *string*) => *Promise*<boolean\>

This event is executed after the Selenium driver and url have
been loaded. If this returns true, Selenium will load the url.

#### Type declaration:

▸ (`driver`: *WebDriver*, `url`: *string*): *Promise*<boolean\>

#### Parameters:

Name | Type |
:------ | :------ |
`driver` | *WebDriver* |
`url` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [HotTesterMochaSelenium.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L44)

Defined in: [HotTesterMochaSelenium.ts:44](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L44)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The associated processor.

Inherited from: [HotTester](hottester.hottester-1.md).[processor](hottester.hottester-1.md#processor)

Defined in: [HotTester.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L78)

___

### suite

• **suite**: *Suite*

The suite to execute.

Defined in: [HotTesterMochaSelenium.ts:31](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L31)

___

### testMaps

• **testMaps**: *object*

The test maps to test.

#### Type declaration:

Inherited from: [HotTester](hottester.hottester-1.md).[testMaps](hottester.hottester-1.md#testmaps)

Defined in: [HotTester.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L82)

___

### timeout

• **timeout**: *number*

The timeout for each test.

Defined in: [HotTesterMochaSelenium.ts:27](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L27)

___

### waitForTesterData

• **waitForTesterData**: *boolean*

If set to true, this will wait for the tester API data. If
onSetup is used, it will have to return true in order to
wait for the tester data.

Defined in: [HotTesterMochaSelenium.ts:50](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L50)

## Methods

### destroy

▸ **destroy**(): *Promise*<void\>

Executed when destroying this tester.

**Returns:** *Promise*<void\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:108](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L108)

___

### execute

▸ **execute**(`mapName`: *string*): *Promise*<void\>

Execute the tests.

#### Parameters:

Name | Type |
:------ | :------ |
`mapName` | *string* |

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:555](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L555)

___

### executeCommand

▸ **executeCommand**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `page`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md), `stop`: [*HotTestStop*](../interfaces/hottester.hotteststop.md), `cmd`: *string*): *Promise*<void\>

Execute a command.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`page` | [*HotTestPage*](../interfaces/hottestmap.hottestpage.md) |
`stop` | [*HotTestStop*](../interfaces/hottester.hotteststop.md) |
`cmd` | *string* |

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L381)

___

### executeTestAPIPath

▸ **executeTestAPIPath**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `method`: [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md), `testName`: *string*, `skipEventCalls?`: *boolean*, `continueWhenTestIsComplete?`: *boolean*): *Promise*<any\>

Execute an API's test path.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) | - |
`method` | [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md) | - |
`testName` | *string* | - |
`skipEventCalls` | *boolean* | false |
`continueWhenTestIsComplete` | *boolean* | false |

**Returns:** *Promise*<any\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L256)

___

### executeTestAPIPaths

▸ **executeTestAPIPaths**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md)): *Promise*<any[]\>

Execute all test paths in an API route.

**`fixme`** This needs a better implementation...

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |

**Returns:** *Promise*<any[]\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:294](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L294)

___

### executeTestPagePath

▸ **executeTestPagePath**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `stop`: [*HotTestStop*](../interfaces/hottester.hotteststop.md), `skipEventCalls?`: *boolean*, `continueWhenTestIsComplete?`: *boolean*): *Promise*<any\>

Execute a test page path.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) | - |
`stop` | [*HotTestStop*](../interfaces/hottester.hotteststop.md) | - |
`skipEventCalls` | *boolean* | false |
`continueWhenTestIsComplete` | *boolean* | false |

**Returns:** *Promise*<any\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:329](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L329)

___

### executeTestPagePaths

▸ **executeTestPagePaths**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `continueWhenTestIsComplete?`: *boolean*): *Promise*<any[]\>

Execute all test paths in a page.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) | - |
`continueWhenTestIsComplete` | *boolean* | false |

**Returns:** *Promise*<any[]\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L509)

___

### getTestPage

▸ **getTestPage**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md)): [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)

Get a test page.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |

**Returns:** [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:181](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L181)

___

### getTestPath

▸ **getTestPath**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `pathName`: *string*): [*HotTestPath*](../modules/hottestmap.md#hottestpath)

Get a test path.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`pathName` | *string* |

**Returns:** [*HotTestPath*](../modules/hottestmap.md#hottestpath)

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:191](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L191)

___

### onCommand

▸ **onCommand**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `page`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md), `stop`: [*HotTestStop*](../interfaces/hottester.hotteststop.md), `cmd`: *string*, `args`: *string*[], `cmdFunc`: (`cmdArgs`: *string*[]) => *Promise*<void\>): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`page` | [*HotTestPage*](../interfaces/hottestmap.hottestpage.md) |
`stop` | [*HotTestStop*](../interfaces/hottester.hotteststop.md) |
`cmd` | *string* |
`args` | *string*[] |
`cmdFunc` | (`cmdArgs`: *string*[]) => *Promise*<void\> |

**Returns:** *Promise*<void\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L163)

___

### onExecute

▸ `Optional`**onExecute**(): *Promise*<void\>

Executed when this tester has been executed from the API.

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L163)

___

### onFinishedLoading

▸ `Optional`**onFinishedLoading**(): *Promise*<void\>

Executed when this tester has finished loading all data from the API.

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L167)

___

### onTestAPIPathEnd

▸ `Optional`**onTestAPIPathEnd**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `method`: [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md), `testName`: *string*, `result`: *any*, `continueWhenTestIsComplete?`: *boolean*): *Promise*<void\>

Executed when an API test path has ended.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`method` | [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md) |
`testName` | *string* |
`result` | *any* |
`continueWhenTestIsComplete?` | *boolean* |

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:137](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L137)

___

### onTestAPIPathStart

▸ `Optional`**onTestAPIPathStart**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `method`: [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md), `testName`: *string*, `continueWhenTestIsComplete?`: *boolean*): *Promise*<boolean\>

Executed when an API test path has started. If this returns false,
the testPath will not be immediately executed afterwards.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`method` | [*HotRouteMethod*](hotroutemethod.hotroutemethod-1.md) |
`testName` | *string* |
`continueWhenTestIsComplete?` | *boolean* |

**Returns:** *Promise*<boolean\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:132](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L132)

___

### onTestEnd

▸ **onTestEnd**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md)): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |

**Returns:** *Promise*<void\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L172)

___

### onTestPagePathEnd

▸ `Optional`**onTestPagePathEnd**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `testPath`: [*HotTestPath*](../modules/hottestmap.md#hottestpath), `result`: *any*, `continueWhenTestIsComplete?`: *boolean*): *Promise*<void\>

Executed when a page test has ended.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`testPath` | [*HotTestPath*](../modules/hottestmap.md#hottestpath) |
`result` | *any* |
`continueWhenTestIsComplete?` | *boolean* |

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:148](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L148)

___

### onTestPagePathStart

▸ **onTestPagePathStart**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `page`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md), `stop`: [*HotTestStop*](../interfaces/hottester.hotteststop.md), `continueWhenTestIsComplete?`: *boolean*): *Promise*<boolean\>

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) | - |
`page` | [*HotTestPage*](../interfaces/hottestmap.hottestpage.md) | - |
`stop` | [*HotTestStop*](../interfaces/hottester.hotteststop.md) | - |
`continueWhenTestIsComplete` | *boolean* | false |

**Returns:** *Promise*<boolean\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:134](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L134)

___

### onTestStart

▸ **onTestStart**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `url`: *string*, `destinationKey?`: *string*): *Promise*<boolean\>

Executed when tests are started.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) | - |
`url` | *string* | - |
`destinationKey` | *string* | "" |

**Returns:** *Promise*<boolean\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:117](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L117)

___

### setup

▸ **setup**(`url?`: *string*, `destinationKey?`: *string*): *Promise*<void\>

Setup the Mocha/Selenium frameworks.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`url` | *string* | "" | If this is set, this url will be used instead of the url associated with this tester.    |
`destinationKey` | *string* | "" | - |

**Returns:** *Promise*<void\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMochaSelenium.ts:77](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMochaSelenium.ts#L77)

___

### waitForData

▸ **waitForData**(): *Promise*<void\>

Waits for the API to finish loading all data.

**Returns:** *Promise*<void\>

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L172)

___

### interpretDestination

▸ `Static`**interpretDestination**(`mapName`: *string*, `testDest`: [*HotTestDestination*](hottestmap.hottestdestination.md)): [*HotDestination*](../interfaces/hottester.hotdestination.md)

Get a destination JSON object to use.

#### Parameters:

Name | Type |
:------ | :------ |
`mapName` | *string* |
`testDest` | [*HotTestDestination*](hottestmap.hottestdestination.md) |

**Returns:** [*HotDestination*](../interfaces/hottester.hotdestination.md)

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTester.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L201)
