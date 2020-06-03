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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Asteroid(game){\n    let opts = {};\n    opts.color = Asteroid.COLOR;\n    opts.pos = opts.pos || game.randomPosition();\n    opts.radius = Asteroid.RADIUS;\n    opts.vel = opts.vel || Util.randomVec(Asteroid.SPEED);\n    opts.game = game;\n\n    MovingObject.call(this, opts);\n}\n\nAsteroid.COLOR = \"gray\";\nAsteroid.RADIUS = 25;\nAsteroid.SPEED = 300;\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(obj){\n    if( obj instanceof Ship )\n        obj.relocate();\n    else if( obj instanceof Bullet ){\n        this.game.remove(this);\n        this.game.remove(obj);\n    }\n};\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Bullet(pos, vel, game){\n    let opts = {};\n    opts.pos = pos;\n    opts.vel = [2*vel[0], 2*vel[1]];\n    opts.radius = Bullet.RADIUS;\n    opts.color = Bullet.COLOR;\n    opts.game = game;\n\n    MovingObject.call(this, opts);\n}\nUtil.inherits(Bullet, MovingObject);\n\nBullet.COLOR = 'yellow';\nBullet.RADIUS = 5;\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Game(){\n    this.asteroids = [];\n    this.bullets = [];\n    this.ship = new Ship(this);\n\n    this.addAsteroids();\n}\n\nGame.BG = '../images/space.jpg';\nGame.BG_COLOR = \"#000000\";\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.FPS = 120;\nGame.NUM_ASTEROIDS = 10;\n\nGame.prototype.allObjects = function(){\n    return [].concat(this.asteroids, this.bullets, this.ship);\n};\nGame.prototype.nonAsteroids = function(){\n    return [].concat(this.bullets, this.ship);\n}\n\nGame.prototype.addAsteroids = function(){\n    while(this.asteroids.length < Game.NUM_ASTEROIDS)\n        this.add( new Asteroid(this) );\n};\n\nGame.prototype.addShip = function(){\n\n};\n\nGame.prototype.randomPosition = function(){\n    return [\n        Game.DIM_X * Math.random(),\n        Game.DIM_Y * Math.random()\n    ];\n};\n\nGame.prototype.draw = function(ctx){\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    this.allObjects().forEach( obj => obj.draw(ctx) );\n};\n\nGame.prototype.moveObjects = function(ctx){\n    this.allObjects().forEach( obj => obj.move(Game.FPS) );\n};\n\nGame.prototype.wrap = function(pos, radius){\n    return [\n        Util.wrap(pos[0], Game.DIM_X, radius ),\n        Util.wrap(pos[1], Game.DIM_Y, radius )\n    ];\n};\n\nGame.prototype.checkCollisions = function(){\n    this.nonAsteroids().forEach( obj => {\n        this.asteroids.forEach( rock => {\n            if( rock.isCollidedWith(obj) )\n                rock.collideWith(obj);\n        });\n    });\n};\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n};\n\nGame.prototype.add = function(obj){\n    if( obj instanceof Asteroid )\n        this.asteroids.push(obj);\n    else if( obj instanceof Bullet )\n        this.bullets.push(obj);\n};\n\nGame.prototype.remove = function(obj){\n    if( obj instanceof Asteroid )\n        this.asteroids.splice(this.asteroids.indexOf(obj), 1);\n    else if( obj instanceof Bullet )\n        this.bullets.splice(this.bullets.indexOf(obj), 1);\n};\n\nGame.prototype.isOutOfBounds = function(pos){\n    return pos[0] < 0 || Game.DIM_X < pos[0] ||\n            pos[1] < 0 || Game.DIM_Y < pos[1]\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nFunction.prototype.myDebounce = function(interval){\n    let timeout;\n    return (...args) => {\n        const fnCall = () => {\n            timeout = null;\n            this(...args);\n        }\n        clearTimeout(timeout);\n        timeout = setTimeout(fnCall, interval);\n    }\n}\n\nfunction GameView(game, ctx){\n    this.ctx = ctx;\n    this.game = game;\n    this.ship = game.ship;\n}\n\nGameView.MOVES = {\n  w: [0, -5],\n  a: [-5, 0],\n  s: [0, 5],\n  d: [5, 0],\n};\n\nGameView.prototype.start = function(){\n    setInterval( () => {\n        this.game.step(this.ctx);\n        this.game.draw(this.ctx);\n    }, Math.floor(1000/Game.FPS) );\n    this.bindKeyHandlers();\n};\n\nGameView.prototype.bindKeyHandlers = function(){\n    const ship = this.ship;\n    Object.keys(GameView.MOVES).forEach( k => {\n        const move = GameView.MOVES[k];\n        key(k, () => ship.power(move) );\n    });\n\n    key(\"space\", () => ship.fireBullet() );\n};\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.width = Game.DIM_X;\n    canvas.height = Game.DIM_Y;\n\n    ctx = canvas.getContext(\"2d\");\n    new GameView( new Game(), ctx ).start();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(opts){\n    this.game = opts.game;\n    this.pos = opts.pos;\n    this.vel = opts.vel;\n    this.radius = opts.radius;\n    this.color = opts.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function(fps){\n    this.pos[0] += this.vel[0]/fps;\n    this.pos[1] += this.vel[1]/fps;\n\n    if( this.isWrappable )\n        this.pos = this.game.wrap(this.pos, this.radius);\n    else if( this.game.isOutOfBounds(this.pos) )\n        this.game.remove(this);\n};\n\nMovingObject.prototype.isCollidedWith = function(obj){\n    let dist = Util.distance(this.pos, obj.pos);\n    let min = this.radius + obj.radius;\n    //console.log(`dist: ${dist}, min: ${min}`);\n    return dist < min;\n};\n\nMovingObject.prototype.isWrappable = true;\n\nMovingObject.prototype.collideWith = function(obj){};\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet.js */ \"./src/bullet.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction Ship(game){\n    let opts = {};\n    opts.color = Ship.COLOR;\n    opts.pos = game.randomPosition();\n    opts.radius = Ship.RADIUS;\n    opts.vel = [0,0];\n    opts.game = game;\n    console.log(opts.game);\n    MovingObject.call(this, opts);\n}\n\nShip.RADIUS = 10;\nShip.COLOR = \"red\";\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function relocate() {\n    this.pos = this.game.randomPosition();\n    this.vel = [0, 0];\n};\n\nShip.prototype.power = function(impulse){\n    this.vel[0] = 50*impulse[0];\n    this.vel[1] = 50*impulse[1];\n    return Ship.power;\n};\n\nShip.prototype.fireBullet= function(){\n    this.game.add( new Bullet(this.pos, this.vel, this.game) );\n};\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(child, parent){\n        child.prototype = Object.create(parent.prototype);\n    },\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    wrap(coord, max, offset) {\n        if ( coord < 0 - offset )\n            return max + offset;\n        else if ( max + offset < coord )\n            return -1*offset;\n        else\n            return coord;\n    },\n    distance(pos1, pos2){\n        let x_dif = pos2[0] - pos1[0];\n        let y_dif = pos2[1] - pos1[1];\n        return Math.sqrt(x_dif*x_dif + y_dif*y_dif);\n    }\n};\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });