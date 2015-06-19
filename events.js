var foodArray = [];
var bugArray = [];
var numOfFood = 10;
var scoreBoardHeight = 40;
var timeLeft = 60;
var score = 0;
var requestID;
var spawnID;
var paused = false;
var gameEnded = false;
var clickX;
var clickY;
var pauseDelay = 100;
var background = new Image();
background.src = "grass.png";
var foods = new Image();
foods.src = "foods.png";
var splat = new Audio("Splatsound.wav");
var backgroundMusic = new Audio("Spring_In_My_Step_-_Silent_Partner.wav");
//var blackBugs = new Image();
//var redBugs = new Image();
//var OrangeBugs = new Image();
//blackBugs.src = "blackbug.png";
//redBugs.src = "redbug.png";
//OrangeBugs.src = "OrangeBug.png";
var redX = new Image();
redX.src = "red_X.png";
var bloodSplat = new Image();
bloodSplat.src = "blood-splat-icon.png";


// Known Issues:

	//1. change of lineWidth changes the width of shape of bugs as well.  
	//2. Gameover function not implemented. RESOLVED
	//3. Pausing the game doesn't stop the bug spawning loop.   RESOLVED
	//4. speed differene from level not implemented.   RESOLVED
	//5. Bugs wont fade out when killed RESOLVED


window.addEventListener("mousedown", doMouseDown, false);

function gameOver(){
	var canvas = document.getElementById("gameBoard");
	var ctx = canvas.getContext("2d");
	gameEnded = true;
	paused = true;
	

	clearTimeout(spawnID);
	cancelAnimationFrame(mainLoop);

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "red";
	ctx.strokeStyle = "black";
	ctx.font='bold 15px Arial';
	ctx.fillText("GameOver", 160, 300);
	ctx.fillText("Your Score is: " + score, 145, 320);
	ctx.strokeRect(100, 350, 50, 30);
	ctx.strokeRect(250, 350, 50, 30);
	ctx.fillStyle = "black";
	ctx.fillText("Replay", 100, 370);
	ctx.fillText("Exit", 260, 370);
	if(localStorage.getItem("highscore") == null || localStorage.getItem("highscore") < score){
		localStorage.setItem("highscore",score);
	}
}

function doMouseDown(event){
	clickX = event.pageX - document.getElementById("gameBoard").offsetLeft;
	clickY = event.pageY - document.getElementById("gameBoard").offsetTop;

	// Controls for game screen
	if (gameEnded == false){
		//console.log(clickX + " " + clickY + paused);
		if ((215 > clickX) && (185 < clickX) && (scoreBoardHeight/2 + 15 > clickY) && (clickY > scoreBoardHeight/2 - 15)){
			paused = !paused;
			var canvas = document.getElementById("gameBoard");
			var ctx = canvas.getContext("2d");

			drawScoreBoard(ctx);

			//Pause & Unpause the spawning loop.
			switchStateSpawningLoop();

			if (paused){
				cancelAnimationFrame(requestID);
			} else{
				requestID = requestAnimationFrame(mainLoop);
			}
		}

	// Controls for game over screen.
	} else{

		//Clicking Replay Button.
		if ((clickX > 100) && (clickX < 150) && (clickY > 350) && (clickY < 380)){
			location.reload();

		//Clicking Exit Button.
		} else if ((clickX > 250) && (clickX < 300) && (clickY > 350) && (clickY < 380)){
			window.location="start.html";
		}
		
	}
}

function init() {
	backgroundMusic.play();
	var canvas = document.getElementById("gameBoard");
	var ctx = canvas.getContext("2d");
	
	index = window.location.href.lastIndexOf("=");

	for (var i = 0; i < numOfFood; i++){
		foodArray.push(makeNewFood(ctx));
	}
	//alert("level" + window.location.href.substr(index + 1, 1));

	level = window.location.href.substr(index + 1, 1);
	bugDrawingLoop();
	requestID = requestAnimationFrame(mainLoop);
}

function switchStateSpawningLoop(){
	if (paused){
		clearTimeout(spawnID);
	} else{
		bugDrawingLoop();
	}
}

function drawScoreBoard(ctx){
	ctx.clearRect(0, 0, 400, scoreBoardHeight);

	ctx.save();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(0, scoreBoardHeight);
	ctx.lineTo(400, scoreBoardHeight);
	ctx.closePath();
	ctx.stroke();
	ctx.font='bold 15px Arial';
	ctx.fillText("Time Left: " + Math.round(timeLeft * 10) / 10 + " sec", 10, scoreBoardHeight / 2 + 5);
	ctx.fillText("Score: " + score + " Points", 280, scoreBoardHeight / 2 + 5);
	ctx.strokeStyle = "black";
	ctx.strokeRect(185, scoreBoardHeight/2 - 15, 30, 30);
	if (paused){
		console.log("here");
		ctx.save();
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
	
		ctx.beginPath();
		ctx.moveTo(189, scoreBoardHeight/2 - 11);
		ctx.lineTo(211, scoreBoardHeight/2);
		ctx.lineTo(189, scoreBoardHeight/2 + 11);
		ctx.lineTo(189, scoreBoardHeight/2 - 11);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();
		ctx.restore();

	} else{
		console.log("alsohere");
		ctx.save();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 6;
		ctx.beginPath();
		ctx.moveTo(193, scoreBoardHeight/2 - 11);
		ctx.lineTo(193, scoreBoardHeight/2 + 11);
		ctx.moveTo(207, scoreBoardHeight/2 - 11);
		ctx.lineTo(207, scoreBoardHeight/2 + 11);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();

	}
}

