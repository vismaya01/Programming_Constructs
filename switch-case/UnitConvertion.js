const prompt = require('prompt-sync')();
const value = prompt('enetr the value to be convert - ');
console.log("enter the option to be performed");
console.log("1. Feet to Inch  2. Inch to Feet  3. Feet to Meter   4. Meter to Feet");
const n = prompt('opition - ');
let converted = 0;
switch(Number(n)){
        case 1:
            converted = value * 12;
            break;
        case 2:
            converted = value / 12;
            break;
        case 3:
            converted = value / 3.2808;
            break;
        case 4:
            converted = value * 3.2808;
            break;
        default:
            console.log("Enter the correct option");
            break;
}
console.log("converted - "+converted);
