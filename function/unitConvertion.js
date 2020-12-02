
function getFahrenheit(){
        let tc =Number(prompt("Enter temperature (C) : "));
        if (tc >= 0 && tc <= 100 ){
                let tf = tc * 9/5 +32;
                console.log(tc+" = "+tf);
        }
        else {
                console.log("Enter the temperature in between 0 to 100");
        }
}
function getCelsius(){
        let tf =Number(prompt("Enter temperature (F) : "));
        if (tf >= 32 && tf <= 212 ){
                let tc = (tf - 32) * 5 ;
                tc = tc / 9;
                console.log(tf+" = "+tc);
        }
        else{
                console.log("Enter the temperature in between 32 to 212");
        }
}
console.log("1. Convert Celsius temperature into Fahrenheit");
console.log("2. Convert Fahrenheit temperatures into Celsius");
const prompt = require('prompt-sync')();
let choice =Number(prompt("enter the number - "));
switch(choice){
        case 1:
                getFahrenheit();
                break;
        case 2:
                getCelsius();
                break;
}
