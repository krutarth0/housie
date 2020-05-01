const shuffleSeed = require('shuffle-seed');

var Ideal_Ticket = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,85,86,87,88,89,90]
export var ticketBool = [ [false ,false,false,false ,false,false ,false ,false,false ],
					[false ,false,false ,false ,false,false ,false ,false,false],
				[false ,false,false ,false ,false,false ,false ,false,false ] ]
export var shuffle = []
export var VisitedCells =[]

export  function Randomnumber (seed){
	shuffle= shuffleSeed.shuffle(Ideal_Ticket,seed)
	localStorage.setItem('shuffle',shuffle)
	return shuffle
} 

export  function  RemoveElement (randomItem) {
	var index = shuffle.indexOf(randomItem);
	//this will delete the actual array element
	if (index > -1) {
		shuffle.splice(index, 1);
	}
	localStorage.setItem('shuffle',shuffle)
 }

export function VisitedCellCall(idx,number){
	// console.log(ticketBool)
	ticketBool[idx[0]][idx[1]] = true 
	localStorage.setItem('ticketBool',JSON.stringify(ticketBool))
	VisitedCells.push(number)
	VisitedCells = VisitedCells.filter( function( item, index, inputArray ) {
		return inputArray.indexOf(item) == index;
 });
}


export function KingsCorner(ticket){
	var elementONE = ticket[0][0]
	var elementTWO = ticket[1][0]
	var elementTHREE = ticket[2][0]
	if (VisitedCells.includes(elementONE) && VisitedCells.includes(elementTWO) && VisitedCells.includes(elementTHREE) ){
		localStorage.setItem('KingsCornor','true')
	}
}


export function QueensCorner(ticket){
	var elementONE = ticket[0][ticket[0].length - 1 ]
	var elementTWO = ticket[1][ticket[1].length - 1]
	var elementTHREE = ticket[2][ticket[2].length - 1]
	if (VisitedCells.includes(elementONE) && VisitedCells.includes(elementTWO) && VisitedCells.includes(elementTHREE) ){
		localStorage.setItem('QueensCornor','true')
	}
} 


export    function Breakfast(ticket){
	ticketBool = JSON.parse(localStorage.getItem('ticketBool'))
	return  (ticket[0][0] === -1 || ticketBool[0][0]) &&
			(ticket[0][1] === -1 || ticketBool[0][1]) &&
			(ticket[0][2] === -1 || ticketBool[0][2]) &&
			(ticket[1][0] === -1 || ticketBool[1][0]) &&
			(ticket[1][1] === -1 || ticketBool[1][1]) &&
			(ticket[1][2] === -1 || ticketBool[1][2]) &&
			(ticket[2][0] === -1 || ticketBool[2][0]) &&
			(ticket[2][1] === -1 || ticketBool[2][1]) &&
			(ticket[2][2] === -1 || ticketBool[2][2]);
}

let lunch = function(ticket, ticketBool){
	return  (ticket[0][3] === -1 || ticketBool[0][3]) &&
			(ticket[0][4] === -1 || ticketBool[0][4]) &&
			(ticket[0][5] === -1 || ticketBool[0][5]) &&
			(ticket[1][3] === -1 || ticketBool[1][3]) &&
			(ticket[1][4] === -1 || ticketBool[1][4]) &&
			(ticket[1][5] === -1 || ticketBool[1][5]) &&
			(ticket[2][3] === -1 || ticketBool[2][3]) &&
			(ticket[2][4] === -1 || ticketBool[2][4]) &&
			(ticket[2][5] === -1 || ticketBool[2][5]);
}

let dinner = function(ticket, ticketBool){
	return  (ticket[0][6] === -1 || ticketBool[0][6]) &&
			(ticket[0][7] === -1 || ticketBool[0][7]) &&
			(ticket[0][8] === -1 || ticketBool[0][8]) &&
			(ticket[1][6] === -1 || ticketBool[1][6]) &&
			(ticket[1][7] === -1 || ticketBool[1][7]) &&
			(ticket[1][8] === -1 || ticketBool[1][8]) &&
			(ticket[2][6] === -1 || ticketBool[2][6]) &&
			(ticket[2][7] === -1 || ticketBool[2][7]) &&
			(ticket[2][8] === -1 || ticketBool[2][8]);
}

let firstLine = function(ticket, ticketBool){
	return  (ticket[0][0] === -1 || ticketBool[0][0]) &&
			(ticket[0][1] === -1 || ticketBool[0][1]) &&
			(ticket[0][2] === -1 || ticketBool[0][2]) &&
			(ticket[0][3] === -1 || ticketBool[0][3]) &&
			(ticket[0][4] === -1 || ticketBool[0][4]) &&
			(ticket[0][5] === -1 || ticketBool[0][5]) &&
			(ticket[0][6] === -1 || ticketBool[0][6]) &&
			(ticket[0][7] === -1 || ticketBool[0][7]) &&
			(ticket[0][8] === -1 || ticketBool[0][8]);
}

let secondLine = function(ticket, ticketBool){
	return  (ticket[1][0] === -1 || ticketBool[1][0]) &&
			(ticket[1][1] === -1 || ticketBool[1][1]) &&
			(ticket[1][2] === -1 || ticketBool[1][2]) &&
			(ticket[1][3] === -1 || ticketBool[1][3]) &&
			(ticket[1][4] === -1 || ticketBool[1][4]) &&
			(ticket[1][5] === -1 || ticketBool[1][5]) &&
			(ticket[1][6] === -1 || ticketBool[1][6]) &&
			(ticket[1][7] === -1 || ticketBool[1][7]) &&
			(ticket[1][8] === -1 || ticketBool[1][8]);
}

let thirdLine = function(ticket, ticketBool){
	return  (ticket[2][0] === -1 || ticketBool[2][0]) &&
			(ticket[2][1] === -1 || ticketBool[2][1]) &&
			(ticket[2][2] === -1 || ticketBool[2][2]) &&
			(ticket[2][3] === -1 || ticketBool[2][3]) &&
			(ticket[2][4] === -1 || ticketBool[2][4]) &&
			(ticket[2][5] === -1 || ticketBool[2][5]) &&
			(ticket[2][6] === -1 || ticketBool[2][6]) &&
			(ticket[2][7] === -1 || ticketBool[2][7]) &&
			(ticket[2][8] === -1 || ticketBool[2][8]);
}

let fulHousie = function(ticket, ticketBool){
	return firstLine(ticket, ticketBool) && secondLine(ticket, ticketBool) && thirdLine(ticket, ticketBool);
}