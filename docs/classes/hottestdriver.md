**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestDriver

# Class: HotTestDriver

This actually executes the tests.

## Hierarchy

* **HotTestDriver**

  ↳ [HotTestSeleniumDriver](hottestseleniumdriver.md)

## Index

### Constructors

* [constructor](hottestdriver.md#constructor)

### Properties

* [page](hottestdriver.md#page)

### Methods

* [assert](hottestdriver.md#assert)
* [assertElementValue](hottestdriver.md#assertelementvalue)
* [destroy](hottestdriver.md#destroy)
* [findTestElement](hottestdriver.md#findtestelement)
* [navigateToUrl](hottestdriver.md#navigatetourl)
* [parseTestObject](hottestdriver.md#parsetestobject)
* [print](hottestdriver.md#print)
* [println](hottestdriver.md#println)
* [run](hottestdriver.md#run)
* [runCommand](hottestdriver.md#runcommand)
* [wait](hottestdriver.md#wait)
* [waitForTestElement](hottestdriver.md#waitfortestelement)

## Constructors

### constructor

\+ **new HotTestDriver**(`page?`: [HotTestPage](../interfaces/hottestpage.md)): [HotTestDriver](hottestdriver.md)

*Defined in [HotTestDriver.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L13)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`page` | [HotTestPage](../interfaces/hottestpage.md) | null |

**Returns:** [HotTestDriver](hottestdriver.md)

## Properties

### page

•  **page**: [HotTestPage](../interfaces/hottestpage.md)

*Defined in [HotTestDriver.ts:13](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L13)*

The current page.

## Methods

### assert

▸ **assert**(`value`: any, `errorMessage?`: string): Promise<any\>

*Defined in [HotTestDriver.ts:107](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L107)*

An expression to test.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`value` | any | - |
`errorMessage` | string | "" |

**Returns:** Promise<any\>

___

### assertElementValue

▸ `Abstract`**assertElementValue**(`name`: string \| [HotTestElement](hottestelement.md), `value`: any, `errorMessage?`: string, `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<any\>

*Defined in [HotTestDriver.ts:102](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L102)*

An expression to test.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string \| [HotTestElement](hottestelement.md) |
`value` | any |
`errorMessage?` | string |
`options?` | [HotTestElementOptions](hottestelementoptions.md) |

**Returns:** Promise<any\>

___

### destroy

▸ `Abstract`**destroy**(): Promise<void\>

*Defined in [HotTestDriver.ts:81](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L81)*

Disconnect this server or destroy anything associated with this HotTestDriver.

**Returns:** Promise<void\>

___

### findTestElement

▸ `Abstract`**findTestElement**(`name`: string \| [HotTestElement](hottestelement.md), `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<any\>

*Defined in [HotTestDriver.ts:94](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L94)*

Find a HotTestElement to utilize.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string \| [HotTestElement](hottestelement.md) |
`options?` | [HotTestElementOptions](hottestelementoptions.md) |

**Returns:** Promise<any\>

___

### navigateToUrl

▸ `Abstract`**navigateToUrl**(`url`: string): Promise<void\>

*Defined in [HotTestDriver.ts:86](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L86)*

Navigate to a url.

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |

**Returns:** Promise<void\>

___

### parseTestObject

▸ **parseTestObject**(`name`: string): string

*Defined in [HotTestDriver.ts:25](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L25)*

Get a test object by it's name. If a * is used, it will be used as a
wildcard for the object's name. If a > is used, then the name will
be treated as a CSS selector.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string |

**Returns:** string

___

### print

▸ **print**(`message`: string): Promise<void\>

*Defined in [HotTestDriver.ts:65](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L65)*

Print a message.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** Promise<void\>

___

### println

▸ **println**(`message`: string): Promise<void\>

*Defined in [HotTestDriver.ts:73](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L73)*

Print a message line.

#### Parameters:

Name | Type |
------ | ------ |
`message` | string |

**Returns:** Promise<void\>

___

### run

▸ **run**(`executions`: string[] \| string[][]): Promise<any[]\>

*Defined in [HotTestDriver.ts:116](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L116)*

Run a series of test elements.

#### Parameters:

Name | Type |
------ | ------ |
`executions` | string[] \| string[][] |

**Returns:** Promise<any[]\>

___

### runCommand

▸ `Abstract`**runCommand**(`testElm`: string \| [HotTestElement](hottestelement.md), `funcName?`: string, `valueStr?`: string): Promise<any\>

*Defined in [HotTestDriver.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L98)*

Run a HotTestElement command.

#### Parameters:

Name | Type |
------ | ------ |
`testElm` | string \| [HotTestElement](hottestelement.md) |
`funcName?` | string |
`valueStr?` | string |

**Returns:** Promise<any\>

___

### wait

▸ **wait**(`numMilliseconds`: number): Promise<void\>

*Defined in [HotTestDriver.ts:51](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L51)*

Wait for a number of milliseconds.

#### Parameters:

Name | Type |
------ | ------ |
`numMilliseconds` | number |

**Returns:** Promise<void\>

___

### waitForTestElement

▸ `Abstract`**waitForTestElement**(`name`: string \| [HotTestElement](hottestelement.md), `options?`: [HotTestElementOptions](hottestelementoptions.md)): Promise<any\>

*Defined in [HotTestDriver.ts:90](https://github.com/OurFreeLight/HotPreprocessor/blob/f104630/src/HotTestDriver.ts#L90)*

Wait for a HotTestElement to load.

#### Parameters:

Name | Type |
------ | ------ |
`name` | string \| [HotTestElement](hottestelement.md) |
`options?` | [HotTestElementOptions](hottestelementoptions.md) |

**Returns:** Promise<any\>
