const shuffleSeed = require('shuffle-seed');
export var VisitedCells =[]

export  function Randomnumber (seed){
	var TicketBool = [ [false ,false,false,false ,false,false ,false ,false,false ],
					[false ,false,false ,false ,false,false ,false ,false,false],
				[false ,false,false ,false ,false,false ,false ,false,false ] ]
	localStorage.setItem('ticketBool',JSON.stringify(TicketBool))
	var Ideal_Ticket = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90]
	var shuffle= shuffleSeed.shuffle(Ideal_Ticket,seed)
	localStorage.setItem('shuffle',JSON.stringify(shuffle))
	return shuffle
} 

export  function  RemoveElement (randomItem) {
	var array = JSON.parse(localStorage.getItem('shuffle'))
	var index = array.indexOf(randomItem);
	//this will delete the actual array element
	if (index > -1) {	
		array.splice(index, 1);
	}
	localStorage.setItem('shuffle',JSON.stringify(array))
 }


 export function VisitedCellCall(idx,number){
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	ticketBool[idx[0]][idx[1]] = true 
	localStorage.setItem('ticketBool',JSON.stringify(ticketBool))
	VisitedCells.push(number)
	VisitedCells = VisitedCells.filter( function( item, index, inputArray ) {
		return inputArray.indexOf(item) === index;
 });
}



export function KingsCorner(ticket){
	localStorage.setItem('KingsCorner','false')
	var first, second, third;
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	first = 0;
	while(true){
		if(ticket[0][first] === -1){
			first++;
		}
		else{
			break;
		}
	}
	second=0;
	while(true){
		if(ticket[1][second] === -1){
			second++;
		}
		else{
			break;
		}
	}	
	third=0;
	while(true){
		if(ticket[2][third] ===-1){
			third++;
		}
		else{
			break;
		}
	}	
	if (ticketBool[0][first] && ticketBool[1][second] && ticketBool[2][third]){
		localStorage.setItem('KingsCorner','true')
	}
	return ticketBool[0][first] && ticketBool[1][second] && ticketBool[2][third];
}


