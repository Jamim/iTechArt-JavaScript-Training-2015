function Map(f, array) {
	"use strict";

	var new_array = [];
	for (var index = 0; index < array.length; index++)
		new_array.push(f(array[index]));

	return new_array;
}

function nativeMap(f, array) {
	"use strict";

	return array.map(f);
}
