class Accumulator {
	constructor(value) {
		this.value = value;
	}

	increment() {
		this.value++;
	}

	decrement() {
		this.value--;
	}
}

class CancelableAccumulator extends Accumulator {
	constructor(value) {
		super(value);
		this.originalValue = value;
	}

	clear() {
		this.value = this.originalValue;
	}
}
const value = parseInt(prompt('Enter the initial value of Accumulator:'));

const acc = new CancelableAccumulator(value);

acc.increment();
console.log(acc.value);

acc.increment();
console.log(acc.value);

acc.decrement();
console.log(acc.value);

acc.clear();
console.log(acc.value);