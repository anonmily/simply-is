(function(){

	var config = require('./support/config');
	var log = require('./support/log')(config);
	var _ = require('lodash');

	var type = function(x){
		return {
			type: Object.prototype.toString.call(x).replace('[object ','').replace(']','').toLowerCase(),
			is: function(y){
				return this.type === y;
			}
		}
	};

	module.exports = (function(){
		// Private
		var check = {
			if: function(){ 
				//variable arguments x,testfor,not
				var args = [];
				for(var i=0; i< arguments.length; i++){
					args.push(arguments[i]);
				};
				var not = args.pop(); //last argument is NOT/reverse, determines whether or not to reverse the result
				var testfor = args.pop(); //second to last argument is the type of test

				if(not){
					return !this['is_'+testfor].apply(this,args);
				}else{
					return this['is_'+testfor].apply(this,args);
				}
			},
			is_array: 	function(x)	{ 	return type(x).is('array');			},
			is_object: function(x)	{	return type(x).is('object');		},

			is_function: function(x){	return type(x).is('function');		},

			is_string: function(x)	{ 	return type(x).is('string');		},

			is_number: function(x)	{ 	return type(x).is('number');		},
			is_even: function(x)	{ 	return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 === 0;	},
			is_odd: function(x)		{ 	return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 !== 0; },
			is_infinite: function(x){	return this.is_number(x) && (x === Infinity || x === -Infinity); 					},
			is_nan: function(x)		{	return this.is_number(x) && Number.isNaN(x);										},

			is_boolean: function(x)	{ 	return type(x).is('boolean'); 		},
			is_true: function(x)	{	return x === true; 					},
			is_false: function(x)	{	return x === false; 				},

			is_null: function(x)	{	return type(x).is('null');			},
			is_undefined: function(x){	return type(x).is('undefined');		},
			is_defined: function(x) { 	return !this.is_undefined(x); 		},

			is_json: function(x)	{
				if(this.is_string(x)){
					try{
						if( this.is_object(JSON.parse(x)) || this.is_array(JSON.parse(x)) ){ return true; }
					}catch(e){
						log.warn(e.name + ": " + e.message);
						return false;
					}
				}
				return false;
			},
			is_empty: function(x){
				if( this.is_undefined(x) || this.is_null(x)){ return true; }
				if( this.is_string(x) ){ return x === ""; }
				if( this.is_array(x) ){ return x.length === 0; }
				if( this.is_object(x) ){
					for(var prop in x){
						if(x.hasOwnProperty(prop)){ return false; }
				    }
				    return true;
				}
				return !x;
			},
			is_inside: function(x,target){
				if( this.is_object(target) ){
					return _.includes( target, x ) || _.includes( _.keys(target), x );
				}
				return _.includes( target, x );
			}
		};

		// Reassigning all methods of the check object that starts with is_ to the is object
		//    check.is_number() ---> is.number()
		var is = {};
		is.negate = false;
		_.forIn(check,function(value,key){
			if(key.indexOf('is_') >= 0 ){
				key = key.replace('is_','');
				is[key] = function(){ 	//variable arguments
					var args = [];
					for(var i=0; i< arguments.length ; i++){
						args.push(arguments[i]);
					}
					// additional arguments
					args.push(key);
					args.push(this.negate);

					return check.if.apply(check, args);	
				};
			}
		});

		// chaining
		is.a 	= 	is;
		is.an 	= 	is;

		// negation
		is.not 	= 	_.clone(is);
		is.not.negate = true;

		/* 
		 * The exported library can be both:
		 *  (1) A function that returns an IS object with methods that call itself with the given value
		 *
		 *			is(3).number();								// example usage
		 *
		 *			is.number --> function(x){...}				// is
		 *			is.number --> function(){ is.number(x) }	// form of is returned by calling the function
		 *
		 *  (2) An is 'object' (properties are added to the function)
		 *			is.number(3);
		 *
		*/
		var isfunc = function(){ //variable arguments
			var newobj = {};
			
			var args = [];
			for(var i = 0; i< arguments.length; i++){
				args.push(arguments[i]);
			}

			_.forIn(is, function(value,key){
				if(  is.function( is[key] )  ){
					if( key === 'inside' ){
						newobj[key] = function(target){
							args.push(target);
							return is[key].apply(this,args)
						}
					}else{
						newobj[key] = is[key].apply(is,args);
					}
					
				}
				else{
					newobj[key] = is[key]
				}
			});

			newobj.a = newobj;
			newobj.an = newobj;
			newobj.not 	= 	_.clone(newobj);
			newobj.not.negate = true;

			return newobj;
		};

		for(var key in is){
			isfunc[key] = is[key];
		}

		return isfunc;

	})();

})();