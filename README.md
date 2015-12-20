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

## Installation - Bower/Frontend
The package can be installed via Bower:

    bower install simply-is

SimplyIs can also be [downloaded](https://raw.githubusercontent.com/anonmily/simply-is/master/simplyis.js) directly.

Note, for frontend use, the file that should be included is **simplyis.js**:

    <script src='/bower_components/simplyis/simplyis.js'></script>

The script is available as a global module as well as an AMD module. As a global module, it can be accessed through **window.simplyIs**.

    var is = window.simplyIs;
    console.log( is('300').a.number );

---

## Usage

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
	is.argument 	( (function(){ return arguments; })(1,2,3) )
	is.array 		([1,2,3])
	is.boolean 		(1==1)
	is.date 		(new Date())
	is.defined 		(1)
	is.function 	(function(){return 'hi'})
	is.json 		('[{"key":"somevalue"}]')
	is.null 		(Null)
	is.number 		(1)
	is.object 		({})
	is.regexp 		(/abc/)
	is.string 		('hello world')
	is.undefined 	(undefined)


## Utility
	is.empty		({}) 	//true for {}, [], 0, "", null, undefined, false
	is.equal 		( {a: 1, b: "hello"}, {b:"hello", a:1} )
	is.sameType 	({	a: 1, b: "hello" }, { a: "number", b: "string" })

	is.inArray 		('a',['a','b','c'])

	is.inObject 	('apple',{fruit: 'apple'})
	is.inObject 	('fruit',{fruit: 'apple'})

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

1. is.csv
2. is.yaml
3. is.xml
4. is.deepEqual

---
## Changelog
| Version | Notes                                                                                                                                                                            |
|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| _2.4.7_   | Used getter functions for isfunc to improve performance. The result of the comparison will only run when the result is needed/requested rather than stored in a static property. |
| _2.5.5_   | Added in is.equal and is.sameType                                                                                                                                                |
