const Game = require('./game.js');

function GameView(game, ctx){
    this.ctx = ctx;
    this.game = game;
}

GameView.prototype.start = function(){
    setInterval( () => {
        this.game.step(this.ctx);
        this.game.draw(this.ctx);
    }, Math.floor(1000/Game.FPS));
}

module.exports = GameView;
