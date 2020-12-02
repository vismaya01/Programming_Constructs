const prompt = require('prompt-sync')();
const number = prompt("enter the number - ");
let power=1
for( varY=0; varY <= number; varY++ ){
        if( varY == 0 ){
                power = 1;
        }
        else {
                power = power * 2;
        }
        console.log(varY+" ---- "+power);
}
