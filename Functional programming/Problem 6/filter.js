function filter(f, array) {
	"use strict";

	var new_array = [];
	for (var index = 0; index < array.length; index++) {
		var element = array[index];
		if (f(element))
			new_array.push(element);
	}

	return new_array;
}

function nativeFilter(f, array) {
	"use strict";

	return array.filter(f);
}
