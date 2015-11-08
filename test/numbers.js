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
// Booleans
describe('is.true',function(){
	it('true is true', 			function(done){		is.true(true)			.should.equal(true); 	done();		});
	it('false is not true', 	function(done){		is.true(false)			.should.equal(false); 	done();		});
});
describe('is.false',function(){
	it('false is false', 		function(done){		is.false(false)			.should.equal(true); 	done();		});
	it('true is not false', 	function(done){		is.false(true)			.should.equal(false); 	done();		});
});