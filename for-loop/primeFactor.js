const prompt = require('prompt-sync')();
const number = prompt("enter the number - ");
if ( number < 1 ){
        console.log("not allowed!");
        process.exit();
}
let count=0;
let flag=0;
for(i = 2; i < number; i++){
        if ( (number % i) == 0 ){
                let factor = i;
                for (j = 2; j <= factor/2 ; j++){
                        flag = 0;
                        if ((factor % j) == 0 ){
                                flag = 1;
                                break;
                        }
                }
                if ( flag == 0 ){
                        console.log("Prime Factor - "+factor );
                        count = 1;
                }
        }
}
if ( count == 0 ){
        console.log("no prime factors found except 1 and "+input);
}
