let birthMonth = new Map();
    birthMonth.set(1, 0);
    birthMonth.set(2, 0);
    birthMonth.set(3, 0);
    birthMonth.set(4, 0);
    birthMonth.set(5, 0);
    birthMonth.set(6, 0);
    birthMonth.set(7, 0);
    birthMonth.set(8, 0);
    birthMonth.set(9, 0);
    birthMonth.set(10, 0);
    birthMonth.set(11, 0);
    birthMonth.set(12, 0);

    for (let i = 92; i <= 93; i++) {
        for (let j = 1; j <= 50; j++) {
            let person = Math.floor((Math.random() * 12) + 1);
            let value = birthMonth.get(person);
            value++;
            birthMonth.set(person, value);
        }
    }
    for (let [key, value] of birthMonth) {
        console.log(key + " , " + value);
    }