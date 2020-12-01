const prompt = require('prompt-sync')();
const number = prompt('Enter number - ');
switch(Number(number)){
    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("Enter a correct number");
        break;
}
