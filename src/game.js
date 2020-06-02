const Ship = require('./ship');
const Asteroid = require('./asteroid');
const Util = require('./util');

function Game(){
    this.asteroids = [];
    this.ship = new Ship({ game: this });

    this.addAsteroids();
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 60;
Game.NUM_ASTEROIDS = 10;

Game.prototype.allObjects = function(){
    return [].concat(this.asteroids, this.ship);
};

Game.prototype.addAsteroids = function(){
    while(this.asteroids.length < Game.NUM_ASTEROIDS)
        this.asteroids.push( new Asteroid({game: this}) );
};

Game.prototype.addShip = function(){

};

Game.prototype.randomPosition = function(){
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
};

Game.prototype.draw = function(ctx){
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach( obj => obj.draw(ctx) );
};

Game.prototype.moveObjects = function(ctx){
    this.allObjects().forEach( obj => obj.move(Game.FPS) );
};

Game.prototype.wrap = function(pos, radius){
    return [
        Util.wrap(pos[0], Game.DIM_X, radius ),
        Util.wrap(pos[1], Game.DIM_Y, radius )
    ];
};

Game.prototype.checkCollisions = function(){
    let objects = this.allObjects();
    for(var i = 0; i < objects.length-1; i++){
        for(var j = i + 1; j < objects.length; j++){
            if( objects[i].isCollidedWith(objects[j]) )
                objects[i].collideWith(objects[j]);
        }
    }
};

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.remove = function(rock){
    this.asteroids.splice(this.asteroids.indexOf(rock), 1);
};

module.exports = Game;
