const prompt = require('prompt-sync')();
const value = prompt("enter the number - ");
var lower = 1;
var upper = 100;
var mid = 0;
while (lower <= upper ){
        var mid =Math.floor(lower + upper / 2);
        if (value == mid){
                console.log("The number is "+mid)
                process.exit()
        }
        else if(value < mid){
                upper = mid - 1;
        }
        else if(value > mid) {
                lower = mid + 1;
        }
}
