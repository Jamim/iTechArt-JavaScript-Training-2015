function curry(f) {
	"use strict";

	var len = f.length;
	if (len == 0)
		return f

	function next(args) {
		return function(a) {
			var current_args = args.slice();
			current_args.push(a);
			if (current_args.length == len)
				return f.apply(null, current_args);
			else
				return next(current_args);
		}
	}

	return next([]);
}
