function calculate() {
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
	const addResult = add(Number(a), Number(b));
	const subtractResult = subtract(Number(a), Number(b));
	const multiplyResult = multiply(Number(a), Number(b));
	const divideResult = divide(Number(a), Number(b));

	const num = document.getElementById("num");
	num.innerHTML = `
		<li>Number 1: <span style="color: ${a >= 0 ? 'green' : 'red'}">${a}</li>
		<li>Number 2: <span style="color: ${b >= 0 ? 'green' : 'red'}">${b}</li>
	`;

	const results = document.getElementById("results");
	const addColor = mapToColor(addResult);
	const subtractColor = mapToColor(subtractResult);
	const multiplyColor = mapToColor(multiplyResult);
	const divideColor = mapToColor(divideResult);
	results.innerHTML = `
	<p>Addition result ${a} and ${b}: <span style="color: ${addColor}">${addResult}</span></p>
	<p>Subtraction result ${b} from ${a}: <span style="color: ${subtractColor}">${subtractResult}</span></p>
	<p>The result of multiplication ${a} on ${b}: <span style="color: ${multiplyColor}">${multiplyResult}</span></p>
	<p>The result of division ${a} on ${b}: <span style="color: ${divideColor}">${divideResult}</span></p>
	`;
}

function mapToColor(value) {
	const absValue = Math.abs(value);
	const scale = 255 / 1000;
	const colorValue = Math.floor(absValue * scale);
	if (value >= 0) {
		return `rgb(${colorValue}, ${255 - colorValue}, 0)`;
	} else {
		return `rgb(${255 - colorValue}, ${colorValue}, 0)`;
	}
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		return "The second parameter cannot be zero!";
	}
	return a / b;
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
