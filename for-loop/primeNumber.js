const prompt = require('prompt-sync')();
const number = prompt("enter the number - ");
for(i = 2; i <= number / 2; i++){
  if ( (number % i) == 0 ){
    console.log(number+" is not a prime number.");
    process.exit();
  }
}
console.log(number+" is a prime number.");
