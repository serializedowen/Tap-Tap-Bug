var foodArray = [];
var bugArray = [];
var numOfFood = 10;
var scoreBoardHeight = 40;
var timeLeft = 60;
var score = 0;
var requestID;
var paused = false;
var clickX;
var clickY;




// Known Issues:

	//1. change of lineWidth changes the width of shape of bugs as well.
	//2. Gameover function not implemented.
	//3. Pausing the game doesn't stop the bug spawning loop.
	//4. speed differene from level not implemented.



	
window.addEventListener("mousedown", doMouseDown, false);

function gameOver(){
	cancelAnimationFrame(mainLoop);
}

function doMouseDown(event){
	clickX = event.pageX - document.getElementById("gameBoard").offsetLeft;
	clickY = event.pageY - document.getElementById("gameBoard").offsetTop;


	console.log(clickX + " " + clickY + paused);
	if ((215 > clickX) && (185 < clickX) && (scoreBoardHeight/2 + 15 > clickY) && (clickY > scoreBoardHeight/2 - 15)){
		paused = !paused;
		var canvas = document.getElementById("gameBoard");
		var ctx = canvas.getContext("2d");

		ctx.clearRect(0, 0, 400, scoreBoardHeight);
		drawScoreBoard(ctx);

		if (paused){
			cancelAnimationFrame(requestID);
		} else{
			requestID = requestAnimationFrame(mainLoop);
		}

		
	}
}

function init() {
	var canvas = document.getElementById("gameBoard");
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < numOfFood; i++){
		foodArray.push(makeNewFood(ctx));
	}

	bugDrawingLoop();
	requestID = requestAnimationFrame(mainLoop);
}

function drawScoreBoard(ctx){

	//ctx.save();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.linewidth = 1;
	ctx.moveTo(0, scoreBoardHeight);
	ctx.lineTo(400, scoreBoardHeight);
	ctx.stroke();
	ctx.font='bold 15px Arial';
	ctx.fillText("Time Left: " + Math.round(timeLeft * 10) / 10 + " sec", 10, scoreBoardHeight / 2 + 5);
	ctx.fillText("Score: " + score + " Points", 280, scoreBoardHeight / 2 + 5);
	ctx.strokeStyle = "black";
	ctx.strokeRect(185, scoreBoardHeight/2 - 15, 30, 30);
	ctx.restore();

	if (paused){
		//ctx.save();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
	
		ctx.moveTo(189, scoreBoardHeight/2 - 11);
		ctx.lineTo(211, scoreBoardHeight/2);
		ctx.lineTo(189, scoreBoardHeight/2 + 11);
		ctx.lineTo(189, scoreBoardHeight/2 - 11)
		ctx.stroke();
		ctx.fill();
		ctx.restore();

	} else{
		//ctx.save();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 6;
		ctx.moveTo(193, scoreBoardHeight/2 - 11);
		ctx.lineTo(193, scoreBoardHeight/2 + 11);
		ctx.moveTo(207, scoreBoardHeight/2 - 11);
		ctx.lineTo(207, scoreBoardHeight/2 + 11);
		ctx.stroke();
		ctx.restore();


	}
}

function mainLoop(){
	var canvas = document.getElementById("gameBoard");
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawScoreBoard(ctx);

	var bugsToRemove = [];
	for (var i = 0; i < foodArray.length; i++){
		foodArray[i].draw(ctx);
		foodArray[i].update(1000/60);
	}

	for (var i = 0; i < bugArray.length; i++){
		bugArray[i].draw(ctx);

		if (!bugArray[i].update(1000/60)){
			bugsToRemove.push(i);
		}
		
	}


	//resets the click point value.
	clickX = 0;
	clickY = 0;

	for (var i = bugsToRemove.length - 1; i >= 0; i--){
		score += bugArray[bugsToRemove[i]].info.type.score;
		bugArray.splice(bugsToRemove[i], 1);
	}	

	timeLeft -= 1/60;

	if (timeLeft < 0){
		timeLeft = 0;
		gameOver();
	} 
	
	requestID = requestAnimationFrame(mainLoop);

}

function bugDrawingLoop(){
	var rand = Math.random() * (2000) + 1000;    //1-3 seconds

		setTimeout(function (){

			bugArray.push(makeNewBug(ctx));
			bugDrawingLoop();
		}, rand);
}


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
	var valid = false;

	//making sure food is not too close to each other.
	while(valid == false){
		valid = true;
		var x = Math.random() * 360 + 20;
		var y = Math.random() * 500 + 100 + scoreBoardHeight;
		
		for (var i = 0; i < foodArray.length; i++){
			if ((x + 50 > foodArray[i].x) && (foodArray[i].x > x - 50) && (y + 50 > foodArray[i].y) && (foodArray[i].y > y - 50)){
				valid = false;
			}
		}
	}

	//console.log("x: " + x + "y: " + y);

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
		type = redBug;
	} else{
		type = orangeBug;
	}

	//info object.
	var info = {
		x: 10 + Math.random() * 380,
		y: 30 + scoreBoardHeight,
		type: type,
		transparency: 100,
		target: undefined
	};

	console.log(info.type.score);
	function findTargetFood(){
		var distance = Math.pow(400, 2) + Math.pow(600, 2);
		var index;

		if (foodArray.length == 0){
			gameOver();
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
				angle: findAngle(info.x, info.y, foodArray[index].x, foodArray[index].y),
				index: index
			}
			return target;
		}
	}

	info.target = findTargetFood();

	function draw(ctx){

		var xhead = info.x + 5 * Math.cos(info.target.angle);
		var yhead = info.y + 5 * Math.sin(info.target.angle);
		var xtail = info.x - 15 * Math.cos(info.target.angle);
		var ytail = info.y - 15 * Math.sin(info.target.angle);

		//ctx.save();
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(xhead, yhead, 5, 0, 2 * Math.PI);
		ctx.fillStyle = info.type.color;
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.closePath();
		//ctx.restore();

		//console.log(xhead + " " + yhead + " " + xtail + " " + ytail);

		ctx.save(); // save state
		ctx.beginPath();
		ctx.translate(xtail, ytail);
		ctx.rotate(info.target.angle);
		ctx.scale(15, 5);
		ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);
		ctx.fillStyle = info.type.color;
		ctx.fill();
		ctx.restore(); // restore to original state

		//ctx.save();
		ctx.strokeStyle = "black";
		ctx.stroke();
		//ctx.restore();
		ctx.closePath();
	}

	function evaluate(){
		return (info.x > info.target.x - 10) && (info.x < info.target.x + 10) && (info.y > info.target.y - 10) && (info.y < info.target.y + 10);
	}


	//return true or false, indicating whether the bug is killed.
	function update(elapsed){
		//speed difference from level not implemented.
		var distance = info.type.speed1 * elapsed;
		//console.log("distance" + info.type.speed1);

		if ((clickX > info.x - 30) && (clickX < info.x + 30) && (clickY > info.y - 30) && (clickY < info.y + 30)){
			return false;
		}

		info.target = findTargetFood();

		info.x += distance * Math.cos(info.target.angle);
		info.y += distance * Math.sin(info.target.angle);

		//if we are touching the food.
		if (evaluate()){
			foodArray.splice(info.target.index, 1);
		} 

		return true;
	}

	return {draw: draw, update: update, info:info};
}

function findAngle(x1,y1,x2,y2){
	return theta = Math.atan2(y2-y1, x2-x1);
}