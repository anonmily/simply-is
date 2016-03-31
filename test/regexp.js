var should = require('should'),
	is = require('../index.js');

// General Types
describe('is.email',function(){
	it('true', 	function(done){		
		is.email( 'test123@test.com' 	)	.should.equal(true);	
		is.email( 'test@test.io' 		)	.should.equal(true);
		is.email( 'a@test.us' 			)	.should.equal(true);	
		done();			
	});
	it('false', function(done){		
		is.email( 'test' 				).should.equal(false);	
		is.email( 'test@test' 			).should.equal(false);
		is.email( 'test.com' 			).should.equal(false);	
		is.email( '@test.com' 			).should.equal(false);
		is.email( 'test@.com' 			).should.equal(false);
		done();			
	});
});

describe('is.phone',function(){
	it('true', 	function(done){		
		is.phone( '626-123-4567' 	)	.should.equal(true);
		is.phone( '6261234567' 		)	.should.equal(true);
		is.phone( '1-626-123-4567' 	)	.should.equal(true);
		is.phone( '(626) 123-4567' 	)	.should.equal(true);
		is.phone( '626.345.3456' 	)	.should.equal(true);
		done();			
	});
	it('false', function(done){		
		is.phone( 'test123' 		).should.equal(false);
		done();			
	});
});

describe('is.alpha',function(){
	it('true', 	function(done){		
		is.alpha( 'hi there' 	).should.equal(true);
		done();			
	});
	it('false', function(done){		
		is.alpha( 'test123' 	).should.equal(false);
		is.alpha( 'test!' 	).should.equal(false);
		done();			
	});
});

describe('is.numeric',function(){
	it('true', 	function(done){		
		is.numeric( '12345' 	).should.equal(true);
		done();			
	});
	it('false', function(done){		
		is.numeric( 'test123' 	).should.equal(false);
		is.numeric( 'test' 		).should.equal(false);
		done();			
	});
});

describe('is.alphanumeric',function(){
	it('true', 	function(done){		
		is.alphanumeric( '12345' 	).should.equal(true);
		is.alphanumeric( 'hithere' 	).should.equal(true);
		is.alphanumeric( 'hi123' 	).should.equal(true);
		done();			
	});
	it('false', function(done){	
		is.alphanumeric( 'hi 123' 	).should.equal(false);
		is.alphanumeric( 'test?!' 	).should.equal(false);
		is.alphanumeric( 'hey. 1+1' ).should.equal(false);
		done();			
	});
});