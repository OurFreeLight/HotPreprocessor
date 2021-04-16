[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTesterMocha](../modules/hottestermocha.md) / HotTesterMocha

# Class: HotTesterMocha

[HotTesterMocha](../modules/hottestermocha.md).HotTesterMocha

The tester that uses Mocha to executes all tests.

## Hierarchy

* [*HotTester*](hottester.hottester-1.md)

  ↳ **HotTesterMocha**

## Table of contents

### Constructors

- [constructor](hottestermocha.hottestermocha-1.md#constructor)

### Properties

- [afterAll](hottestermocha.hottestermocha-1.md#afterall)
- [baseUrl](hottestermocha.hottestermocha-1.md#baseurl)
- [beforeAll](hottestermocha.hottestermocha-1.md#beforeall)
- [driver](hottestermocha.hottestermocha-1.md#driver)
- [finishedLoading](hottestermocha.hottestermocha-1.md#finishedloading)
- [hasBeenDestroyed](hottestermocha.hottestermocha-1.md#hasbeendestroyed)
- [hasBeenSetup](hottestermocha.hottestermocha-1.md#hasbeensetup)
- [mocha](hottestermocha.hottestermocha-1.md#mocha)
- [name](hottestermocha.hottestermocha-1.md#name)
- [processor](hottestermocha.hottestermocha-1.md#processor)
- [suite](hottestermocha.hottestermocha-1.md#suite)
- [testMaps](hottestermocha.hottestermocha-1.md#testmaps)
- [timeout](hottestermocha.hottestermocha-1.md#timeout)

### Methods

- [destroy](hottestermocha.hottestermocha-1.md#destroy)
- [execute](hottestermocha.hottestermocha-1.md#execute)
- [executeCommand](hottestermocha.hottestermocha-1.md#executecommand)
- [executeTestAPIPath](hottestermocha.hottestermocha-1.md#executetestapipath)
- [executeTestAPIPaths](hottestermocha.hottestermocha-1.md#executetestapipaths)
- [executeTestPagePath](hottestermocha.hottestermocha-1.md#executetestpagepath)
- [executeTestPagePaths](hottestermocha.hottestermocha-1.md#executetestpagepaths)
- [getTestPage](hottestermocha.hottestermocha-1.md#gettestpage)
- [getTestPath](hottestermocha.hottestermocha-1.md#gettestpath)
- [onCommand](hottestermocha.hottestermocha-1.md#oncommand)
- [onExecute](hottestermocha.hottestermocha-1.md#onexecute)
- [onFinishedLoading](hottestermocha.hottestermocha-1.md#onfinishedloading)
- [onTestAPIPathEnd](hottestermocha.hottestermocha-1.md#ontestapipathend)
- [onTestAPIPathStart](hottestermocha.hottestermocha-1.md#ontestapipathstart)
- [onTestEnd](hottestermocha.hottestermocha-1.md#ontestend)
- [onTestPagePathEnd](hottestermocha.hottestermocha-1.md#ontestpagepathend)
- [onTestPagePathStart](hottestermocha.hottestermocha-1.md#ontestpagepathstart)
- [onTestStart](hottestermocha.hottestermocha-1.md#onteststart)
- [setup](hottestermocha.hottestermocha-1.md#setup)
- [waitForData](hottestermocha.hottestermocha-1.md#waitfordata)
- [interpretDestination](hottestermocha.hottestermocha-1.md#interpretdestination)

## Constructors

### constructor

\+ **new HotTesterMocha**(`processor`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `name`: *string*, `baseUrl`: *string*, `driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md), `testMaps?`: { [name: string]: [*HotTestMap*](hottestmap.hottestmap-1.md);  }, `beforeAll?`: () => *Promise*<void\>, `afterAll?`: () => *Promise*<void\>): [*HotTesterMocha*](hottestermocha.hottestermocha-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) | - |
`name` | *string* | - |
`baseUrl` | *string* | - |
`driver` | [*HotTestDriver*](hottestdriver.hottestdriver-1.md) | - |
`testMaps` | *object* | - |
`beforeAll` | () => *Promise*<void\> | null |
`afterAll` | () => *Promise*<void\> | null |

**Returns:** [*HotTesterMocha*](hottestermocha.hottestermocha-1.md)

Inherited from: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMocha.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L33)

## Properties

### afterAll

• **afterAll**: () => *Promise*<void\>

The Mocha afterAll event to call before any tests are executed.

#### Type declaration:

▸ (): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [HotTesterMocha.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L33)

Defined in: [HotTesterMocha.ts:33](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L33)

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

Defined in: [HotTesterMocha.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L29)

Defined in: [HotTesterMocha.ts:29](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L29)

___

### driver

• **driver**: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)

The driver to use when running tests.

Inherited from: [HotTester](hottester.hottester-1.md).[driver](hottester.hottester-1.md#driver)

Defined in: [HotTester.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L86)

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

Defined in: [HotTesterMocha.ts:17](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L17)

___

### name

• **name**: *string*

The tester name.

Inherited from: [HotTester](hottester.hottester-1.md).[name](hottester.hottester-1.md#name)

Defined in: [HotTester.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTester.ts#L70)

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

Defined in: [HotTesterMocha.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L25)

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

Defined in: [HotTesterMocha.ts:21](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L21)

## Methods

### destroy

▸ **destroy**(): *Promise*<void\>

Executed when destroying up the tester.

**Returns:** *Promise*<void\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMocha.ts:58](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L58)

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

Defined in: [HotTesterMocha.ts:111](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L111)

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

Defined in: [HotTesterMocha.ts:120](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L120)

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

Defined in: [HotTesterMocha.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L82)

___

### onTestStart

▸ **onTestStart**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `destinationKey?`: *string*): *Promise*<boolean\>

Executed when tests are started.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) | - |
`destinationKey` | *string* | "" |

**Returns:** *Promise*<boolean\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMocha.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L65)

___

### setup

▸ **setup**(): *Promise*<void\>

Executed when setting up the tester.

**Returns:** *Promise*<void\>

Overrides: [HotTester](hottester.hottester-1.md)

Defined in: [HotTesterMocha.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/75bbcd5/src/HotTesterMocha.ts#L51)

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