export function QueensCorner(ticket){
	localStorage.setItem('QueensCorner','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var first, second, third;
	first = 8;	
	while(true){
		if(ticket[0][first] === -1){
			first--;
		}
		else{
			break;
		}
	}
	second=8;
	while(true){
		if(ticket[1][second] === -1){
			second--;
		}
		else{
			break;
		}
	}
	third=8;
	while(true){
		if(ticket[2][third] === -1){
			third--;
		}
		else{
			break;
		}
	}
	if (ticketBool[0][first] && ticketBool[1][second] && ticketBool[2][third]){
		localStorage.setItem('QueensCorner','true')
	}
	return ticketBool[0][first] && ticketBool[1][second] && ticketBool[2][third];
}


export    function Breakfast(ticket){
	localStorage.setItem('Breakfast','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =   (ticket[0][0] === -1 || ticketBool[0][0]) &&
			(ticket[0][1] === -1 || ticketBool[0][1]) &&
			(ticket[0][2] === -1 || ticketBool[0][2]) &&
			(ticket[1][0] === -1 || ticketBool[1][0]) &&
			(ticket[1][1] === -1 || ticketBool[1][1]) &&
			(ticket[1][2] === -1 || ticketBool[1][2]) &&
			(ticket[2][0] === -1 || ticketBool[2][0]) &&
			(ticket[2][1] === -1 || ticketBool[2][1]) &&
			(ticket[2][2] === -1 || ticketBool[2][2])
	if (condition){
		localStorage.setItem('Breakfast','true')
	}
	return condition
}

export function Lunch (ticket){
	localStorage.setItem('Lunch','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =  (ticket[0][3] === -1 || ticketBool[0][3]) &&
			(ticket[0][4] === -1 || ticketBool[0][4]) &&
			(ticket[0][5] === -1 || ticketBool[0][5]) &&
			(ticket[1][3] === -1 || ticketBool[1][3]) &&
			(ticket[1][4] === -1 || ticketBool[1][4]) &&
			(ticket[1][5] === -1 || ticketBool[1][5]) &&
			(ticket[2][3] === -1 || ticketBool[2][3]) &&
			(ticket[2][4] === -1 || ticketBool[2][4]) &&
			(ticket[2][5] === -1 || ticketBool[2][5]);
	if (condition){
		localStorage.setItem('Lunch','true')
	}
	return condition
}

export function Dinner(ticket){
	localStorage.setItem('Dinner','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =   (ticket[0][6] === -1 || ticketBool[0][6]) &&
			(ticket[0][7] === -1 || ticketBool[0][7]) &&
			(ticket[0][8] === -1 || ticketBool[0][8]) &&
			(ticket[1][6] === -1 || ticketBool[1][6]) &&
			(ticket[1][7] === -1 || ticketBool[1][7]) &&
			(ticket[1][8] === -1 || ticketBool[1][8]) &&
			(ticket[2][6] === -1 || ticketBool[2][6]) &&
			(ticket[2][7] === -1 || ticketBool[2][7]) &&
			(ticket[2][8] === -1 || ticketBool[2][8]);
	if (condition){
		localStorage.setItem('Dinner','true')
	}
	return condition
}

export function FirstLine(ticket){
	localStorage.setItem('FirstLine','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =   (ticket[0][0] === -1 || ticketBool[0][0]) &&
			(ticket[0][1] === -1 || ticketBool[0][1]) &&
			(ticket[0][2] === -1 || ticketBool[0][2]) &&
			(ticket[0][3] === -1 || ticketBool[0][3]) &&
			(ticket[0][4] === -1 || ticketBool[0][4]) &&
			(ticket[0][5] === -1 || ticketBool[0][5]) &&
			(ticket[0][6] === -1 || ticketBool[0][6]) &&
			(ticket[0][7] === -1 || ticketBool[0][7]) &&
			(ticket[0][8] === -1 || ticketBool[0][8]);
			if (condition){
				localStorage.setItem('FirstLine','true')
			}
			return condition
}

export function SecondLine(ticket){
	localStorage.setItem('SecondLine','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =   (ticket[1][0] === -1 || ticketBool[1][0]) &&
			(ticket[1][1] === -1 || ticketBool[1][1]) &&
			(ticket[1][2] === -1 || ticketBool[1][2]) &&
			(ticket[1][3] === -1 || ticketBool[1][3]) &&
			(ticket[1][4] === -1 || ticketBool[1][4]) &&
			(ticket[1][5] === -1 || ticketBool[1][5]) &&
			(ticket[1][6] === -1 || ticketBool[1][6]) &&
			(ticket[1][7] === -1 || ticketBool[1][7]) &&
			(ticket[1][8] === -1 || ticketBool[1][8]);
			if (condition){
				localStorage.setItem('SecondLine','true')
			}
			return condition
}

export function ThirdLine(ticket){
	localStorage.setItem('ThirdLine','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =   (ticket[2][0] === -1 || ticketBool[2][0]) &&
			(ticket[2][1] === -1 || ticketBool[2][1]) &&
			(ticket[2][2] === -1 || ticketBool[2][2]) &&
			(ticket[2][3] === -1 || ticketBool[2][3]) &&
			(ticket[2][4] === -1 || ticketBool[2][4]) &&
			(ticket[2][5] === -1 || ticketBool[2][5]) &&
			(ticket[2][6] === -1 || ticketBool[2][6]) &&
			(ticket[2][7] === -1 || ticketBool[2][7]) &&
			(ticket[2][8] === -1 || ticketBool[2][8]);
			if (condition){
				localStorage.setItem('ThirdLine','true')
			}
			return condition
}

export function FullHouse(ticket){
	localStorage.setItem('FullHouse','false')
	var ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	var condition =  FirstLine(ticket, ticketBool) && SecondLine(ticket, ticketBool) && ThirdLine(ticket, ticketBool);
	if (condition){
		localStorage.setItem('FullHouse','true')
	}
	return condition
}