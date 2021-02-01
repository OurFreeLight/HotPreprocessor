**[hotpreprocessor](../README.md)**

> [Globals](../globals.md) / HotTestMap

# Class: HotTestMap

Maps the paths that are taken to complete a test.

## Hierarchy

* **HotTestMap**

## Index

### Constructors

* [constructor](hottestmap.md#constructor)

### Properties

* [destinationOrder](hottestmap.md#destinationorder)
* [destinations](hottestmap.md#destinations)
* [pages](hottestmap.md#pages)

## Constructors

### constructor

\+ **new HotTestMap**(`destinations?`: string[] \| [HotTestDestination](hottestdestination.md)[] \| { [name:string]: string \| [HotTestDestination](hottestdestination.md);  }, `pages?`: { [name:string]: [HotTestPage](../interfaces/hottestpage.md);  }, `destinationOrder?`: string[]): [HotTestMap](hottestmap.md)

*Defined in [HotTestMap.ts:98](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestMap.ts#L98)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`destinations` | string[] \| [HotTestDestination](hottestdestination.md)[] \| { [name:string]: string \| [HotTestDestination](hottestdestination.md);  } | [] |
`pages` | { [name:string]: [HotTestPage](../interfaces/hottestpage.md);  } | {} |
`destinationOrder` | string[] | [] |

**Returns:** [HotTestMap](hottestmap.md)

## Properties

### destinationOrder

•  **destinationOrder**: string[]

*Defined in [HotTestMap.ts:92](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestMap.ts#L92)*

The order in which destinations are supposed to execute. This is
ignored if the destinations are an array.

___

### destinations

•  **destinations**: [HotTestDestination](hottestdestination.md)[] \| { [name:string]: [HotTestDestination](hottestdestination.md);  }

*Defined in [HotTestMap.ts:87](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestMap.ts#L87)*

The order in which paths are to be taken. Each destination is a string
in a type -> path order. The type could be either a page or api route.
For example:
```
[
     "page:signin_page -> signin_path",
     "page:account_page -> change_username_path",
     "page:account_page -> change_password_path",
     "page:account_page -> change_name_path -> change_address_path",
		"page:account_page -> signout_path",
		"api:account_api_route -> signout_route_method -> signout_test_path"
]
```

The first string to the left of the -> will always be the type, such as a
page or an api route. Any strings to the right of the -> will be a path, even
when chaining addtional ->'s.

___

### pages

•  **pages**: { [name:string]: [HotTestPage](../interfaces/hottestpage.md);  }

*Defined in [HotTestMap.ts:96](https://github.com/OurFreeLight/HotPreprocessor/blob/086eb28/src/HotTestMap.ts#L96)*

The test pages to execute.
