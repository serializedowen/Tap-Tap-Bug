var Blackbug = {
	speed1: 150,
	speed2: 200,
	score: 5,
	probability: 0.3
};

var redBug = {
	speed1: 75,
	speed2: 100,
	score: 3,
	probability: 0.3
};

var orangeBug = {
	speed1: 60,
	speed2: 80,
	score: 1,
	probability: 0.4
};

var canvas = document.getElementById("gameBoard");
var ctx = canvas.getContext("2d");


function findNewTarget(x, y){
	return false;
}

function drawFood(x, y){
	var food = new Image();
	food.src = "food.jpg";

	food.onload = function(){
		ctx.drawImage(food, x, y);
	}
}

function drawBug(color, x, y){
	return false;
}