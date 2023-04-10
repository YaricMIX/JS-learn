function sumArray(array) {
	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number') {
		sum += array[i];
		}
	}

	return sum;
}

function findMinMax(array) {
	let min = null;
	let max = null;

	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'number' && !isNaN(array[i])) {
		if (min === null || array[i] < min) {
			min = array[i];
		}
		if (max === null || array[i] > max) {
			max = array[i];
		}
		}
	}

	return { min, max };
}


function buildPattern(rows) {
	let pattern = '';
	for (let i = 1; i <= rows; i++) {
		pattern += '#'.repeat(i) + '\n';
	}
	return pattern;
}
