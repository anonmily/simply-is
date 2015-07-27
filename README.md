Simply Is
====================
![Simply Is Dependency badge](https://david-dm.org/anonmily/simply-is.svg)

An expressive type testing utility library for Node.

[GITHUB:	https://github.com/anonmily/simply-is](https://github.com/anonmily/simply-is)

[NPM:		https://www.npmjs.com/package/simply-is](https://www.npmjs.com/package/simply-is)

## Installation
    npm install simply-is

## Example
	var is = require('simply-is');

	is.object({}); 			//true
	is.a.string('hello')	//chaining
	is.not.an.array({})		//negation
	
	//alternative syntax
	is(3).even()
	is('hello').a.string()
	is('[{"key":"somevalue"}]').json()


## Basics
	is.object 		({})
	is.array 		([1,2,3])
	is.function 	(function(){return 'hi'})
	is.string 		('hello world')
	is.json 		('[{"key":"somevalue"}]')
	is.number 		(1)
	is.boolean 		(1==1)
	is.null 		(Null)
	is.undefined 	(undefined)
	is.defined 		(1)


## Utility
	is.empty		({}) 	//true for {}, [], 0, "", null, undefined, false

## Numbers
	is.number		(1)
	is.nan			(NaN)
	is.infinite		(Infinity)
	is.even			(2)
	is.odd			(3)

## Booleans
	is.boolean  	(true)
	is.true			(1==1)
	is.false		(1==2)
	
---
## TODO
1. is.instance
2. is.date
3. is.regexp
4. is.error
5. is.arguments
6. is.csv
7. is.yaml
8. is.xml
9. is.integer
10. is.decimal
11. is.base
12. is.hex
13. is.base64
