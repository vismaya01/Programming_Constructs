let rollDice = true;
let dice = new Map();
dice.set(1, 0);
dice.set(2, 0);
dice.set(3, 0);
dice.set(4, 0);
dice.set(5, 0);
dice.set(6, 0);

while (rollDice) {
    let keyNo = Math.floor((Math.random() * 6) + 1);
    let value = dice.get(keyNo);
    value++;
    dice.set(keyNo, value);
    if (value == 10) {
        rollDice = false;
    }
}
let least = 10, minKey = 0, maxKey;
for (let [key, value] of dice) {
    if (least > value) {
        minKey = key;
        least = value;
    }
    if (value == 10) {
        maxKey = key;
    }
    console.log(key + " , " + value);
}
console.log("Minimum : " + minKey);
console.log("Maximum : " + maxKey);