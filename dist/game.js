/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/assets/blood-splat-icon.png":
/*!********************************************!*\
  !*** ./public/assets/blood-splat-icon.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "21d38cf216a7e28988614a53157fd5af.png");

/***/ }),

/***/ "./public/assets/foods.png":
/*!*********************************!*\
  !*** ./public/assets/foods.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5794f371b03fdacbf839da9aee0baddd.png");

/***/ }),

/***/ "./public/assets/grass.png":
/*!*********************************!*\
  !*** ./public/assets/grass.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2055df7e8ccfbe56d72721d3ca1e7e99.png");

/***/ }),

/***/ "./public/assets/red_X.png":
/*!*********************************!*\
  !*** ./public/assets/red_X.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4c4bfe66508080144ef97ca92d71b056.png");

/***/ }),

/***/ "./public/assets/splatsound.wav":
/*!**************************************!*\
  !*** ./public/assets/splatsound.wav ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "daddf030ec596d9ab017e6df49a378c2.wav");

/***/ }),

/***/ "./src/bugs.ts":
/*!*********************!*\
  !*** ./src/bugs.ts ***!
  \*********************/
/*! exports provided: blackBug, redBug, orangeBug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blackBug", function() { return blackBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redBug", function() { return redBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orangeBug", function() { return orangeBug; });
var blackBug = Object.freeze({
    color: "rgba(0, 0, 0)",
    speed1: 0.15,
    speed2: 0.2,
    score: 5,
    probability: 0.3,
});
var redBug = Object.freeze({
    color: "rgba(255, 0, 0)",
    speed1: 0.075,
    speed2: 0.1,
    score: 3,
    probability: 0.3,
});
var orangeBug = Object.freeze({
    color: "rgba(255, 102, 0)",
    speed1: 0.06,
    speed2: 0.08,
    score: 1,
    probability: 0.4,
});


/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/*! exports provided: foods, background, bloodSplat, redX, splat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foods", function() { return foods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloodSplat", function() { return bloodSplat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redX", function() { return redX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splat", function() { return splat; });
/* harmony import */ var _assets_grass_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/grass.png */ "./public/assets/grass.png");
/* harmony import */ var _assets_foods_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/foods.png */ "./public/assets/foods.png");
/* harmony import */ var _assets_blood_splat_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/blood-splat-icon.png */ "./public/assets/blood-splat-icon.png");
/* harmony import */ var _assets_red_X_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/red_X.png */ "./public/assets/red_X.png");
/* harmony import */ var _assets_splatsound_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/splatsound.wav */ "./public/assets/splatsound.wav");






const foods = new Image();
const background = new Image();
const bloodSplat = new Image();
const redX = new Image();
const splat = new Audio(_assets_splatsound_wav__WEBPACK_IMPORTED_MODULE_4__["default"]);
foods.src = _assets_foods_png__WEBPACK_IMPORTED_MODULE_1__["default"];
background.src = _assets_grass_png__WEBPACK_IMPORTED_MODULE_0__["default"];
bloodSplat.src = _assets_blood_splat_icon_png__WEBPACK_IMPORTED_MODULE_2__["default"];
redX.src = _assets_red_X_png__WEBPACK_IMPORTED_MODULE_3__["default"];
background.src = _assets_grass_png__WEBPACK_IMPORTED_MODULE_0__["default"];

