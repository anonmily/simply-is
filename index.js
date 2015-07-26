(function(){

	var config = require('./support/config');
	var log = require('./support/log')(config);
	var _ = require('lodash');

	module.exports = (function(){
		// Private
		var check = {
			if: function(x,testfor,not){ 
				if(not){
					return !this['is_'+testfor](x);
				}else{
					return this['is_'+testfor](x);
				}
			},
			is_array: 	function(x)	{ 	return !this.is_null(x) && !this.is_undefined(x) && x.constructor === Array; 		},
			is_object: function(x)	{	return !this.is_null(x) && !this.is_undefined(x) && x.constructor === Object; 		},
			is_string: function(x)	{ 	return !this.is_null(x) && !this.is_undefined(x) && x.constructor === String; 		},

			is_number: function(x)	{ 	return !this.is_null(x) && !this.is_undefined(x) && x.constructor === Number; 		},
			is_even: function(x)	{ 	return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 === 0;	},
			is_odd: function(x)		{ 	return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 !== 0; },
			is_infinite: function(x){	return this.is_number(x) && (x === Infinity || x === -Infinity); 					},
			is_nan: function(x)		{	return this.is_number(x) && Number.isNaN(x);										},

			is_boolean: function(x)	{ 	return !this.is_null(x) && !this.is_undefined(x) && x.constructor === Boolean; 		},
			is_true: function(x)	{	return x === true; 		},
			is_false: function(x)	{	return x === false; 	},

			is_null: function(x)	{	return x === null;					},
			is_undefined: function(x){	return typeof x === 'undefined';	},

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
			}
		};

		// Reassigning all methods of the check object that starts with is_ to the is object
		//    check.is_number() ---> is.number()
		var is = {};
		_.forIn(check,function(value,key){
			if(key.indexOf('is_') >= 0 ){
				key = key.replace('is_','');
				is[key] = function(x){ 	return check.if(x,key, this.is_not);	};
			}
		});

		// chaining
		is.a 	= 	is;
		is.an 	= 	is;

		// negation
		is.not 	= 	_.clone(is);
		is.not.is_not = true;

		/* 
		 * The exported library can be both:
		 *  (1) A function that returns an IS object that has methods that call itself
		 *			is.number --> function(x){...}				// original is object
		 *			is.number --> function(){ is.number(x) }	// form returned from function
		 *  (2) An is object (properties are added to the function)
		*/
		var isfunc = function(x){
			var newobj = {};

			_.forIn(is,function(value,key){
				if(is[key].constructor === Function){
					newobj[key] = function(){ return is[key](x); }
				}
				else{
					newobj[key] = is[key]
				}
			});

			newobj.a = newobj;
			newobj.an = newobj;
			newobj.not 	= 	_.clone(newobj);
			newobj.not.is_not = true;

			return newobj;
		};

		for(var key in is){
			isfunc[key] = is[key];
		}

		return isfunc;

	})();

})();