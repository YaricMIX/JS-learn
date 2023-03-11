function isEmpty(obj) {
	return Object.keys(obj).length === 0;
}

const obj = {name: 'John', age: 30};
console.log(isEmpty(obj));

const user = {
	name: 'Петро',
	age: 30,
	sayHello() {
		return `Привіт, я ${this.name}, мені ${this.age} років`;
	}
};

console.log(user.sayHello());


const calculator = {
	num1: null,
	num2: null,
	ask() {
		this.num1 = Number(prompt('Введіть перше число:'));
		this.num2 = Number(prompt('Введіть друге число:'));
	},
	sum() {
		return this.num1 + this.num2;
	},
	mul() {
		return this.num1 * this.num2;
	}
};

console.log(calculator.sum());
console.log(calculator.mul());
