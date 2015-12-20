var should = require('should'),
	is = require('../index.js');

//Utilities
describe('is.empty',function(){
	it('{}', 		function(done){		is.empty({})			.should.equal(true);		done();		});
	it('[]', 		function(done){		is.empty([])			.should.equal(true);		done();		});
	it('0', 		function(done){		is.empty(0)				.should.equal(true);		done();		});
	it('""', 		function(done){		is.empty("")			.should.equal(true);		done();		});
	it('null', 		function(done){		is.empty(null)			.should.equal(true);		done();		});
	it('undefined', function(done){		is.empty(undefined)		.should.equal(true);		done();		});
});

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
});


describe('is.equal',function(){
	it('is.equal({a: 1, b: "hello"}, {b:"hello", a:1})',function(done){
		is.equal({a: 1, b: "hello"}, {b:"hello", a:1})		.should.equal(true);
		done();
	});
	it('is({a: 1, b: "hello"}).equal({b:"hello", a:1})',function(done){
		is({a: 1, b: "hello"}).equal({b:"hello", a:1})		.should.equal(true);
		done();
	});
	it('is.equal({a: 1, b: "hello"}, {b:"blah", a:1})',function(done){
		is.equal({a: 1, b: "hello"}, {b:"blah", a:1})		.should.equal(false);
		done();
	});
	it('is.equal({a: 1, b: "hello"}, {a:1, c: "hello" })',function(done){
		is.equal({a: 1, b: "hello"}, {a:1, c: "hello" })	.should.equal(false);
		done();
	});
});

describe('is.sameType',function(){
	it('is.sameType({a: 1, b: "hello", c: new Date(), d: function(){ return "hello" }}, {a: "number", b: "string", c: "date", d: "function" })',function(done){
		is.sameType({a: 1, b: "hello", c: new Date(), d: function(){ return "hello" }}, {a: "number", b: "string", c: "date", d: "function" })		.should.equal(true);
		done();
	});
	it('is.sameType({a: 1, b: "hello", c: 1234, d: "I should be a function" }, {a: "number", b: "string", c: "date", d: "function" })',function(done){
		is.sameType({a: 1, b: "hello", c: 1234, d: "I should be a function"}, {a: "number", b: "string", c: "date", d: "function" })		.should.equal(false);
		done();
	});
	it('is.sameType({a: 1, b: "hello", c: "unrestrained property"}, {a: "number", b: "string"})',function(done){
		is.sameType({a: 1, b: "hello", c: "unrestrained property"}, {a: "number", b: "string"})		.should.equal(true);
		done();
	});
	it('is({a: 1, b: "hello"}).sameType({a: "number", b: "string"})',function(done){
		is({a: 1, b: "hello"}).sameType({a: "number", b: "string"})		.should.equal(true);
		done();
	});
});