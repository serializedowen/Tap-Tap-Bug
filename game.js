var WIDTH = 400;
var HEIGHT = 600;
var canvas = document.getElementById("myCanvas");
var canvas2 = document.getElementById("clock");
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
var food = 3;
var entires = [];
var foods = [];
var clock = 60;
var counter = 0;
var score = 0;
context2.font="20px Georgia";

function click(event){
	event = event || window.event;
	var x = event.pageX,
	y = event.pageY,
	lists = [];
	lists = entires
	for(var i = 0; i < lists.length; i++){
		if(lists[i].boxPosX+100 >= x && lists[i].boxPosX-100 <= x && lists[i].boxPosY+100 >= y && lists[i].boxPosY-100 <= y){
			entires.splice(i,1);
			score++;
		}
	}
}
function loop() {
    var rand = Math.round(Math.random() * (3000 - 1000));
    setTimeout(function() {
            spawnBug();
            loop();  
    }, rand);
}
function start() {
	loop();
	canvas.addEventListener('click', click, false);
	for(var i = 0; i <= food; i++){
		foods.push(makeFood(i*100,i*100));
	}
}
//function sprite(options){
//	var that = {};
//
//	that.context = options.context;
//	that.width = options.width;
//	that.height = options.height;
//	that.image = options.image;
//
//	return that;
//}

function draw(){
	context.fillStyle = "white";
	context.fillRect(0,0,WIDTH,HEIGHT);
	context2.clearRect(0,0,canvas2.width, canvas2.height);
	context2.fillText(clock, 10,50);
	context2.fillText(score, 300,50);
	for(var x = 0; x < entires.length; x++){
		entires[x].draw(context);
	}
	for(var x = 0; x < foods.length; x++){
		foods[x].draw(context);
	}
	if (counter == 60){
		clock--;
		counter = 0;
	}
	counter ++;

}
function update(){
	for(var x = 0; x < entires.length; x++){
		entires[x].update();
	}
}
function mainLoop(){
	update();
	draw();
	requestAnimationFrame(mainLoop);
}
function spawnBug(){
	entires.push(makeBug((Math.random()*400),10));
}

function makeFood(x,y){
	var foodPosX = x,
	foodPosY = y;

	function draw(context){
		context.save();	
		context.translate(foodPosX,foodPosY);
		context.fillStyle = 'black';
		context.fillRect(-3,-1,6,2);
		context.restore();
	}
	return{
		draw: draw,
		foodPosY: foodPosY,
		foodPosX: foodPosX
	}
}

function makeBug(x,y){
	var boxPosX = x,
	boxPosY = y,
	speed = 0.5,
	tx = (9999 - boxPosX),
	ty = (9999 - boxPosY),
	direction = 0,
	turnSpeed = (2*Math.PI) / 50,
	total =  Math.sqrt(tx * tx + ty * ty),
	drawing = new Image();
	drawing.src = "bug3.png";

	function draw(context){
		context.save();	
		context.translate(boxPosX,boxPosY);
		context.rotate(direction);
		context.fillStyle = 'black';
		context.drawImage(drawing,0,0);
		context.restore();
	}
	function update(){
		for(var x = 0; x < foods.length; x++){
			var tx1 = (foods[x].foodPosX - boxPosX);
			var ty1 = (foods[x].foodPosY - boxPosY);
			var total1 = Math.sqrt(tx1 * tx1 + ty1 * ty1);
			if (total1 < total){
				tx = tx1;
				ty = ty1;
				total = total1;
			}
			if(foods[x].foodPosX+10 >= boxPosX && foods[x].foodPosX-10 <= boxPosX && foods[x].foodPosY+10 >= boxPosY && foods[x].foodPosY-10 <= boxPosY){
				foods.splice(x,1);
			}
		}
		var angle = Math.atan2(ty,tx);
		var d = angle - direction;
		var abs = Math.abs(d);
		if (abs > Math.PI){
			d = abs - 2*Math.PI;
		}
		if(d !== 0) {
			var direction2 = d / abs;
			direction += (direction2 * Math.min(turnSpeed, abs));
		}
		direction %= 2*Math.PI;
		boxPosX += Math.cos(angle) * speed;
		boxPosY += Math.sin(angle) * speed;
		tx = (9999 - boxPosX),
		ty = (9999 - boxPosY),
		total =  Math.sqrt(tx * tx + ty * ty);

	}
	return{
		draw: draw,
		update: update,
		boxPosY: boxPosY,
		boxPosX: boxPosX
	}
}
start();
requestAnimationFrame(mainLoop);