window.onLoad=function() { init();};



var mainGameScreen = (function (){
	var entities = [];

	var numOfFood = 5;


})
function init() {
	var canvas = document.getElementById("gameBoard");
	var ctx = canvas.getContext("2d");

	drawFood(200, 200);

}

var blackBug = {
	color: "black",
	speed1: 150,
	speed2: 200,
	score: 5,
	probability: 0.3
};

var redBug = {
	color: "red",
	speed1: 75,
	speed2: 100,
	score: 3,
	probability: 0.3
};

var orangeBug = {
	color: "orange",
	speed1: 60,
	speed2: 80,
	score: 1,
	probability: 0.4
};


var position = function (x,y) {
	this.x = x;
	this.y = y;
};

var foodArray = [];
var bugArray = [];

function drawFood(x, y){
	var food = new Image();
	food.src = "food.jpg";

	food.onload = function(){
		ctx.drawImage(food, x - 10, y - 10, 20, 20);
		foodArray.push(new position(x, y));
	}
}

function makeNewFood(){};

function makeNewBug(){
	var type = Math.random();

	if (type < 0.3){
		type = blackBug;
	} else if (type < 0.6){
		type = redBug
	} else{
		type = orangeBug;
	}

	var info = {
		x: 10 + Math.random() * 380,
		y: 30,
		type: type,
		target: undefined
	};

	function findTargetFood(){
		var distance = Math.pow(400, 2) + Math.pow(600, 2);
		var index;

		if (foodArray.length == 0){
			alert("gameover");
		} else{

		//find which food to run for. 
			for (var i = 0; i < foodArray.length; i++){
				var newdis = Math.pow(foodArray[i].x - info.x, 2) + Math.pow(foodArray[i].y - info.y, 2);
				if (newdis < distance){
					distance = newdis;
					index = i;
				}
			}
			var target = {
				x: foodArray[index].x,
				y: foodArray[index].y,
				angle: info.angle = findAngle(x, y, foodArray[index].x, foodArray[index].y)
			}

			return target;
		}
	}

	info.target = findTargetFood();

	function draw(ctx){
		var xhead = info.x + 5 * Math.cos(angle);
		var yhead = info.y + 5 * Math.sin(angle);
		var xtail = info.x - 15 * Math.cos(angle);
		var ytail = info.y - 15 * Math.sin(angle);

		ctx.beginPath();
		ctx.arc(xhead, yhead, 5, 0, 2 * Math.PI);
		ctx.fillStyle = info.type.color;
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();

		console.log(xhead + " " + yhead + " " + xtail + " " + ytail);

		ctx.save(); // save state
		ctx.beginPath();
		ctx.translate(xtail, ytail);
		ctx.rotate(angle);
		ctx.scale(15, 5);
		ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);

		ctx.fillStyle = info.type.color;
		ctx.restore(); // restore to original state
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();
	}

	function update(elapsed){
		var info.
	}

}

function findAngle(x1,y1,x2,y2){
	return theta = Math.atan2(y2-y1, x2-x1);
}