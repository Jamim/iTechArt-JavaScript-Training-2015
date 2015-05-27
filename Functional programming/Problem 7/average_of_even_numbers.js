function averageOfEvenNumbers(array) {
	"use strict";

	var filtered_array = filter(function(x) { return x % 2 === 0; }, array);
	var sum = fold(filtered_array, function(s, value) { return s + value; }, 0);

	return sum / filtered_array.length;
}
