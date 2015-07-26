(function(){

	var config = require('./support/config');
	var log = require('./support/log')(config);
	var _ = require('lodash');

	module.exports = (function(){
		// Private
		var check = {
			if: function(x,testfor,not){ 
				if(not){
					//log(testfor);
					//log('NOT | ' + "this['is_"+testfor+"']("+x+"): " + this['is_'+testfor](x) ); 
					//log('      ' + "!this['is_"+testfor+"']("+x+"): " + !this['is_'+testfor](x) ); 
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
			is_odd: function(x)		{ 	return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 !== 0; 	},
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
			}
		};

		// Public
		var is = {};
		is.empty = function(obj){
			if(typeof obj == 'undefined'){ return true; }
			if(obj === null){ return true; }
			if(obj.constructor == String){ return obj === ""; }
			if(obj.constructor == Array){ return obj.length === 0; }
			if(obj.constructor == Object){
				for(var prop in obj){
					if(obj.hasOwnProperty(prop)){ return false; }
			    }
			    return true;
			}
			return !obj;
		};
		is.array = function(x)		{ 	return check.if(x,'array', this.is_not);		};
		is.object= function(x)		{ 	return check.if(x,'object', this.is_not);		};
		is.string= function(x)		{ 	return check.if(x,'string', this.is_not);		};

		is.number= function(x)		{ 	return check.if(x,'number', this.is_not);		};
		is.even = function(x)		{ 	return check.if(x,'even', this.is_not);			};
		is.odd = function(x)		{ 	return check.if(x,'odd', this.is_not);			};
		is.nan = function(x)		{ 	return check.if(x,'nan', this.is_not);			};
		is.infinite = function(x)	{ 	return check.if(x,'infinite', this.is_not);		};

		is.boolean= function(x)		{ 	return check.if(x,'boolean', this.is_not); 		};
		is.true = function(x)		{ 	return check.if(x,'true', this.is_not); 		};
		is.false = function(x)		{ 	return check.if(x,'false', this.is_not); 		};

		is.json = function(x)		{ 	return check.if(x,'json', this.is_not);			};
		is.null = function(x)		{ 	return check.if(x,'null', this.is_not);			};
		is.undefined = function(x)	{ 	return check.if(x,'undefined', this.is_not);	};
		
		// chaining
		is.a 	= 	is;
		is.an 	= 	is;

		// negation
		is.not 	= 	_.clone(is);
		is.not.is_not = true;;

		return is;

	})();

})();