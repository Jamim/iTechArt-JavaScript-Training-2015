function F() {
	"use strict";

	var toArray = Array.prototype.slice;
	var argsCount = arguments.length - 1;
	var args = toArray.call(arguments, 0, argsCount);
	var g = arguments[argsCount];

	var h = function() {
		var current_args = args.concat(toArray.call(arguments));
		return g.apply(g, current_args);
	}

	return h;
}
