function first(condition, array) {
	"use strict";

	for (var index = 0; index < array.length; index++) {
		var element = array[index];
		if (condition(element))
			return element;
	}
}
