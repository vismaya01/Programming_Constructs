const prompt = require('prompt-sync')();
const a = prompt("enter the number - " );
const b = prompt("enter the number - " );
const c = prompt("enter the number - " );
let calc1 = a + b * c;
let calc2 = a % b + c;
let calc3 = c + a / b;
let calc4 = a * b + c;
if (calc1 > calc2 && calc1 > calc3 && calc1 > calc4 ){
        console.log(calc1+" is the greatest number");
}
else if ( calc2 > calc1 && calc2 >  calc3 && calc2 > calc4 ) {
        console.log(calc2+" is the greatest number");
}
else if( calc3 > calc1 && calc3 > calc2 && calc3 > calc4 ){
        console.log(calc3+" is the greatest number");
}
else if( calc4 > calc1 && calc4 > calc2 && calc4 > calc3 ){
        console.log(calc4+" is the greatest number");
}
if (calc1 < calc2 && calc1 < calc3 && calc1 < calc4 ){
        console.log(calc1+" is the smallest number");
}
else if (calc2 < calc1 && calc2 < calc3 && calc2 < calc4 ){
        console.log(calc2+" is the smallest number");
}
else if (calc3 < calc1 && calc3 < calc2 && calc3 < calc4 ){
        console.log(calc3+" is the smallest number");
}
else if (calc4 < calc1 && calc4 < calc2 && calc4 < calc3 ){
        console.log(calc4+" is the smallest number");
}