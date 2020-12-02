const prompt = require('prompt-sync')();
const number = prompt("enter the number - ");
let sum=0
for( varY=1; varY <= number; varY++ ){
        let harmonic = 1 / varY;
        sum = sum + harmonic;
}
console.log("Nth harmonic number - " +sum);
