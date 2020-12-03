var array = new Array();
for (let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 1000);
        if(random >= 100 && random <= 999)
            array[i] = random;
        else
            i -= 1;
}
console.log("Generated random numbers into array :"+array);
array.sort();
console.log("Sorted Array :"+array);
console.log(" Second largest number : " +array[array.length-2]);
console.log(" Second smallest number : " +array[1]);