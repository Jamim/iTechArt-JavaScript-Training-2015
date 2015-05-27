function memoization(f) {
	"use strict";

	var cache = [];
	var g = function(a) {
		if (!(a in cache))
			cache[a] = f(a);
		return cache[a];
	}

	return g;
}
