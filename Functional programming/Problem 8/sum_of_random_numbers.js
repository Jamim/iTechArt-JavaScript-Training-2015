function sumOfRandomNumbers() {
	"use strict";

	var random_numbers = unfold(function(x) { return x > 0 && [Math.random() * 42, x - 1]; }, 10);
	var sum = fold(random_numbers, function(s, value) { return s + value; }, 0);

	return sum;
}
