var should = require('should'),
	is = require('../index.js');
	
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

describe('is.numberInvalid', function(){
	it('Infinity is an invalid number', function(done){		
		is(Infinity).numberInvalid .should.equal(true);
		done();
	});
	it('-Infinity is an invalid number', function(done){		
		is(-Infinity).numberInvalid .should.equal(true);
		done();
	});
	it('NaN is an invalid number', function(done){		
		is(NaN).numberInvalid .should.equal(true);
		done();
	});
	it('10/0 is an invalid number', function(done){		
		is(10/0).numberInvalid .should.equal(true);
		done();
	});
	it('abcdef is an invalid number', function(done){		
		is('abcdef').numberInvalid .should.equal(true);
		done();
	});
	it('booleans are invalid as a number', function(done){
		is(true).numberInvalid.should.equal(true);
		is(false).numberInvalid.should.equal(true);
		done();
	});
	it('null is an invalid number', function(done){		
		is(null).numberInvalid .should.equal(true);
		done();
	});
	it('undefined is an invalid number', function(done){		
		is(undefined).numberInvalid .should.equal(true);
		done();
	});
	it('empty string "" is an invalid number', function(done){		
		is("").numberInvalid .should.equal(true);
		done();
	});
	it('1234 is a valid number, so it should return false', function(done){
		is(1234).numberInvalid.should.equal(false);
		done();
	});
})

describe('is.numberValid', function(){
	it('6 is a valid number', function(done){
		is(6).numberValid.should.equal(true);
		done();
	});
	it('10.5 is a valid number', function(done){
		is(10.5).numberValid.should.equal(true);
		done();
	});
	it('should return false for Infinity or -Infinity', function(done){
		is(Infinity).numberValid.should.equal(false);
		is(-Infinity).numberValid.should.equal(false);
		done();
	});
	it('should return false for undefined', function(done){
		is(undefined).numberValid.should.equal(false);
		done();
	});
	it('should return false for null', function(done){
		is(undefined).numberValid.should.equal(false);
		done();
	});
	it('should return false for empty string ""', function(done){
		is("").numberValid.should.equal(false);
		done();;
	});
	it('should return false for strings', function(done){
		is('abcdef').numberValid.should.equal(false);
		done();
	});
	it('should return false for booleans', function(done){
		is(false).numberValid.should.equal(false);
		done();
	});
})

// Booleans
describe('is.true',function(){
	it('true is true', 			function(done){		is.true(true)			.should.equal(true); 	done();		});
	it('false is not true', 	function(done){		is.true(false)			.should.equal(false); 	done();		});
});
describe('is.false',function(){
	it('false is false', 		function(done){		is.false(false)			.should.equal(true); 	done();		});
	it('true is not false', 	function(done){		is.false(true)			.should.equal(false); 	done();		});
});