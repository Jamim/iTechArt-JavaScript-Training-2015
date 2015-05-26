function F(array, callback, initialValue) {
	"use strict";

	var previousValue = initialValue;
	for (var index = 0; index < array.length; index++) {
		var currentValue = array[index];
		previousValue = callback(previousValue, currentValue, index, array)
	}

	return previousValue;
}

function alternativeF(array, callback, initialValue) {
	"use strict";

	return array.reduce(callback, initialValue);
}
