const prompt = require('prompt-sync')();
let start = prompt("Enter starting number : ");
let end = prompt("Enter ending number : ");
let repeatedDigits = [];

for (let number = start; number <= end; number++) {
    let quotient = parseInt(number / 10);
    let remainder = number % 10;
    if (quotient == remainder && number != 0) {
        repeatedDigits.push(number);
    }
}
console.log("Repeated digits are : " + repeatedDigits);