function mainLoop(){
	var canvas = document.getElementById("gameBoard");
	ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(background,0,40);


	if (foodArray.length == 0){
		gameOver();
		return;
	}

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
		bugArray.splice(bugsToRemove[i], 1);
	}	

	timeLeft -= 1/60;

	if (timeLeft < 0){
		timeLeft = 0;
		gameOver();
		return;
	} 
	drawScoreBoard(ctx);
	requestID = requestAnimationFrame(mainLoop);

}

function bugDrawingLoop(){
	var rand = Math.random() * (2000) + 1000;    //1-3 seconds

		spawnID = setTimeout(function (){
			bugArray.push(makeNewBug(ctx));
			bugDrawingLoop();
		}, rand);
}


var blackBug = {
	color: "rgba(0, 0, 0, ",
	speed1: 0.15,
	speed2: 0.2,
	score: 5,
	probability: 0.3
};

var redBug = {
	color: "rgba(255, 0, 0, ",
	speed1: 0.075,
	speed2: 0.1,
	score: 3,
	probability: 0.3
};

var orangeBug = {
	color: "rgba(255, 102, 0, ",
	speed1: 0.06,
	speed2: 0.08,
	score: 1,
	probability: 0.4
};




function makeNewFood(ctx){
	var valid = false;
	var pictureX = 5 + (Math.floor(Math.random() * 5) * 25);
	var pictureY = 10 + (Math.floor(Math.random() * 2) * 20);

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
	//console.log(pictureX);
	function draw(ctx){
		var food = document.getElementById("food");
		ctx.drawImage(foods, pictureX, pictureY, 20, 20,x,y,20,20);
	}

	function update(elapsed){
		return;
	}

	return {draw: draw, update: update, x: x, y: y};
};

function makeNewBug(ctx){
	var type = Math.random();
	var flag = 0;
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
		transparency: 1,
		target: undefined
	};

	function findTargetFood(){
		var distance = Math.pow(400, 2) + Math.pow(600, 2);
		var index;

		if (foodArray.length == 0){
			gameOver();
			return;
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

	function parseFillStyle(){
		return info.type.color + info.transparency + ")";
	}

	function draw(ctx){
		if(info.transparency < 1){
			if (flag == 0){
				splat.play();
				flag = 1;
			}
			ctx.save();
			ctx.drawImage(bloodSplat,info.x-15,info.y -25);
			ctx.restore();
		}
		var xhead = info.x + 5 * Math.cos(info.target.angle);
		var yhead = info.y + 5 * Math.sin(info.target.angle);
		var xtail = info.x - 15 * Math.cos(info.target.angle);
		var ytail = info.y - 15 * Math.sin(info.target.angle);

		ctx.save();
		ctx.beginPath();
		ctx.arc(xhead, yhead, 5, 0, 2 * Math.PI);
		ctx.closePath();
		//console.log(parseFillStyle());
		ctx.fillStyle = parseFillStyle();
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.restore();

		//console.log(xhead + " " + yhead + " " + xtail + " " + ytail);

		ctx.save(); // save state
		ctx.beginPath();
		ctx.translate(xtail, ytail);
		ctx.rotate(info.target.angle);
		ctx.scale(15, 5);
		ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fillStyle = parseFillStyle();
		ctx.fill();
		ctx.restore(); // restore to original state

		ctx.save();
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.restore();

		if(info.transparency < 1){
			ctx.save();
			ctx.globalAlpha = info.transparency;
			ctx.drawImage(redX,info.x-15,info.y -15);
			ctx.restore();
		}

		
	}
	//function draw(context){
	//	context.save();	
	//	context.translate(info.x,info.y);
	//	context.rotate(info.target.angle);
	//	context.fillStyle = 'black';
	//	if(info.type.color == "black"){
	//		context.drawImage(blackBugs,0,0);
	//	}
	//	else if(info.type.color == "orange"){
	//		context.drawImage(OrangeBugs,0,0);
	//	}
	//	else{
	//		context.drawImage(redBugs,0,0);
	//	}
	//	context.restore();
	//}
	function evaluate(){
		return (info.x > info.target.x - 10) && (info.x < info.target.x + 10) && (info.y > info.target.y - 10) && (info.y < info.target.y + 10);
	}


	//return true or false, indicating whether the bug is killed.
	function update(elapsed){

		// If the bug is already fading
		if (info.transparency < 1){
			info.transparency -= 1/120;	
			return info.transparency >= 0;
		} else{
			var speed;
			if (level == 1){
				speed = info.type.speed1;
			} else{
				speed = info.type.speed2;
			}

			var distance = speed * elapsed;
			
			// If bug is clicked.
			if ((clickX > info.x - 30) && (clickX < info.x + 30) && (clickY > info.y - 30) && (clickY < info.y + 30)){
				info.transparency -= 1/120;
				score += info.type.score;
				return true;
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
	}

	return {draw: draw, update: update, info:info};
}

function findAngle(x1,y1,x2,y2){
	return theta = Math.atan2(y2-y1, x2-x1);
}