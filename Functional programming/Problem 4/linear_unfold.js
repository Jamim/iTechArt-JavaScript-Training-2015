function F(callback, initialValue) {
	"use strict";

	var array = [];
	var tuple = callback(initialValue);

	while (tuple) {
		var element = tuple[0];
		var stateValue = tuple[1];
		array.push(element);
		tuple = callback(stateValue);
	}

	return array;
}
