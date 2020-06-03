const Util = require('./util');
const MovingObject = require('./moving_object');
const Bullet = require('./bullet');
const Ship = require('./ship');

function Asteroid(game){
    let opts = {};
    opts.color = Asteroid.COLOR;
    opts.pos = opts.pos || game.randomPosition();
    opts.radius = Asteroid.RADIUS;
    opts.vel = opts.vel || Util.randomVec(Asteroid.SPEED);
    opts.game = game;

    MovingObject.call(this, opts);
}

Asteroid.COLOR = "gray";
Asteroid.RADIUS = 25;
Asteroid.SPEED = 300;

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(obj){
    if( obj instanceof Ship )
        obj.relocate();
    else if( obj instanceof Bullet ){
        this.game.remove(this);
        this.game.remove(obj);
    }
};

module.exports = Asteroid;
