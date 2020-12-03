const prompt = require('prompt-sync')();
let number = Number(prompt("Enter number to compute its prime factors:"));
let flag = 1;
var primeFactors = new Array();
array_counter = 0;
for(let i = 2; i <= number; i++){
        if(number% i == 0){
            flag = 1;
            for(let j = 2; j <= i/2; j++){
                if(i % j == 0){
                    flag = 0;
                    break;
                }
            }
            if (flag == 1){
                primeFactors[array_counter++]=i;
            }
        }
}
if(number == 1)
        console.log("1 has no prime factors.");
else
        console.log("Prime factors of "+number+ " are :"+primeFactors);