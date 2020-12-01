const prompt = require('prompt-sync')();
const year = prompt('Enter year - ');

let digit = year.length;
if (digit == 4 ){
        if( year % 4 == 0 ) {
                if( year % 400 == 0 ){
                       console.log( "This is a leap year");
		}
                else {
                        if( year % 100 == 0 ){
                                console.log( "This is not a leap year");
                	}
			else {
                                console.log( "This is a leap year");
                        }
                }
	}
        else {
                console.log( "This is not a leap year");
        }
}

