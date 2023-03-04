const array = [2, 7, 2, 0, 1, 2, 4, 'a', 7, 0];
let sum = 0;
let min = array[0];
let max = array[0];

for (let i = 0; i < array.length; i++) {
	if (typeof array[i] === 'number') {
		sum += array[i];
	}
}


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

let pattern = '';
for (let i = 1; i <= 5; i++) {
	pattern += '#'.repeat(i) + '\n';
}

console.log(array);
console.log(sum);
console.log('Minimum value:', min);
console.log('Maximum value:', max);
console.log(pattern);