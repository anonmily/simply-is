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
})