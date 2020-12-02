const stake=100;
const goal=200;
let bets=0;
var wins=0;

var cash = stake;
var star = 0;
while(cash == 0 || cash < goal){
        bets++;
        if((Math.floor(Math.random() * 10) % 2) == 1 ){
                cash++;
                wins++;
        }
        else{
                cash--;
        }
}
if(cash == 0 ){
        console.log("No more money to gamble");
}
else if ( cash == goal ){
        console.log("Reached the goal of Rs 200");
}
console.log("number of times won "+wins);
console.log("number of times bets made "+bets);

