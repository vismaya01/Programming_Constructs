const prompt = require('prompt-sync')();
const number = prompt("enter the number - ");
let factorial=1
for( let i = 1;  i <= number;  i++ ) {
	  	factorial = factorial * i;
}
console.log("The factorial of "+number+" is " +factorial);
