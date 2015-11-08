(function(global, factory) {
    if (typeof module === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        window.simplyIs = factory(_);
    }

}(typeof window !== "undefined" ? window : this, function factory() {
    var type = function(x) {
        return {
            type: Object.prototype.toString.call(x).replace('[object ', '').replace(']', '').toLowerCase(),
            is: function(y) {
                return this.type === y;
            }
        };
    };

    var forIn = function(obj, callback){
        for(var key in obj){
            if( obj.hasOwnProperty(key) ){
                callback( obj[key], key, obj)
            }
        }
    }

    var clone = function(x){
        var copy;

        if( type(x).is('date') ){
            copy = new Date();
            copy.setTime(x.getTime());
            return copy;
        }
        if( type(x).is('array') ){
            copy = [].concat(x);
            return copy;
        }
        if( type(x).is('object') ){
            copy = {};
            forIn(x,function(value,key){
                copy[key] = value;
            });
            return copy;
        };
        if( type(x).is('null') || type(x).is('undefined') || !type(x).is('object') ){
            return x;
        }
        
    }

    var simplyIs = (function() {
        // Private
        var check = {
            if: function() {
                //variable arguments x,testfor,not
                var args = [];
                for (var a = 0; a < arguments.length; a++) {
                    args.push(arguments[a]);
                }
                var not = args.pop(); //last argument is NOT/reverse, determines whether or not to reverse the result
                var testfor = args.pop(); //second to last argument is the type of test

                if (not) {
                    return !this['is_' + testfor].apply(this, args);
                } else {
                    return this['is_' + testfor].apply(this, args);
                }
            },
            is_argument: function(x){
                return type(x).is('arguments');
            },
            is_array: function(x) {
                return type(x).is('array');
            },
            is_boolean: function(x) {
                return type(x).is('boolean');
            },
            is_function: function(x) {
                return type(x).is('function');
            },
            is_number: function(x) {
                return type(x).is('number');
            },
            is_object: function(x) {
                return type(x).is('object');
            },
            is_regexp: function(x){
                return type(x).is('regexp');
            },
            is_string: function(x) {
                return type(x).is('string');
            },

            is_true: function(x) {
                return x === true;
            },
            is_false: function(x) {
                return x === false;
            },

            is_null: function(x) {
                return type(x).is('null');
            },
            is_undefined: function(x) {
                return type(x).is('undefined');
            },
            is_defined: function(x) {
                return !this.is_undefined(x);
            },
            is_error: function(x){
                return type(x).is('error');
            },

             // Numbers
            is_integer: function(x){
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && (x.toString().indexOf('.') <= 0) ;
            },
            is_decimal: function(x){
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && (x.toString().indexOf('.') > 0) ;
            },
            is_even: function(x) {
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 === 0;
            },
            is_odd: function(x) {
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 !== 0;
            },
            is_infinite: function(x) {
                return this.is_number(x) && (x === Infinity || x === -Infinity);
            },
            is_nan: function(x) {
                return this.is_number(x) && Number.isNaN(x);
            },


            is_json: function(x) {
                if (this.is_string(x)) {
                    try {
                        if (this.is_object(JSON.parse(x)) || this.is_array(JSON.parse(x))) {
                            return true;
                        }
                    } catch (e) {
                        //console.log(e.name + ": " + e.message);
                        return false;
                    }
                }
                return false;
            },
            is_empty: function(x) {
                if (this.is_undefined(x) || this.is_null(x)) {
                    return true;
                }
                if (this.is_string(x)) {
                    return x === "";
                }
                if (this.is_array(x)) {
                    return x.length === 0;
                }
                if (this.is_object(x)) {
                    for (var prop in x) {
                        if (x.hasOwnProperty(prop)) {
                            return false;
                        }
                    }
                    return true;
                }
                return !x;
            },
            is_inArray: function(x, arr){
                if( !this.is_array(arr) ){
                    throw new TypeError('check.is_inArray needs a valid array');
                }else{
                    return arr.indexOf(x) >= 0;
                }
            },
            is_inObject: function(x,obj){
                for(var key in obj){
                    if( obj.hasOwnProperty(key) && ( key === x || obj[key] === x ) ){
                        return true;
                    }
                }
                return false;
            },

            is_instanceOf: function(child,parentConstructor){
                return child instanceof parentConstructor;
            },
            is_inside: function(x, target) {
                if (this.is_object(target)){
                    return this.is_inObject(x,target);
                }else if( this.is_array(target) ){
                    return this.is_inArray(x,target);
                }else if( this.is_string(target) ){
                    return target.indexOf(x) >= 0;
                }
                return false;
            }
        };

        // Reassigning all methods of the check object that starts with is_ to the is object
        //    check.is_number() ---> is.number()
        var is = {};
        is.negate = false;
        forIn(check, function(value, key) {
            if (key.indexOf('is_') >= 0) {
                key = key.replace('is_', '');
                is[key] = function() { //variable arguments
                    var args = [];
                    for (var i = 0; i < arguments.length; i++) {
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
        is.a = is;
        is.an = is;

        // negation
        is.not = clone(is);
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
        var isfunc = function() { //variable arguments

            var newobj = {};
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }
            var functions = ['inside','inArray','inObject','instanceOf','siblingOf'];

            
            forIn(is, function(value, key) {
                if (is.function(is[key])) {
                    if ( functions.indexOf(key) >= 0 ) {
                     
                        newobj[key] = function(target) {
                            var newargs = [];
                            newargs = args.concat([target]);
                            return is[key].apply(this, newargs);
                        };

                    } else {
                        newobj[key] = is[key].apply(is, args);
                    }

                } else {
                    newobj[key] = is[key];
                }
            });

            

            newobj.a = newobj;
            newobj.an = newobj;
            newobj.not = clone(newobj);
                newobj.not.negate = true;

            return newobj;
        };

        for (var key in is) {
            if (is.hasOwnProperty(key)) {
                isfunc[key] = is[key];
            }
        }

        return isfunc;

    })();

    if (typeof window === 'object') {
        window.simplyIs = simplyIs;
    } else {
        this.simplyIs = simplyIs;
    }

    return simplyIs;

}));