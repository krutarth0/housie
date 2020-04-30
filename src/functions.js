

var Ideal_Ticket = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,85,86,87,88,89,90]
var shuffle = []

export  function Randomnumber (seed){
	const shuffleSeed = require('shuffle-seed');
	shuffle= shuffleSeed.shuffle(Ideal_Ticket,seed)
	localStorage.setItem('shuffle',shuffle)
	return shuffle
} 

export  function  RemoveElement (shuffle,randomItem) {
	console.log('functions',shuffle);
	
	var index = shuffle.indexOf(randomItem);
	//this will delete the actual array element
	if (index > -1) {
		shuffle.splice(index, 1);
	}
	localStorage.setItem('shuffle',shuffle)
 }




let kingsCorner = function(ticket, ticketBool){
	var first, second, third;
	first = 0;
	while(true){
		if(ticket[0][first] == 0){
			first++;
		}
		else{
			break;
		}
	}
	second=0;
	while(true){
		if(ticket[1][second] == 0){
			second++;
		}
		else{
			break;
		}
	}
	third=0;
	while(true){
		if(ticket[2][third] == 0){
			third++;
		}
		else{
			break;
		}
	}

	return ticketBool[0][first] && ticketBool[1][second] && ticketBool[2][third];
}


let queensCorner = function(ticket, ticketBool){
	var first, second, third;
	first = 8;
	while(true){
		if(ticket[0][first] == 0){
			first--;
		}
		else{
			break;
		}
	}
	second=8;
	while(true){
		if(ticket[1][second] == 0){
			second--;
		}
		else{
			break;
		}
	}
	third=8;
	while(true){
		if(ticket[2][third] == 0){
			third--;
		}
		else{
			break;
		}
	}

	return ticketBool[0][first] && ticketBool[1][second] && ticketBool[2][third];
}


let breakfast = function(ticket, ticketBool){
	return  (ticket[0][0] == 0 || ticketBool[0][0]) &&
			(ticket[0][1] == 0 || ticketBool[0][1]) &&
			(ticket[0][2] == 0 || ticketBool[0][2]) &&
			(ticket[1][0] == 0 || ticketBool[1][0]) &&
			(ticket[1][1] == 0 || ticketBool[1][1]) &&
			(ticket[1][2] == 0 || ticketBool[1][2]) &&
			(ticket[2][0] == 0 || ticketBool[2][0]) &&
			(ticket[2][1] == 0 || ticketBool[2][1]) &&
			(ticket[2][2] == 0 || ticketBool[2][2]);
}

let lunch = function(ticket, ticketBool){
	return  (ticket[0][3] == 0 || ticketBool[0][3]) &&
			(ticket[0][4] == 0 || ticketBool[0][4]) &&
			(ticket[0][5] == 0 || ticketBool[0][5]) &&
			(ticket[1][3] == 0 || ticketBool[1][3]) &&
			(ticket[1][4] == 0 || ticketBool[1][4]) &&
			(ticket[1][5] == 0 || ticketBool[1][5]) &&
			(ticket[2][3] == 0 || ticketBool[2][3]) &&
			(ticket[2][4] == 0 || ticketBool[2][4]) &&
			(ticket[2][5] == 0 || ticketBool[2][5]);
}

let dinner = function(ticket, ticketBool){
	return  (ticket[0][6] == 0 || ticketBool[0][6]) &&
			(ticket[0][7] == 0 || ticketBool[0][7]) &&
			(ticket[0][8] == 0 || ticketBool[0][8]) &&
			(ticket[1][6] == 0 || ticketBool[1][6]) &&
			(ticket[1][7] == 0 || ticketBool[1][7]) &&
			(ticket[1][8] == 0 || ticketBool[1][8]) &&
			(ticket[2][6] == 0 || ticketBool[2][6]) &&
			(ticket[2][7] == 0 || ticketBool[2][7]) &&
			(ticket[2][8] == 0 || ticketBool[2][8]);
}

let firstLine = function(ticket, ticketBool){
	return  (ticket[0][0] == 0 || ticketBool[0][0]) &&
			(ticket[0][1] == 0 || ticketBool[0][1]) &&
			(ticket[0][2] == 0 || ticketBool[0][2]) &&
			(ticket[0][3] == 0 || ticketBool[0][3]) &&
			(ticket[0][4] == 0 || ticketBool[0][4]) &&
			(ticket[0][5] == 0 || ticketBool[0][5]) &&
			(ticket[0][6] == 0 || ticketBool[0][6]) &&
			(ticket[0][7] == 0 || ticketBool[0][7]) &&
			(ticket[0][8] == 0 || ticketBool[0][8]);
}

let secondLine = function(ticket, ticketBool){
	return  (ticket[1][0] == 0 || ticketBool[1][0]) &&
			(ticket[1][1] == 0 || ticketBool[1][1]) &&
			(ticket[1][2] == 0 || ticketBool[1][2]) &&
			(ticket[1][3] == 0 || ticketBool[1][3]) &&
			(ticket[1][4] == 0 || ticketBool[1][4]) &&
			(ticket[1][5] == 0 || ticketBool[1][5]) &&
			(ticket[1][6] == 0 || ticketBool[1][6]) &&
			(ticket[1][7] == 0 || ticketBool[1][7]) &&
			(ticket[1][8] == 0 || ticketBool[1][8]);
}

let thirdLine = function(ticket, ticketBool){
	return  (ticket[2][0] == 0 || ticketBool[2][0]) &&
			(ticket[2][1] == 0 || ticketBool[2][1]) &&
			(ticket[2][2] == 0 || ticketBool[2][2]) &&
			(ticket[2][3] == 0 || ticketBool[2][3]) &&
			(ticket[2][4] == 0 || ticketBool[2][4]) &&
			(ticket[2][5] == 0 || ticketBool[2][5]) &&
			(ticket[2][6] == 0 || ticketBool[2][6]) &&
			(ticket[2][7] == 0 || ticketBool[2][7]) &&
			(ticket[2][8] == 0 || ticketBool[2][8]);
}

let fulHousie = function(ticket, ticketBool){
	return firstLine(ticket, ticketBool) && secondLine(ticket, ticketBool) && thirdLine(ticket, ticketBool);
}