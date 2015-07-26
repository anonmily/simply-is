An expressive type testing utility library for Node.

## Examples
    is.object({}); 		//true
    is.a.string('hello')	//true
    is.not.an.array({})	//true

## Basic Tests
    is.object	({})
    is.array	([1,2,3])
    is.string	('hello world')
    is.json     ('[{"key":"somevalue"}]')
    is.number	(1)
    is.null		(Null)
    is.undefined	(undefined)
    is.boolean	(1==1)

## Utility
    is.empty	({}) //true for {}, [], 0, "", null, undefined

## Numbers
    is.number	(1)
    is.nan		(NaN)
    is.infinite	(Infinity)
    is.even		(2)
    is.odd		(3)

## Booleans
    is.true		(1==1)
    is.false	(1==2)

