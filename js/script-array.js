function add() {
	const a = prompt("Enter the first number:");
	if (isNaN(a)) {
		console.log("The first parameter is not a number!");
		return NaN;
	}
	const b = prompt("Enter the second number:");
	if (isNaN(b)) {
		console.log("The second parameter is not a number!");
		return NaN;
	}
	const result = Number(a) + Number(b);
	console.log(`Addition result ${a} and ${b}: ${result}`);
	return result;
}

function subtract() {
	const a = prompt("Enter the first number:");
	if (isNaN(a)) {
		console.log("The first parameter is not a number!");
		return NaN;
	}
	const b = prompt("Enter the second number:");
	if (isNaN(b)) {
		console.log("The second parameter is not a number!");
		return NaN;
	}
	const result = Number(a) - Number(b);
	console.log(`Subtraction result ${b} from ${a}: ${result}`);
	return result;
}

function multiply() {
	const a = prompt("Enter the first number:");
	if (isNaN(a)) {
		console.log("The first parameter is not a number!");
		return NaN;
	}
	const b = prompt("Enter the second number:");
	if (isNaN(b)) {
		console.log("The second parameter is not a number!");
		return NaN;
	}
	const result = Number(a) * Number(b);
	console.log(`The result of multiplication ${a} on ${b}: ${result}`);
	return result;
}

function divide() {
	const a = prompt("Enter the first number:");
	if (isNaN(a)) {
		console.log("The first parameter is not a number!");
		return NaN;
	}
	const b = prompt("Enter the second number:");
	if (isNaN(b)) {
		console.log("The second parameter is not a number!");
		return NaN;
	}
	if (Number(b) === 0) {
		console.log("The second parameter cannot be zero!");
		return NaN;
	}
	const result = Number(a) / Number(b);
	console.log(`The result of division ${a} on ${b}: ${result}`);
	return result;
}


const array = [2, 7, 2, 250, 1, 2, 4, 'a', 7, 0];

function findMin(array) {
	if (!Array.isArray(array)) {
		console.log('Error: argument should be an array');
		return;
	}
	let min = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) {
		min = array[i];
		}
	}
	return min;
}

function findMax(array) {
	if (!Array.isArray(array)) {
		console.log('Error: argument should be an array');
		return;
	}
	let max = array[0];
	for (let i = 1; i < array.length; i++) {
		if (array[i] > max) {
		max = array[i];
		}
	}
	return max;
}