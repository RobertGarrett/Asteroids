const Game = require('./game.js');

Function.prototype.myDebounce = function(interval){
    let timeout;
    return (...args) => {
        const fnCall = () => {
            timeout = null;
            this(...args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, interval);
    }
}

function GameView(game, ctx){
    this.ctx = ctx;
    this.game = game;
    this.ship = game.ship;
}

GameView.MOVES = {
  w: [0, -5],
  a: [-5, 0],
  s: [0, 5],
  d: [5, 0],
};

GameView.prototype.start = function(){
    setInterval( () => {
        this.game.step(this.ctx);
        this.game.draw(this.ctx);
    }, Math.floor(1000/Game.FPS) );
    this.bindKeyHandlers();
};

GameView.prototype.bindKeyHandlers = function(){
    const ship = this.ship;
    Object.keys(GameView.MOVES).forEach( k => {
        const move = GameView.MOVES[k];
        key(k, () => ship.power(move) );
    });

    key("space", () => ship.fireBullet() );
};

module.exports = GameView;
