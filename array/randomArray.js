var array = new Array();
for (let i = 0; i < 10; i++){
        let random = Math.floor(Math.random() * 1000);
        if(random >= 100 && random <= 999)
            array[i] = random;
        else
            i -= 1;
}
console.log("Generated random numbers into array :"+array);
let largest = array[0];
let secondLargest = 0;
for (let i = 1; i <= array.length; i++){
        if(largest < array[i]){
            secondLargest = largest;
            largest = array[i];
        }
        else if(secondLargest < array[i] && array[i] != largest){
            secondLargest = array[i];
        }
}
console.log(" Second largest number : " +secondLargest);
let smallest = array[0];
let secondSmallest = 999;
for (let i = 1;i <= array.length; i++){
        if(smallest > array[i]){
            secondSmallest = smallest;
            smallest = array[i];
        }else if(secondSmallest > array[i] && array[i] != smallest){
            secondSmallest = array[i];
        }
}
console.log(" Second smallest number : " +secondSmallest);