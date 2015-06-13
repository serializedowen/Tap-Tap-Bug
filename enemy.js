// alias (and pre-compute) the angle of
// a full circle (360°, but in radians)
var fullCircle = Math.PI * 2;
 
// invoke this function to create an emeny ship entity
// to add to the main game screen
function makeEnemyShip(x, y) {
// position is set based upon the values
// provided to the function
var position = {
x: x,
y: y
};
// the diretion the ship is facing
var orientation = 0;
 
// how quickly can the ship turn?
var turnSpeed = fullCircle / 50;
// how quickly can the ship move?
var speed = 2;
// the phantom target the ship
// is pursing
var target = findNewTarget();
 
// the function invoked from the screen's update
function update(elapsed) {
// determine how close we are to our target
var y = target.y - position.y;
var x = target.x - position.x;
var d2 = Math.pow(x, 2) + Math.pow(y, 2);
if (d2 < 16) {
// we've essentially "touched" it,
// so create a new target
target = findNewTarget();
} else {
 
// what's the different between our orientation
// and the angle we want to face in order to
// move directly at our target
var angle = Math.atan2(y, x);
var delta = angle - orientation;
var delta_abs = Math.abs(delta);
 
// if the different is more than 180°, convert
// the angle a corresponding negative value
if (delta_abs > Math.PI) {
delta = delta_abs - fullCircle;
}
 
// if the angle is already correct,
// don't bother adjusting
if (delta !== 0) {
// do we turn left or right?
var direction = delta / delta_abs;
// update our orientation
orientation += (direction * Math.min(turnSpeed, delta_abs));
}
// constrain orientation to reasonable bounds
orientation %= fullCircle;
 
// use orientation and speed to update our position
position.x += Math.cos(orientation) * speed;
position.y += Math.sin(orientation) * speed;
}
 
}
// the function invoked from the screen's draw
function draw(ctx) {
// save the context's state before we translate
// and rotate
ctx.save();
 
// translate to the entity's position
ctx.translate(position.x, position.y);
// rotate the canvas according to the
// entity's orientation
ctx.rotate(orientation);
// now we begin the actual drawing
ctx.fillStyle = 'yellow';
// using negative number to center
// around the translated origin
ctx.fillRect(-3, -1, 6, 2);
// restore the canvas since we're
// done drawing the entity
ctx.restore();
 
// now we draw the phantom target
// though we'll do so without translating
// since it's so simle to draw
ctx.beginPath();
ctx.fillStyle = 'rgba(255,0,0,0.5)';
ctx.arc(target.x, target.y, 2, 0, Math.PI * 2, true);
ctx.fill();
}
 
// create a random x,y within the bounds of the canvas
// note, we've hard coded the bounds
function findNewTarget() {
var target = {
x: Math.round(Math.random() * 600),
y: Math.round(Math.random() * 300)
};
 
return target;
}
 
// return an instance of the enemy,
// it's state is captured in the closure
// of the functions
return {
draw: draw,
update: update
}
} 