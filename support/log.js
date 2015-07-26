(function(){
	var log = function(config){

		color = require('colors');

		var infolog = function(message){
			if(config.SHOW_DEBUG){
				console.log(message.grey);
			}
		};
		var warnlog = function(message){
			if(config.SHOW_DEBUG){
				console.log(message.yellow);
			}
		};
		var successlog = function(message){
			if(config.SHOW_DEBUG){
				console.log(message.green);
			}
		};
		var errorlog = function(message){
			if(config.SHOW_ERRORS){
				console.error(message.red);
			}
		};
		var obj = infolog;
		obj.info = infolog;
		obj.warn = warnlog;
		obj.warning = obj.warn;
		obj.error = errorlog;
		obj.success= successlog;

		return obj;
	};

	module.exports = log;
})();