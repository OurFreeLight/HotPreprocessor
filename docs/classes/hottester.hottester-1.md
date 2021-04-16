[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTester](../modules/hottester.md) / HotTester

# Class: HotTester

[HotTester](../modules/hottester.md).HotTester

Executes tests.

## Hierarchy

* **HotTester**

  ↳ [*HotTesterMocha*](hottestermocha.hottestermocha-1.md)

  ↳ [*HotTesterMochaSelenium*](hottestermochaselenium.hottestermochaselenium-1.md)

## Table of contents

### Constructors

- [constructor](hottester.hottester-1.md#constructor)

### Properties

- [baseUrl](hottester.hottester-1.md#baseurl)
- [driver](hottester.hottester-1.md#driver)
- [finishedLoading](hottester.hottester-1.md#finishedloading)
- [hasBeenDestroyed](hottester.hottester-1.md#hasbeendestroyed)
- [hasBeenSetup](hottester.hottester-1.md#hasbeensetup)
- [name](hottester.hottester-1.md#name)
- [processor](hottester.hottester-1.md#processor)
- [testMaps](hottester.hottester-1.md#testmaps)

### Methods

- [destroy](hottester.hottester-1.md#destroy)
- [execute](hottester.hottester-1.md#execute)
- [executeCommand](hottester.hottester-1.md#executecommand)
- [executeTestAPIPath](hottester.hottester-1.md#executetestapipath)
- [executeTestAPIPaths](hottester.hottester-1.md#executetestapipaths)
- [executeTestPagePath](hottester.hottester-1.md#executetestpagepath)
- [executeTestPagePaths](hottester.hottester-1.md#executetestpagepaths)
- [getTestPage](hottester.hottester-1.md#gettestpage)
- [getTestPath](hottester.hottester-1.md#gettestpath)
- [onCommand](hottester.hottester-1.md#oncommand)
- [onExecute](hottester.hottester-1.md#onexecute)
- [onFinishedLoading](hottester.hottester-1.md#onfinishedloading)
- [onTestAPIPathEnd](hottester.hottester-1.md#ontestapipathend)
- [onTestAPIPathStart](hottester.hottester-1.md#ontestapipathstart)
- [onTestEnd](hottester.hottester-1.md#ontestend)
- [onTestPagePathEnd](hottester.hottester-1.md#ontestpagepathend)
- [onTestPagePathStart](hottester.hottester-1.md#ontestpagepathstart)
- [onTestStart](hottester.hottester-1.md#onteststart)
- [setup](hottester.hottester-1.md#setup)
- [waitForData](hottester.hottester-1.md#waitfordata)
- [interpretDestination](hottester.hottester-1.md#interpretdestination)

## Constructors

### constructor

\+ **new HotTester**(`processor`: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md), `name`: *string*, `baseUrl`: *string*, `driver`: [*HotTestDriver*](hottestdriver.hottestdriver-1.md), `testMaps?`: { [name: string]: [*HotTestMap*](hottestmap.hottestmap-1.md);  }): [*HotTester*](hottester.hottester-1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`processor` | [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md) |
`name` | *string* |
`baseUrl` | *string* |
`driver` | [*HotTestDriver*](hottestdriver.hottestdriver-1.md) |
`testMaps` | *object* |

**Returns:** [*HotTester*](hottester.hottester-1.md)

Defined in: [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L98)

## Properties

### baseUrl

• **baseUrl**: *string*

The base url that will construct future urls.

Defined in: [HotTester.ts:74](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L74)

___

### driver

• **driver**: [*HotTestDriver*](hottestdriver.hottestdriver-1.md)

The driver to use when running tests.

Defined in: [HotTester.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L86)

___

### finishedLoading

• **finishedLoading**: *boolean*

Has this tester finished loading?

Defined in: [HotTester.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L90)

___

### hasBeenDestroyed

• **hasBeenDestroyed**: *boolean*

Has this tester finished setting up?

Defined in: [HotTester.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L98)

___

### hasBeenSetup

• **hasBeenSetup**: *boolean*

Has this tester finished setting up?

Defined in: [HotTester.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L94)

___

### name

• **name**: *string*

The tester name.

Defined in: [HotTester.ts:70](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L70)

___

### processor

• **processor**: [*HotPreprocessor*](hotpreprocessor.hotpreprocessor-1.md)

The associated processor.

Defined in: [HotTester.ts:78](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L78)

___

### testMaps

• **testMaps**: *object*

The test maps to test.

#### Type declaration:

Defined in: [HotTester.ts:82](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L82)

## Methods

### destroy

▸ `Abstract`**destroy**(): *Promise*<void\>

Executed when destroying up the tester.

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:120](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L120)

___

### execute

▸ **execute**(`mapName`: *string*): *Promise*<void\>

Execute the tests.

#### Parameters:

Name | Type |
:------ | :------ |
`mapName` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:555](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L555)

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

Defined in: [HotTester.ts:381](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L381)

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

Defined in: [HotTester.ts:256](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L256)

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

Defined in: [HotTester.ts:294](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L294)

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

Defined in: [HotTester.ts:329](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L329)

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

Defined in: [HotTester.ts:509](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L509)

___

### getTestPage

▸ **getTestPage**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md)): [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)

Get a test page.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |

**Returns:** [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)

Defined in: [HotTester.ts:181](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L181)

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

Defined in: [HotTester.ts:191](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L191)

___

### onCommand

▸ `Optional`**onCommand**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `page`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md), `stop`: [*HotTestStop*](../interfaces/hottester.hotteststop.md), `cmd`: *string*, `args`: *string*[], `cmdFunc`: (`cmdArgs`: *string*[]) => *Promise*<void\>): *Promise*<void\>

Executed when a command is executed.

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

Defined in: [HotTester.ts:153](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L153)

___

### onExecute

▸ `Optional`**onExecute**(): *Promise*<void\>

Executed when this tester has been executed from the API.

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:163](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L163)

___

### onFinishedLoading

▸ `Optional`**onFinishedLoading**(): *Promise*<void\>

Executed when this tester has finished loading all data from the API.

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:167](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L167)

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

Defined in: [HotTester.ts:137](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L137)

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

Defined in: [HotTester.ts:132](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L132)

___

### onTestEnd

▸ `Optional`**onTestEnd**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md)): *Promise*<void\>

Executed when tests are finished.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:158](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L158)

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

Defined in: [HotTester.ts:148](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L148)

___

### onTestPagePathStart

▸ `Optional`**onTestPagePathStart**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `page`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md), `stop`: [*HotTestStop*](../interfaces/hottester.hotteststop.md), `continueWhenTestIsComplete?`: *boolean*): *Promise*<boolean\>

Executed when page tests are started. If this returns false, the testPath will not be
immediately executed afterwards.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`page` | [*HotTestPage*](../interfaces/hottestmap.hottestpage.md) |
`stop` | [*HotTestStop*](../interfaces/hottester.hotteststop.md) |
`continueWhenTestIsComplete?` | *boolean* |

**Returns:** *Promise*<boolean\>

Defined in: [HotTester.ts:143](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L143)

___

### onTestStart

▸ `Optional`**onTestStart**(`destination`: [*HotDestination*](../interfaces/hottester.hotdestination.md), `url`: *string*, `destinationKey?`: *string*): *Promise*<boolean\>

Executed when tests are started. If this returns true, it will
continue and execute all test paths. If this returns it will
skip all test paths and execute onTestEnd instead.

#### Parameters:

Name | Type |
:------ | :------ |
`destination` | [*HotDestination*](../interfaces/hottester.hotdestination.md) |
`url` | *string* |
`destinationKey?` | *string* |

**Returns:** *Promise*<boolean\>

Defined in: [HotTester.ts:127](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L127)

___

### setup

▸ `Abstract`**setup**(`url`: *string*, `destinationKey?`: *string*): *Promise*<void\>

Executed when setting up the tester.

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`destinationKey?` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L116)

___

### waitForData

▸ **waitForData**(): *Promise*<void\>

Waits for the API to finish loading all data.

**Returns:** *Promise*<void\>

Defined in: [HotTester.ts:172](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L172)

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

Defined in: [HotTester.ts:201](https://github.com/OurFreeLight/HotPreprocessor/blob/2227d35/src/HotTester.ts#L201)
