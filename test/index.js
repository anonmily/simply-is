var should = require('should'),
	is = require('../index.js');

// General Types
describe('is.argument',function(){
	var args = function(){ return arguments; }
	it('true', 	function(done){		is.argument( args(1,2,3) )	.should.equal(true);	done();			});
	it('false', function(done){		is.argument( [1,2,3] )		.should.equal(false);	done();			});
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
describe('is.date',function(){
	it('true', 	function(done){		is.date(new Date())			.should.equal(true);	done();			});
	it('false', function(done){		is.date('1/2/2015')			.should.equal(false);	done();			});
});
describe('is.decimal',function(){
	it('true', 	function(done){		is.decimal(10.5)			.should.equal(true);	done();			});
	it('false', function(done){		is.decimal('10.5')			.should.equal(false);	done();			});
});
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
describe('is.instanceOf',function(){
	var dog = function(){ this.bark = 'woof'; }
		doberman = Object.create( new dog() );

	var chihuaha = function(){ this.bark = 'squeak'; },
		ratdog = Object.create( new chihuaha() );

	it('true', 	function(done){		is.instanceOf(doberman, dog)			.should.equal(true);	done();			});
	it('false', function(done){		is.instanceOf(doberman, chihuaha)		.should.equal(false);	done();			});
});
describe('is.decimal',function(){
	it('true', 	function(done){		is.decimal(10.5)			.should.equal(true);	done();			});
	it('false', function(done){		is.decimal('10.5')			.should.equal(false);	done();			});
});
describe('is.error',function(){
	it('true', 	function(done){		is.error(new Error())		.should.equal(true);	done();			});
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
describe('is.integer',function(){
	it('456',		function(done){		is.integer(456)			.should.equal(true); 	done();		});
	it('10.5',		function(done){		is.integer(10.5)		.should.equal(false); 	done();		});
	it('"456"',		function(done){		is.integer('456')		.should.equal(false); 	done();		});
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


describe('is.null',function(){
	it('null', 		function(done){		is.null(null)			.should.equal(true);	done();		});
	it('number', 	function(done){		is.null(456)			.should.equal(false); 	done();		});
	it('object', 	function(done){		is.null({})				.should.equal(false);	done();		});
	it('array', 	function(done){		is.null([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.null('hi')			.should.equal(false);	done();		});
	it('boolean', 	function(done){		is.null(false)			.should.equal(false); 	done();		});
	it('undefined', function(done){		is.null(undefined)		.should.equal(false); 	done();		});
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


describe('is.regexp',function(){
	it('true', 	function(done){		is.regexp(new RegExp())		.should.equal(true);	done();			});
	it('true', 	function(done){		is.regexp(/abc/)			.should.equal(true);	done();			});
	it('false', function(done){		is.regexp('/some string/')	.should.equal(false);	done();			});
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

describe('is.undefined',function(){
	it('undefined', function(done){		is.undefined(undefined)		.should.equal(true); 	done();		});
	it('null', 		function(done){		is.undefined(null)			.should.equal(false);	done();		});
	it('number', 	function(done){		is.undefined(456)			.should.equal(false); 	done();		});
	it('object', 	function(done){		is.undefined({})			.should.equal(false);	done();		});
	it('array', 	function(done){		is.undefined([1,2,3])		.should.equal(false); 	done();		});
	it('string', 	function(done){		is.undefined('hi')			.should.equal(false);	done();		});
	it('boolean', 	function(done){		is.undefined(false)			.should.equal(false); 	done();		});
});

