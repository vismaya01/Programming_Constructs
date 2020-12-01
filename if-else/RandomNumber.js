let max = 0;
let min =0;
for(varY=0; varY<5 ; varY++ ){
        let number = Math.floor(Math.random() * 900) + 100;
        console.log("number is "+number);
        if (max < number || max == 0 ){
                max = number;
        }
        if ( min > number || min == 0 ){
                min = number;
        }
}
console.log( "Maximum number is - "+max);
console.log( "minimum number is - "+min);

