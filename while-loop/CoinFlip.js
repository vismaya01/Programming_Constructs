let heads=0
let tails=0
while (1 ){
        if ( Math.floor(Math.random() * 10) % 2 == 0 ){
                heads++;
        }
        else{
                tails++;
        }
        if ( heads == 11 ){
                console.log("heads win");
                process.exit();
        }
        else if (tails == 11 ){
                console.log("tails win");
                process.exit()
        }
}
