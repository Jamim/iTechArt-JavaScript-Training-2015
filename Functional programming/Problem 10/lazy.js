function lazy(f) {
	"use strict";

	var args = Array.prototype.slice.call(arguments, 1);
	return function() {
		f.apply(null, args)
	};
}
