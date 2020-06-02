const Util = require('./util');
const MovingObject = require('./moving_object');
const Game = require('./game');

function Ship(opts = {}){
    opts.color = Ship.COLOR;
    opts.pos = opts.game.randomPosition();
    opts.radius = Ship.RADIUS;
    opts.vel = opts.vel || [0,0];

    MovingObject.call(this, opts);
}

Ship.RADIUS = 10;
Ship.COLOR = "red";

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function relocate() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
};

Ship.prototype.power = function(impulse){
    this.vel[0] = 50*impulse[0];
    this.vel[1] = 50*impulse[1];
    return Ship.power;
};

module.exports = Ship;
