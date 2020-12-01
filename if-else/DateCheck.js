const prompt = require('prompt-sync')();
let  date = prompt('Enter Date:-');
let  month = prompt('Enter Month:-');
if((month > 2) && (month < 7) && (date < 32) && (date >0)){
	if(month == 5){
                console.log("true");
        }
	if(month == 4){
		if(date < 31){
                	console.log("true");
        	}
		else{
			console.log("false");
		}
	}
	if (month == 3){
 		if(date > 19){
			console.log("true");
		}
		else{
        		console.log("false");
		}
	}
	if(month == 6){
		if(date <21){
			console.log("true");
		}
		else{
			console.log("false");
		}
	}
}
else{
console.log("false");
}