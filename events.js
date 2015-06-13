var foodArray = [];
var bugArray = [];
var numOfFood = 5;


function init() {
	var canvas = document.getElementById("gameBoard");
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < numOfFood; i++){
		foodArray.push(makeNewFood(ctx));
	}

	bugDrawingLoop();
	requestAnimationFrame(mainLoop);
}


function mainLoop(){
	var canvas = document.getElementById("gameBoard");
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log("a");
	for (var i = 0; i < foodArray.length; i++){
		foodArray[i].draw(ctx);
		foodArray[i].update(1000/60);
	}

	for (var i = 0; i < bugArray.length; i++){
		bugArray[i].draw(ctx);
		bugArray[i].update(1000/60);
	}

	requestAnimationFrame(mainLoop);

}

function bugDrawingLoop(){
	var rand = Math.random() * (2000) + 1000;    //1-3 seconds
	setTimeout(function (){
		bugArray.push(makeNewBug(ctx));
		bugDrawingLoop();
	}, rand);
};

window.onLoad=init;

var blackBug = {
	color: "black",
	speed1: 0.15,
	speed2: 0.2,
	score: 5,
	probability: 0.3
};

var redBug = {
	color: "red",
	speed1: 0.075,
	speed2: 0.1,
	score: 3,
	probability: 0.3
};

var orangeBug = {
	color: "orange",
	speed1: 0.06,
	speed2: 0.08,
	score: 1,
	probability: 0.4
};


function makeNewFood(ctx){


	var x = Math.random() * 400;
	var y = Math.random() * 500 + 100;

	function draw(ctx){
		var food = document.getElementById("food");
		ctx.drawImage(food, x - 10, y - 10, 20, 20);
	}

	function update(elapsed){
		return;
	}

	return {draw: draw, update: update, x: x, y: y};
};

function makeNewBug(ctx){
	var type = Math.random();

	if (type < 0.3){
		type = blackBug;
	} else if (type < 0.6){
		type = redBug
	} else{
		type = orangeBug;
	}


	//info object.
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
				angle: findAngle(info.x, info.y, foodArray[index].x, foodArray[index].y)
			}

			return target;
		}
	}

	info.target = findTargetFood();

	function draw(ctx){
		console.log(info.x);
		var xhead = info.x + 5 * Math.cos(info.target.angle);
		var yhead = info.y + 5 * Math.sin(info.target.angle);
		var xtail = info.x - 15 * Math.cos(info.target.angle);
		var ytail = info.y - 15 * Math.sin(info.target.angle);

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
		ctx.rotate(info.target.angle);
		ctx.scale(15, 5);
		ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);

		ctx.fillStyle = info.type.color;
		ctx.restore(); // restore to original state
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();
	}

	function evaluate(){
		return (info.x > info.target.x - 10) && (info.x < info.target.x +10) && (info.y > info.target.y - 10) && (info.y < info.target.y + 10);
	}

	function update(elapsed){
		//speed difference from level not implemented.
		var distance = info.type.speed1 * elapsed;
		console.log("distance" + info.type.speed1);
		info.x += distance * Math.cos(info.target.angle);
		info.y += distance * Math.sin(info.target.angle);


		//if we are touching the food.
		if (evaluate()){

			//handler.
		} 
	}

	return {draw: draw, update: update, info:info};
}

function findAngle(x1,y1,x2,y2){
	return theta = Math.atan2(y2-y1, x2-x1);
}