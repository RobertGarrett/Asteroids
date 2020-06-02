const Util = require('./util.js');
window.Util = Util;

const MovingObject = require('./moving_object.js');
window.MovingObject = MovingObject;

const Asteroid = require('./asteroid.js');
window.Asteroid = Asteroid;

const Game = require('./game.js');
window.Game = Game;

const GameView = require('./game_view.js');
window.GameView = GameView;

window.addEventListener('DOMContentLoaded', (event) => {
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    new GameView( new Game(), ctx ).start();
});