// // var backgroundMusic = new Audio("Spring_In_My_Step_-_Silent_Partner.wav");


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _bugs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bugs */ "./src/bugs.ts");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/images.js");


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
// var backgroundMusic = new Audio("Spring_In_My_Step_-_Silent_Partner.wav");
var level;
var canvas = document.getElementById("gameBoard");
// Known Issues:
//1. change of lineWidth changes the width of shape of bugs as well.
//2. Gameover function not implemented. RESOLVED
//3. Pausing the game doesn't stop the bug spawning loop.   RESOLVED
//4. speed differene from level not implemented.   RESOLVED
//5. Bugs wont fade out when killed RESOLVED
window.addEventListener("mousedown", doMouseDown, false);
window.addEventListener("load", init);
function gameOver() {
    var ctx = canvas.getContext("2d");
    gameEnded = true;
    paused = true;
    clearTimeout(spawnID);
    cancelAnimationFrame(requestID);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "black";
    ctx.font = "bold 15px Arial";
    ctx.fillText("GameOver", 160, 300);
    ctx.fillText("Your Score is: " + score, 145, 320);
    ctx.strokeRect(100, 350, 50, 30);
    ctx.strokeRect(250, 350, 50, 30);
    ctx.fillStyle = "black";
    ctx.fillText("Replay", 100, 370);
    ctx.fillText("Exit", 260, 370);
    var highScore = Number(localStorage.getItem("highscore")) || 0;
    localStorage.setItem("highscore", Math.max(highScore, score).toString());
}
function doMouseDown(event) {
    clickX = event.pageX - document.getElementById("gameBoard").offsetLeft;
    clickY = event.pageY - document.getElementById("gameBoard").offsetTop;
    // Controls for game screen
    if (gameEnded == false) {
        //console.log(clickX + " " + clickY + paused);
        if (215 > clickX &&
            185 < clickX &&
            scoreBoardHeight / 2 + 15 > clickY &&
            clickY > scoreBoardHeight / 2 - 15) {
            paused = !paused;
            var ctx = canvas.getContext("2d");
            drawScoreBoard(ctx);
            //Pause & Unpause the spawning loop.
            switchStateSpawningLoop();
            if (paused) {
                cancelAnimationFrame(requestID);
            }
            else {
                requestID = requestAnimationFrame(mainLoop);
            }
        }
        // Controls for game over screen.
    }
    else {
        //Clicking Replay Button.
        if (clickX > 100 && clickX < 150 && clickY > 350 && clickY < 380) {
            location.reload();
            //Clicking Exit Button.
        }
        else if (clickX > 250 && clickX < 300 && clickY > 350 && clickY < 380) {
            window.location.href = "start.html";
        }
    }
}
function init() {
    console.log("object");
    // backgroundMusic.play();
    var canvas = document.getElementById("gameBoard");
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < numOfFood; i++) {
        foodArray.push(makeNewFood());
    }
    level = window.location.href.substr(window.location.href.lastIndexOf("=") + 1, 1);
    bugDrawingLoop();
    requestID = requestAnimationFrame(mainLoop);
}
function switchStateSpawningLoop() {
    if (paused) {
        clearTimeout(spawnID);
    }
    else {
        bugDrawingLoop();
    }
}
function drawScoreBoard(ctx) {
    ctx.clearRect(0, 0, 400, scoreBoardHeight);
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, scoreBoardHeight);
    ctx.lineTo(400, scoreBoardHeight);
    ctx.closePath();
    ctx.stroke();
    ctx.font = "bold 15px Arial";
    ctx.fillText("Time Left: " + Math.round(timeLeft * 10) / 10 + " sec", 10, scoreBoardHeight / 2 + 5);
    ctx.fillText("Score: " + score + " Points", 280, scoreBoardHeight / 2 + 5);
    ctx.strokeStyle = "black";
    ctx.strokeRect(185, scoreBoardHeight / 2 - 15, 30, 30);
    ctx.restore();
    if (paused) {
        console.log("here");
        ctx.save();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(189, scoreBoardHeight / 2 - 11);
        ctx.lineTo(211, scoreBoardHeight / 2);
        ctx.lineTo(189, scoreBoardHeight / 2 + 11);
        ctx.lineTo(189, scoreBoardHeight / 2 - 11);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    }
    else {
        console.log("alsohere");
        ctx.save();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(193, scoreBoardHeight / 2 - 11);
        ctx.lineTo(193, scoreBoardHeight / 2 + 11);
        ctx.moveTo(207, scoreBoardHeight / 2 - 11);
        ctx.lineTo(207, scoreBoardHeight / 2 + 11);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}
