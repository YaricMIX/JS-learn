Array.prototype.pow = function(n) {
let gradingArr = [];

for (var i = 0; i < this.length; i++) {
	let gradingVal = Math.pow(this[i], n);
	gradingArr.push(gradingVal);
}
	return gradingArr;
};

let arr = [1, 2, 3];
let gradingArr = arr.pow(2);
console.log(gradingArr);

function a() {
	alert("test");
}

Function.prototype.defer = function(n) {
	let fn = this;
	setTimeout(function() {
		fn();
	}, n);
};

a.defer(1000);