const prompt = require('prompt-sync')();
const a = prompt("enter the lower bound of interval - ");
const b = prompt("enter the upper bound of interval - - ");
for(let i = a; i <= b; i++){
        if ( i == 1 || i == 0 ){
                continue;
        }
        let flag = 1;
        for ( let j = 2; j <= i/2; ++j ){
                if ( (i % j) == 0 ){
                        flag = 0;
                        break;
                }
        }
        if ( flag == 1 ){
                console.log(i);
        }
}
