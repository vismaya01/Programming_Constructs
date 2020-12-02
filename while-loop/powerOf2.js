const prompt = require('prompt-sync')();
const n = prompt("enter the number - ");
let power=1
varY=0
if ( n > 8 ){
        while ( varY <= 8 ){
                if (varY == 0 ){
                        power = 1;
                }
                else {
                        power = power * 2;
                }
                console.log(varY+"  ---- "+power);
                varY++;
        }
}
else{
        while (varY <= n ){
                if (varY == 0 ){
                        power = 1;
                }
                else {
                        power = power * 2; 
                }
                console.log(varY+"  ---- "+power);
                varY++;
        }
}