function mainLoop() {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_1__["background"], 0, 40);
    if (foodArray.length == 0) {
        gameOver();
        return;
    }
    var bugsToRemove = [];
    for (var i = 0; i < foodArray.length; i++) {
        foodArray[i].draw(ctx);
        foodArray[i].update(1000 / 60);
    }
    for (var i = 0; i < bugArray.length; i++) {
        bugArray[i].draw(ctx);
        if (!bugArray[i].update(1000 / 60)) {
            bugsToRemove.push(i);
        }
    }
    //resets the click point value.
    clickX = 0;
    clickY = 0;
    for (var i = bugsToRemove.length - 1; i >= 0; i--) {
        bugArray.splice(bugsToRemove[i], 1);
    }
    timeLeft -= 1 / 60;
    if (timeLeft < 0) {
        timeLeft = 0;
        gameOver();
        return;
    }
    drawScoreBoard(ctx);
    requestID = requestAnimationFrame(mainLoop);
}
function bugDrawingLoop() {
    var rand = Math.random() * 2000 + 1000; //1-3 seconds
    spawnID = setTimeout(function () {
        bugArray.push(makeNewBug());
        bugDrawingLoop();
    }, rand);
}
function makeNewFood() {
    var valid = false;
    var pictureX = 5 + Math.floor(Math.random() * 5) * 25;
    var pictureY = 10 + Math.floor(Math.random() * 2) * 20;
    //making sure food is not too close to each other.
    while (valid == false) {
        valid = true;
        var x = Math.random() * 360 + 20;
        var y = Math.random() * 500 + 100 + scoreBoardHeight;
        for (var i = 0; i < foodArray.length; i++) {
            if (x + 50 > foodArray[i].x &&
                foodArray[i].x > x - 50 &&
                y + 50 > foodArray[i].y &&
                foodArray[i].y > y - 50) {
                valid = false;
            }
        }
    }
    //console.log("x: " + x + "y: " + y);
    //console.log(pictureX);
    function draw(ctx) {
        var food = document.getElementById("food");
        ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_1__["foods"], pictureX, pictureY, 20, 20, x, y, 20, 20);
    }
    function update(elapsed) {
        return;
    }
    return { draw: draw, update: update, x: x, y: y };
}
function makeNewBug() {
    var flag = 0;
    var type;
    var rand = Math.random();
    if (rand < 0.3) {
        type = _bugs__WEBPACK_IMPORTED_MODULE_0__["blackBug"];
    }
    else if (rand < 0.6) {
        type = _bugs__WEBPACK_IMPORTED_MODULE_0__["redBug"];
    }
    else {
        type = _bugs__WEBPACK_IMPORTED_MODULE_0__["orangeBug"];
    }
    //info object.
    var info = {
        x: 10 + Math.random() * 380,
        y: 30 + scoreBoardHeight,
        type: type,
        transparency: 1,
        target: undefined,
    };
    function findTargetFood() {
        var distance = Math.pow(400, 2) + Math.pow(600, 2);
        var index;
        if (foodArray.length == 0) {
            gameOver();
            return;
        }
        else {
            //find which food to run for.
            for (var i = 0; i < foodArray.length; i++) {
                var newdis = Math.pow(foodArray[i].x - info.x, 2) +
                    Math.pow(foodArray[i].y - info.y, 2);
                if (newdis < distance) {
                    distance = newdis;
                    index = i;
                }
            }
            var target = {
                x: foodArray[index].x,
                y: foodArray[index].y,
                angle: findAngle(info.x, info.y, foodArray[index].x, foodArray[index].y),
                index: index,
            };
            return target;
        }
    }
    info.target = findTargetFood();
    function parseFillStyle() {
        return info.type.color + info.transparency + ")";
    }
    function draw(ctx) {
        if (info.transparency < 1) {
            if (flag == 0) {
                _images__WEBPACK_IMPORTED_MODULE_1__["splat"].play();
                flag = 1;
            }
            ctx.save();
            ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_1__["bloodSplat"], info.x - 15, info.y - 25);
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
        if (info.transparency < 1) {
            ctx.save();
            ctx.globalAlpha = info.transparency;
            ctx.drawImage(_images__WEBPACK_IMPORTED_MODULE_1__["redX"], info.x - 15, info.y - 15);
            ctx.restore();
        }
    }
    function evaluate() {
        return (info.x > info.target.x - 10 &&
            info.x < info.target.x + 10 &&
            info.y > info.target.y - 10 &&
            info.y < info.target.y + 10);
    }
    //return true or false, indicating whether the bug is killed.
    function update(elapsed) {
        // If the bug is already fading
        if (info.transparency < 1) {
            info.transparency -= 1 / 120;
            return info.transparency >= 0;
        }
        else {
            var speed;
            if (level == 1) {
                speed = info.type.speed1;
            }
            else {
                speed = info.type.speed2;
            }
            var distance = speed * elapsed;
            // If bug is clicked.
            if (clickX > info.x - 30 &&
                clickX < info.x + 30 &&
                clickY > info.y - 30 &&
                clickY < info.y + 30) {
                info.transparency -= 1 / 120;
                score += info.type.score;
                return true;
            }
            info.target = findTargetFood();
            info.x += distance * Math.cos(info.target.angle);
            info.y += distance * Math.sin(info.target.angle);
            //if we are touching the food.
            if (evaluate()) {
                foodArray.splice(info.target.index, 1);
            }
            return true;
        }
    }
    return { draw: draw, update: update, info: info };
}
function findAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}


/***/ })

/******/ });
//# sourceMappingURL=game.js.map