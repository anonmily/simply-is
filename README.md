Simply Is
====================
![Simply Is Dependency badge](https://david-dm.org/anonmily/simply-is.svg)

An expressive type testing utility library.

[GITHUB:	https://github.com/anonmily/simply-is](https://github.com/anonmily/simply-is)

[NPM:		https://www.npmjs.com/package/simply-is](https://www.npmjs.com/package/simply-is)

## Installation - Node
To install as a Node package, simply install via npm:

    npm install simply-is

Then, you can require and start using the package as you wish:

	var is = require('simply-is');
	console.log( is('300').a.number );


## Installation - Bower
The package can be installed via Bower:

    bower install simply-is

Then, you include the script as usual using a script tag. Note, for frontend use, the file that should be included is **simplyis.js**:

    <script src='/simplyis.js'></script>

The script is available as a global module as well as an AMD module. As a global module, it can be accessed through **window.simplyIs**.

    var is = window.simplyIs;
    console.log( is('300').a.number );
    

## Example
	var is = require('simply-is');

	is.object({}); 			//true
	is.a.string('hello')	//chaining
	is.not.an.array({})		//negation
	
	//alternative syntax
	is(3).even
	is('hello').a.string
	is('[{"key":"somevalue"}]').json


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
	is.date 		(new Date())
	is.regexp 		(/abc/)


## Utility
	is.empty		({}) 	//true for {}, [], 0, "", null, undefined, false
	is.inArray 		('a',['a','b','c'])
	is.inObject 	('apple',{fruit: 'apple'})
	is.instanceOf 	( doberman, DogConstructor )

## Contains/inside
	is.inside("fred", {"user": "fred", "age":40 })
	is.inside("age", {"user": "fred", "age":40 })
	is.inside("apple",["peach","apple","grapes"])
	is.inside("cat","I love cats")

	is("fred").inside({"user": "fred", "age":40 })
	is("age").inside({"user": "fred", "age":40 })
	is("apple").inside(["peach","apple","grapes"])
	is("cat").inside("I love cats")

## Numbers
	is.number		(1)
	is.nan			(NaN)
	is.infinite		(Infinity)
	is.even			(2)
	is.odd			(3)
	is.integer 		(10)
	is.decimal 		(10.5)

## Booleans
	is.boolean  	(true)
	is.true			(1==1)
	is.false		(1==2)
	
---
## TODO

1. is.arguments
2. is.csv
3. is.yaml
4. is.xml
