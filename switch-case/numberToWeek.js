const prompt = require('prompt-sync')();
const number = prompt('Enter number between 1 to 7  -  ');
switch(Number(number)){
    case 1:
        console.log("Sunday");
        break;       
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("enter value between 1 to 7" );
        break;
}
