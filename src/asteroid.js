const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

function Asteroid(opts = {}){
    opts.color = Asteroid.COLOR;
    opts.pos = opts.pos || opts.game.randomPosition();
    opts.radius = Asteroid.RADIUS;
    opts.vel = opts.vel || Util.randomVec(Asteroid.SPEED);

    MovingObject.call(this, opts);
}

Asteroid.COLOR = "gray";
Asteroid.RADIUS = 25;
Asteroid.SPEED = 300;

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
