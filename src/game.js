const Ship = require('./ship');
const Asteroid = require('./asteroid');
const Bullet = require('./bullet');
const Util = require('./util');

function Game(){
    this.asteroids = [];
    this.bullets = [];
    this.ship = new Ship(this);

    this.addAsteroids();
}

Game.BG = '../images/space.jpg';
Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.FPS = 120;
Game.NUM_ASTEROIDS = 10;

Game.prototype.allObjects = function(){
    return [].concat(this.asteroids, this.bullets, this.ship);
};
Game.prototype.nonAsteroids = function(){
    return [].concat(this.bullets, this.ship);
}

Game.prototype.addAsteroids = function(){
    while(this.asteroids.length < Game.NUM_ASTEROIDS)
        this.add( new Asteroid(this) );
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
    this.nonAsteroids().forEach( obj => {
        this.asteroids.forEach( rock => {
            if( rock.isCollidedWith(obj) )
                rock.collideWith(obj);
        });
    });
};

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();
};

Game.prototype.add = function(obj){
    if( obj instanceof Asteroid )
        this.asteroids.push(obj);
    else if( obj instanceof Bullet )
        this.bullets.push(obj);
};

Game.prototype.remove = function(obj){
    if( obj instanceof Asteroid )
        this.asteroids.splice(this.asteroids.indexOf(obj), 1);
    else if( obj instanceof Bullet )
        this.bullets.splice(this.bullets.indexOf(obj), 1);
};

Game.prototype.isOutOfBounds = function(pos){
    return pos[0] < 0 || Game.DIM_X < pos[0] ||
            pos[1] < 0 || Game.DIM_Y < pos[1]
}

module.exports = Game;
