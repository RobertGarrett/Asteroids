const Game = require("./game");
const GameView = require("./game_view");

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById("game-canvas");
    canvas.width = Game.DIM_X;
    canvas.height = Game.DIM_Y;

    ctx = canvas.getContext("2d");
    new GameView( new Game(), ctx ).start();
});
