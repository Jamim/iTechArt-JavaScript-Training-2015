(function() {
	"use strict";

	var getLogger = function() {
		function TrainingLogger(loggingMethod) {
			this.loggingMethod = loggingMethod;
			this.entries = [];
			this.entryConstructor = Entry;
		}

		TrainingLogger.prototype = {
			constructor: TrainingLogger,

			log: function() {
				if (arguments.length === 0)
					throw "Empty arguments not accepted for training_logger.log";

				var entry = new this.entryConstructor(arguments);
				this.entries.push(entry);

				if (this.loggingMethod)
					this.loggingMethod(entry.toString());
			},

			setLoggingMethod: function(loggingMethod) {
				this.loggingMethod = loggingMethod;
			},

			setLoggingMethodConsoleLog: function() {
				this.setLoggingMethod(console.log.bind(console));
			},

			setLoggingMethodConsoleInfo: function() {
				this.setLoggingMethod(console.info.bind(console));
			},

			setLoggingMethodConsoleWarn: function() {
				this.setLoggingMethod(console.warn.bind(console));
			},

			setLoggingMethodConsoleError: function() {
				this.setLoggingMethod(console.error.bind(console));
			},

			setLoggingMethodAlert: function() {
				this.setLoggingMethod(alert.bind(window));
			},

			toString: function() {
				var entries = this.entries;
				var length = entries.length;
				var lines = [];
				for (var i = 0; i < length; i++)
					lines.push(entries[i].toString());
				return lines.join('\n');
			},

			toConsole: function() {
				console.log(this.toString());
			},

			toAlert: function() {
				alert(this.toString());
			},

			toEndpoint: function(endpoint) {
				endpoing.send(this.toString());
			}
		}

		function Entry(args) {
			this.time = new Date();
			this.data = args.length === 1 && args[0] || Array.prototype.slice.call(args);
		}

		Entry.prototype.toString = function() {
			var time = this.time;
			var data = this.data;
			var message = data instanceof Array && data.join(', ') || data;

			return time + ': ' + data;
		}

		var logger = new TrainingLogger();

		window.onerror = function() {
			logger.log.apply(logger, arguments);
			return true;
		}

		return logger;
	};

	if ('define' in window) // AMD
		define(getLogger);
	else if ('module' in window) // CommonJS
		module.exports = getLogger()
	else // global variable
		window.logger = getLogger();
})();
