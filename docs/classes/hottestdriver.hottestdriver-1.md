[hotpreprocessor](../README.md) / [Exports](../modules.md) / [HotTestDriver](../modules/hottestdriver.md) / HotTestDriver

# Class: HotTestDriver

[HotTestDriver](../modules/hottestdriver.md).HotTestDriver

This actually executes the tests.

## Hierarchy

* **HotTestDriver**

  ↳ [*HotTestSeleniumDriver*](hottestseleniumdriver.hottestseleniumdriver-1.md)

## Table of contents

### Constructors

- [constructor](hottestdriver.hottestdriver-1.md#constructor)

### Properties

- [page](hottestdriver.hottestdriver-1.md#page)

### Methods

- [assert](hottestdriver.hottestdriver-1.md#assert)
- [assertElementValue](hottestdriver.hottestdriver-1.md#assertelementvalue)
- [destroy](hottestdriver.hottestdriver-1.md#destroy)
- [findTestElement](hottestdriver.hottestdriver-1.md#findtestelement)
- [navigateToUrl](hottestdriver.hottestdriver-1.md#navigatetourl)
- [parseTestObject](hottestdriver.hottestdriver-1.md#parsetestobject)
- [print](hottestdriver.hottestdriver-1.md#print)
- [println](hottestdriver.hottestdriver-1.md#println)
- [run](hottestdriver.hottestdriver-1.md#run)
- [runCommand](hottestdriver.hottestdriver-1.md#runcommand)
- [wait](hottestdriver.hottestdriver-1.md#wait)
- [waitForTestElement](hottestdriver.hottestdriver-1.md#waitfortestelement)

## Constructors

### constructor

\+ **new HotTestDriver**(`page?`: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)): [*HotTestDriver*](hottestdriver.hottestdriver-1.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`page` | [*HotTestPage*](../interfaces/hottestmap.hottestpage.md) | null |

**Returns:** [*HotTestDriver*](hottestdriver.hottestdriver-1.md)

Defined in: [HotTestDriver.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L13)

## Properties

### page

• **page**: [*HotTestPage*](../interfaces/hottestmap.hottestpage.md)

The current page.

Defined in: [HotTestDriver.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L13)

## Methods

### assert

▸ **assert**(`value`: *any*, `errorMessage?`: *string*): *Promise*<any\>

An expression to test.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`errorMessage` | *string* | "" |

**Returns:** *Promise*<any\>

Defined in: [HotTestDriver.ts:107](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L107)

___

### assertElementValue

▸ `Abstract`**assertElementValue**(`name`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `value`: *any*, `errorMessage?`: *string*, `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<any\>

An expression to test.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) |
`value` | *any* |
`errorMessage?` | *string* |
`options?` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) |

**Returns:** *Promise*<any\>

Defined in: [HotTestDriver.ts:102](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L102)

___

### destroy

▸ `Abstract`**destroy**(): *Promise*<void\>

Disconnect this server or destroy anything associated with this HotTestDriver.

**Returns:** *Promise*<void\>

Defined in: [HotTestDriver.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L81)

___

### findTestElement

▸ `Abstract`**findTestElement**(`name`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<any\>

Find a HotTestElement to utilize.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) |
`options?` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) |

**Returns:** *Promise*<any\>

Defined in: [HotTestDriver.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L94)

___

### navigateToUrl

▸ `Abstract`**navigateToUrl**(`url`: *string*): *Promise*<void\>

Navigate to a url.

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTestDriver.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L86)

___

### parseTestObject

▸ **parseTestObject**(`name`: *string*): *string*

Get a test object by it's name. If a * is used, it will be used as a
wildcard for the object's name. If a > is used, then the name will
be treated as a CSS selector.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |

**Returns:** *string*

Defined in: [HotTestDriver.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L25)

___

### print

▸ **print**(`message`: *string*): *Promise*<void\>

Print a message.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTestDriver.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L65)

___

### println

▸ **println**(`message`: *string*): *Promise*<void\>

Print a message line.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | *string* |

**Returns:** *Promise*<void\>

Defined in: [HotTestDriver.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L73)

___

### run

▸ **run**(`executions`: *string*[] \| *string*[][]): *Promise*<any[]\>

Run a series of test elements.

#### Parameters:

Name | Type |
:------ | :------ |
`executions` | *string*[] \| *string*[][] |

**Returns:** *Promise*<any[]\>

Defined in: [HotTestDriver.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L116)

___

### runCommand

▸ `Abstract`**runCommand**(`testElm`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `funcName?`: *string*, `valueStr?`: *string*): *Promise*<any\>

Run a HotTestElement command.

#### Parameters:

Name | Type |
:------ | :------ |
`testElm` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) |
`funcName?` | *string* |
`valueStr?` | *string* |

**Returns:** *Promise*<any\>

Defined in: [HotTestDriver.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L98)

___

### wait

▸ **wait**(`numMilliseconds`: *number*): *Promise*<void\>

Wait for a number of milliseconds.

#### Parameters:

Name | Type |
:------ | :------ |
`numMilliseconds` | *number* |

**Returns:** *Promise*<void\>

Defined in: [HotTestDriver.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L51)

___

### waitForTestElement

▸ `Abstract`**waitForTestElement**(`name`: *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md), `options?`: [*HotTestElementOptions*](hottestelement.hottestelementoptions.md)): *Promise*<any\>

Wait for a HotTestElement to load.

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* \| [*HotTestElement*](hottestelement.hottestelement-1.md) |
`options?` | [*HotTestElementOptions*](hottestelement.hottestelementoptions.md) |

**Returns:** *Promise*<any\>

Defined in: [HotTestDriver.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/ff92735/src/HotTestDriver.ts#L90)
