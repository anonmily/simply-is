var should = require('should'),
	is = require('../index.js');

// Chaining
describe('is.a and is.an',function(){
	it('array', 				function(done){		is.a.string('hello')	.should.equal(true);	done();		});
	it('array', 				function(done){		is.an.array([1,2,3])	.should.equal(true);	done();		});
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
});
