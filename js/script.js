let firstnumber = prompt('Enter your first number');
let secondnumber = prompt('Enter your second number');
let plus;
let minus;
let multiply;
let divide;

plus = (Number(firstnumber) + Number(secondnumber));
minus = (Number(firstnumber) - Number(secondnumber));
multiply = (Number(firstnumber) * Number(secondnumber));
divide = (Number(firstnumber) / Number(secondnumber));

alert(`Plus ${plus}` + ` ` + `Minus ${minus}` + ` ` + `Multiply ${multiply}` + ` ` + `Divide ${divide}`);