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

if(Number(secondnumber) == 0) divide = 'Division is impossible';


if(firstnumber == '' || secondnumber == ''){
	alert('Error')
} else {
	if(Number(firstnumber) < Number(secondnumber)) {

		const action = confirm('Are you sure you want to proceed with the operation?');
	
		if(action == false){
			alert(`Plus: ${plus}`);
			alert(`Multiply: ${multiply}`);
			alert(`Divide: ${divide}`);
		} else{
			alert(`Plus: ${plus}`);
			alert(`Minus: ${minus}`);
			alert(`Multiply: ${multiply}`);
			alert(`Divide: ${divide}`);
		}
	
	} else {
		alert(`Plus: ${plus}`);
		alert(`Minus: ${minus}`);
		alert(`Multiply: ${multiply}`);
		alert(`Divide: ${divide}`);
	}
}
