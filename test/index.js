var should = require('should'),
	is = require('../index.js');

// General Types
describe('is.object',function(){
	it('object', 	function(done){		is.object({})			.should.equal(true);	done();		});
	it('array', 	function(done){		is.object([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.object('hi')			.should.equal(false);	done();		});
	it('number', 	function(done){		is.object(456)			.should.equal(false); 	done();		});
	it('boolean', 	function(done){		is.object(false)		.should.equal(false); 	done();		});
	it('null', 		function(done){		is.object(null)			.should.equal(false);	done();		});
	it('undefined', function(done){		is.object(undefined)	.should.equal(false); 	done();		});

	it('is(object).an.object', 		function(done){	 	is({}).an.object			.should.equal(true);	done();		});
	it('is(array).an.object', 		function(done){		is([1,2,3]).an.object		.should.equal(false); 	done();		});
	it('is(string).an.object', 		function(done){		is('hi').an.object			.should.equal(false);	done();		});
	it('is(number).an.object', 		function(done){		is(456).an.object			.should.equal(false); 	done();		});
	it('is(boolean).an.object', 	function(done){		is(false).an.object			.should.equal(false); 	done();		});
	it('is(null).an.object', 		function(done){		is(null).an.object			.should.equal(false);	done();		});
	it('is(undefined).an.object', 	function(done){		is(undefined).an.object		.should.equal(false); 	done();		});
});
describe('is.array',function(){
	it('array', 	function(done){		is.array([1,2,3])		.should.equal(true); 	done();		});
	it('object', 	function(done){		is.array({})			.should.equal(false);	done();		});
	it('string', 	function(done){		is.array('hi')			.should.equal(false);	done();		});
	it('number', 	function(done){		is.array(456)			.should.equal(false); 	done();		});
	it('boolean', 	function(done){		is.array(false)			.should.equal(false); 	done();		});
	it('null', 		function(done){		is.array(null)			.should.equal(false);	done();		});
	it('undefined', function(done){		is.array(undefined)		.should.equal(false); 	done();		});
});
describe('is.string',function(){
	it('string', 	function(done){		is.string('hi')			.should.equal(true);	done();		});
	it('object', 	function(done){		is.string({})			.should.equal(false);	done();		});
	it('array', 	function(done){		is.string([1,2,3])		.should.equal(false); 	done();		});
	it('number', 	function(done){		is.string(456)			.should.equal(false); 	done();		});
	it('boolean', 	function(done){		is.string(false)		.should.equal(false); 	done();		});
	it('null', 		function(done){		is.string(null)			.should.equal(false);	done();		});
	it('undefined', function(done){		is.string(undefined)	.should.equal(false); 	done();		});
});
describe('is.number',function(){
	it('number', 	function(done){		is.number(456)			.should.equal(true); 	done();		});
	it('object', 	function(done){		is.number({})			.should.equal(false);	done();		});
	it('array', 	function(done){		is.number([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.number('hi')			.should.equal(false);	done();		});
	it('boolean', 	function(done){		is.number(false)		.should.equal(false); 	done();		});
	it('null', 		function(done){		is.number(null)			.should.equal(false);	done();		});
	it('undefined', function(done){		is.number(undefined)	.should.equal(false); 	done();		});
});
describe('is.null',function(){
	it('null', 		function(done){		is.null(null)			.should.equal(true);	done();		});
	it('number', 	function(done){		is.null(456)			.should.equal(false); 	done();		});
	it('object', 	function(done){		is.null({})				.should.equal(false);	done();		});
	it('array', 	function(done){		is.null([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.null('hi')			.should.equal(false);	done();		});
	it('boolean', 	function(done){		is.null(false)			.should.equal(false); 	done();		});
	it('undefined', function(done){		is.null(undefined)		.should.equal(false); 	done();		});
});
describe('is.undefined',function(){
	it('undefined', function(done){		is.undefined(undefined)		.should.equal(true); 	done();		});
	it('null', 		function(done){		is.undefined(null)			.should.equal(false);	done();		});
	it('number', 	function(done){		is.undefined(456)			.should.equal(false); 	done();		});
	it('object', 	function(done){		is.undefined({})			.should.equal(false);	done();		});
	it('array', 	function(done){		is.undefined([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.undefined('hi')			.should.equal(false);	done();		});
	it('boolean', 	function(done){		is.undefined(false)			.should.equal(false); 	done();		});
});
describe('is.boolean',function(){
	it('boolean', 	function(done){		is.boolean(false)			.should.equal(true); 	done();		});
	it('boolean', 	function(done){		is.boolean(true)			.should.equal(true); 	done();		});
	it('undefined', function(done){		is.boolean(undefined)		.should.equal(false); 	done();		});
	it('null', 		function(done){		is.boolean(null)			.should.equal(false);	done();		});
	it('number', 	function(done){		is.boolean(456)				.should.equal(false); 	done();		});
	it('object', 	function(done){		is.boolean({})				.should.equal(false);	done();		});
	it('array', 	function(done){		is.boolean([1,2,3])			.should.equal(false); 	done();		});
	it('string', 	function(done){		is.boolean('hi')			.should.equal(false);	done();		});
});
describe('is.function',function(){
	it('function', 	function(done){	
		var f = function(){ return 'hi';};	
		is.function(f).should.equal(true); 	
		done();
	});
	it('undefined', function(done){		is.function(undefined)		.should.equal(false); 	done();		});
	it('null', 		function(done){		is.function(null)			.should.equal(false);	done();		});
	it('number', 	function(done){		is.function(456)			.should.equal(false); 	done();		});
	it('object', 	function(done){		is.function({})				.should.equal(false);	done();		});
	it('array', 	function(done){		is.function([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.function('hi')			.should.equal(false);	done();		});
});
describe('is.json',function(){

	it('json {}', 					function(done){		is.json('{}')				.should.equal(true);	done();		});
	it('json {key": "123"}', 		function(done){		is.json('{"key": "123"}')	.should.equal(true);	done();		});
	it('json [{"key": "123"}]', 	function(done){		is.json('[{"key": "123"}]')	.should.equal(true);	done();		});

	it('object', 	function(done){		is.json({})					.should.equal(false);	done();		});
	it('undefined', function(done){		is.json(undefined)			.should.equal(false); 	done();		});
	it('null', 		function(done){		is.json(null)				.should.equal(false);	done();		});
	it('number', 	function(done){		is.json(456)				.should.equal(false); 	done();		});
	it('object', 	function(done){		is.json({})					.should.equal(false);	done();		});
	it('array', 	function(done){		is.json([1,2,3])			.should.equal(false); 	done();		});
	it('string', 	function(done){		is.json('hi')				.should.equal(false);	done();		});
	it('boolean', 	function(done){		is.json(false)				.should.equal(false); 	done();		});
});

// Negation
describe('is.not',function(){
	it('object', 	function(done){		is.not.object({})			.should.equal(false);	done();		});
	it('array', 	function(done){		is.not.array([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.not.string('hi')			.should.equal(false);	done();		});
	it('number', 	function(done){		is.not.number(456)			.should.equal(false); 	done();		});
	it('boolean', 	function(done){		is.not.boolean(false)		.should.equal(false); 	done();		});
	it('null', 		function(done){		is.not.null(null)			.should.equal(false);	done();		});
	it('undefined', function(done){		is.not.undefined(undefined)	.should.equal(false); 	done();		});

	it('not object', 	function(done){		is.not.object(undefined)	.should.equal(true); 	done();		});
	it('not array', 	function(done){		is.not.array({})			.should.equal(true);	done();		});
	it('not string', 	function(done){		is.not.string([1,2,3])		.should.equal(true); 	done();		});
	it('not number', 	function(done){		is.not.number('hi')			.should.equal(true);	done();		});
	it('not boolean', 	function(done){		is.not.boolean(456)			.should.equal(true); 	done();		});
	it('not null', 		function(done){		is.not.null(false)			.should.equal(true); 	done();		});
	it('not undefined', function(done){		is.not.undefined(null)		.should.equal(true);	done();		});
});

// Chaining
describe('is.a and is.an',function(){
	it('array', 				function(done){		is.a.string('hello')	.should.equal(true);	done();		});
	it('array', 				function(done){		is.an.array([1,2,3])	.should.equal(true);	done();		});
});

// Utility
describe('is.empty',function(){
	it('{}', 		function(done){		is.empty({})			.should.equal(true);		done();		});
	it('[]', 		function(done){		is.empty([])			.should.equal(true);		done();		});
	it('0', 		function(done){		is.empty(0)				.should.equal(true);		done();		});
	it('""', 		function(done){		is.empty("")			.should.equal(true);		done();		});
	it('null', 		function(done){		is.empty(null)			.should.equal(true);		done();		});
	it('undefined', function(done){		is.empty(undefined)		.should.equal(true);		done();		});
});

// Number-specific
describe('is.nan',function(){
	it('NaN', 					function(done){		is.nan(NaN)				.should.equal(true); 	done();		});
	it('5 is not NaN', 			function(done){		is.nan(5)				.should.equal(false); 	done();		});
});
describe('is.infinite',function(){
	it('Infinity', 				function(done){		is.infinite(Infinity)	.should.equal(true); 	done();		});
	it('-Infinity', 			function(done){		is.infinite(Infinity)	.should.equal(true); 	done();		});
	it('5/0', 					function(done){		is.infinite(5/0)		.should.equal(true); 	done();		});
});
describe('is.even',function(){
	it('6 is even', 			function(done){		is.even(6)				.should.equal(true); 	done();		});
	it('3 is not even', 		function(done){		is.even(3)				.should.equal(false); 	done();		});
	it('NaN is not even', 		function(done){		is.even(NaN)			.should.equal(false); 	done();		});
	it('Infinity is not even', 	function(done){		is.even(Infinity)		.should.equal(false); 	done();		});

	it('is(3).even()', 			function(done){		is(3).even			.should.equal(false); 	done();		});
	it('is(4).even()', 			function(done){		is(4).even			.should.equal(true); 	done();		});
});
// Booleans
describe('is.true',function(){
	it('true is true', 			function(done){		is.true(true)			.should.equal(true); 	done();		});
	it('false is not true', 	function(done){		is.true(false)			.should.equal(false); 	done();		});
});
describe('is.false',function(){
	it('false is false', 		function(done){		is.false(false)			.should.equal(true); 	done();		});
	it('true is not false', 	function(done){		is.false(true)			.should.equal(false); 	done();		});
});

//Alternative syntax
describe('alternative syntaxes', function(){
	it('chaining',function(done){
		is({}).an.object						.should.equal(true);
		is('hi').a.string						.should.equal(true);
		done();
	});
	it('is({}).object',function(done){
		is({}).object							.should.equal(true);
		is([1,2,3]).array						.should.equal(true);
		is(2).number							.should.equal(true);
		is(2).even								.should.equal(true);
		is(3).odd								.should.equal(true);
		is(3/0).infinite						.should.equal(true);
		is(0/0).nan 							.should.equal(true);
		is('hello').a.string					.should.equal(true);
		is('[{"key":"somevalue"}]').json		.should.equal(true);
		is(undefined).undefined					.should.equal(true);
		is(null).null							.should.equal(true);
		done();
	})
})

//Is inside
describe('is.inside',function(){
	it('is.inside("apple", ["peach","apple","grapes"])',function(done){
		is.inside("apple", ["peach","apple","grapes"])		.should.equal(true);
		done();
	});
	it('is.inside("bananas", ["peach","apple","grapes"])',function(done){
		is.inside("bananas", ["peach","apple","grapes"])	.should.equal(false);
		done();
	});

	it('is.inside("fred", {"user": "fred", "age":40 })',function(done){
		is.inside("fred", {"user": "fred", "age":40 })		.should.equal(true);
		done();
	});
	it('is.inside("bob", {"user": "fred", "age":40 })',function(done){
		is.inside("bob", {"user": "fred", "age":40 })		.should.equal(false);
		done();
	});

	it('is.inside("age", {"user": "fred", "age":40 })',function(done){
		is.inside("age", {"user": "fred", "age":40 })		.should.equal(true);
		done();
	});
	it('is.inside("weight", {"user": "fred", "age":40 })',function(done){
		is.inside("weight", {"user": "fred", "age":40 })	.should.equal(false);
		done();
	});

	it('is.inside("cat","I love cats")',function(done){
		is.inside("cat","I love cats")						.should.equal(true);
		done();
	});
	it('is.inside("cat","I love dogs")',function(done){
		is.inside("cat","I love dogs")						.should.equal(false);
		done();
	});

	it('is("apple").inside(["peach","apple","grapes"])',function(done){
		is("apple").inside(["peach","apple","grapes"])		.should.equal(true);
		done();
	});
	it('is("bananas").not.inside(["peach","apple","grapes"])',function(done){
		is("bananas").not.inside(["peach","apple","grapes"]).should.equal(true);
		done();
	});

	it('is("bananas").inside(["peach","apple","grapes"])',function(done){
		is("bananas").inside(["peach","apple","grapes"])	.should.equal(false);
		done();
	});
})
