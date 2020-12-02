
function getPrime(num){
        for(vari = 2; vari <= num / 2; vari++){
                if ( (num % vari) == 0 ){
                        return (num+" is not a prime number.");
                        process.exit();
                }
        }
        retrun (num+" is a prime number.");
}
function getPalindrome(num){
        let c=0;
        while ( num > 0 ){
                let a = num % 10;
                num = Math.floor(num / 10);
                c = (c * 10) + a;
        }
        return c;
}
const prompt = require('prompt-sync')();
let num =Number(prompt("enter the number - "));
let prime =getPrime(num);
let palindrome = getPalindrome(num)
let prime1 = getPrime(palindrome);
console.log(prime);
console.log(palindrome+" palindrome of "+num);
console.log(prime1);
