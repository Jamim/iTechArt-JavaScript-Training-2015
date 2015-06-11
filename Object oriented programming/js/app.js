(function() {
	"use strict";

	var app = function(logger) {
			logger.log('Hello, world');
			logger.log('Hello', 'logger');
			logger.log(new Date());
			logger.log(42);
			logger.log(1,2,3);
			logger.log('Hi', 'console');

			logger.toConsole();
		//	logger.toAlert();


			logger.setLoggingMethodConsoleLog();
			logger.log('log');

			logger.setLoggingMethodConsoleInfo();
			logger.log('info');

			logger.setLoggingMethodConsoleWarn();
			logger.log('warn');

			logger.setLoggingMethodConsoleError();
			logger.log('error');

		//	logger.setLoggingMethodAlert();
		//	logger.log('alert');

			logger.setLoggingMethod(function(message) {
				console.log('Custom logging method, ' + message);
			});
			logger.log('custom');


			logger.toString = function() {
				return this.entries;
			}
			logger.toConsole();
	};

	if ('define' in window)
		define(['./training_logger'], app);
	else if ('require' in window)
		app(require('./training_logger'));
	else
		app(logger);
})();
