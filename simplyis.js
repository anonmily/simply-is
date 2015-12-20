(function(global, factory) {
    'use strict';
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

    var forIn = function(obj, callback) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                callback(obj[key], key, obj)
            }
        }
    }

    var clone = function(x) {
        var copy;

        if (type(x).is('date')) {
            copy = new Date();
            copy.setTime(x.getTime());
            return copy;
        }
        if (type(x).is('array')) {
            copy = [].concat(x);
            return copy;
        }
        if (type(x).is('object')) {
            copy = {};
            forIn(x, function(value, key) {
                copy[key] = value;
            });
            return copy;
        };
        if (type(x).is('null') || type(x).is('undefined') || !type(x).is('object')) {
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
            is_argument: function(x) {
                return type(x).is('arguments');
            },
            is_array: function(x) {
                return type(x).is('array');
            },
            is_date: function(x) {
                return type(x).is('date');
            },
            is_boolean: function(x) {
                return type(x).is('boolean');
            },
            is_decimal: function(x) {
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && (x.toString().indexOf('.') > 0);
            },
            is_defined: function(x) {
                return !this.is_undefined(x);
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
            is_error: function(x) {
                return type(x).is('error');
            },
            is_even: function(x) {
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 === 0;
            },
            is_equal: function(x, y) {
                if (this.is_object(x) && this.is_object(y)) {

                    // do they have the same properties?
                    if (Object.keys(x).sort().join(",") !== Object.keys(y).sort().join(",")) {
                        return false;
                    } else {

                        // Check if all values are equal
                        // For some reason, forIn isn't working here. 
                        // Not a scoping issue, perhaps has to do with breaking out of the loop from the callback?
                        for (var key in x) {
                            if (x.hasOwnProperty(key)) {
                                if (x[key] !== y[key]) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    }
                } else {
                    return x === y;
                }
            },
            is_false: function(x) {
                return x === false;
            },
            is_function: function(x) {
                return type(x).is('function');
            },
            is_infinite: function(x) {
                return this.is_number(x) && (x === Infinity || x === -Infinity);
            },
            is_integer: function(x) {
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && (x.toString().indexOf('.') <= 0);
            },
            is_inArray: function(x, arr) {
                if (!this.is_array(arr)) {
                    throw new TypeError('check.is_inArray needs a valid array');
                } else {
                    return arr.indexOf(x) >= 0;
                }
            },
            is_inObject: function(x, obj) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key) && (key === x || obj[key] === x)) {
                        return true;
                    }
                }
                return false;
            },
            is_instanceOf: function(child, parentConstructor) {
                return child instanceof parentConstructor;
            },
            is_inside: function(x, target) {
                if (this.is_object(target)) {
                    return this.is_inObject(x, target);
                } else if (this.is_array(target)) {
                    return this.is_inArray(x, target);
                } else if (this.is_string(target)) {
                    return target.indexOf(x) >= 0;
                }
                return false;
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
            is_nan: function(x) {
                return this.is_number(x) && Number.isNaN(x);
            },
            is_null: function(x) {
                return type(x).is('null');
            },
            is_number: function(x) {
                return type(x).is('number');
            },
            is_object: function(x) {
                return type(x).is('object');
            },
            is_odd: function(x) {
                return this.is_number(x) && !this.is_infinite(x) && !this.is_nan(x) && x % 2 !== 0;
            },
            is_regexp: function(x) {
                return type(x).is('regexp');
            },
            is_sameType: function(obj, typecompare){
                var check = this;
                var result = true;
                forIn(obj, function(val,key){
                    // if the type comparison object doesn't have the key, don't restrain/check it
                    if( check.is_defined(typecompare[key]) ){
                        if( !type(val).is( typecompare[key].toLowerCase() ) ){
                            result = false;
                            return false;
                        }
                    }
                });
                return result;
            },
            is_string: function(x) {
                return type(x).is('string');
            },
            is_true: function(x) {
                return x === true;
            },
            is_undefined: function(x) {
                return type(x).is('undefined');
            },

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
         *          is(3).number();                             // example usage
         *
         *          is.number --> function(x){...}              // is
         *          is.number --> function(){ is.number(x) }    // form of is returned by calling the function
         *
         *  (2) An is 'object' (properties are added to the function)
         *          is.number(3);
         *
         */
        var isfunc = function() { //variable arguments

            var newobj = {};
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
            }

            // these functions need more than one argument
            var functions = ['equal', 'inside', 'inArray', 'inObject', 'instanceOf', 'sameType', 'siblingOf'];

            // Go through all properties of the is object
            forIn(is, function(value, key) {

                // we only care about the functions
                if (is.function(is[key])) {

                    // if the method is inside the list of functions that need more than one argument
                    if (functions.indexOf(key) >= 0) {

                        newobj[key] = function(target) {
                            var newargs = [];
                            newargs = args.concat([target]);
                            return is[key].apply(this, newargs);
                        };

                    } else {

                        // lazy initialization, only calculate the result when you need it, instead of doing all calculations beforehand and saving the result
                        Object.defineProperty(newobj, key, {
                            get: function() {
                                return is[key].apply(is, args);
                            }
                        });

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