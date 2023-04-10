function performAccumulatorOperations(initialValue) {
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

	const accumulatorClass = Accumulator.bind(null, initialValue);
	const cancelableAccumulatorClass = CancelableAccumulator.bind(null, initialValue);

	return { AccumulatorClass: accumulatorClass, CancelableAccumulatorClass: cancelableAccumulatorClass };
}
