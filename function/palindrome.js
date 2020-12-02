const prompt = require('prompt-sync')();
let num =Number(prompt("enter the number - "));
let number = num;
let reverse = getPalindrome(num);
if (number == reverse ){
        console.log("Number is palindrome");
}
else{
        console.log("Number is not palindrome");
}

function getPalindrome(){
        let c=0
        while ( num > 0 ){
                let a = num % 10;
                num = Math.floor(num / 10);
                c = (c * 10) + a;
        }
        return c;
}
