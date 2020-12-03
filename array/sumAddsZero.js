const prompt = require('prompt-sync')();
let length = Number(prompt("Enter total numbers in array:"));
console.log("Enter numbers to check if three numbers adds to zero :");
var array = new Array();
for (let i = 0; i < length; i++){
        array[i] = Number(prompt("Enter a number "+(i+1)+" : "));
}
console.log("Array :"+array);
let found = 0;
for(let i = 0; i < array.length-2; i++){
        for(let j = i+1; j < array.length-1; j++){
            for(let k = j + 1; k < array.length; k++){
                if( array[i] + array[j] + array[k] == 0){
                    console.log("Sum of three integer adds to zero are: "+array[i]+","+array[j]+","+array[k]);
                    found = 1;
                }
            }
        }
}
if(found == 0)
        console.log("The given integer are not adds to zero.");
