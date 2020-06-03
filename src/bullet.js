const MovingObject = require('./moving_object');
const Util = require('./util');

function Bullet(pos, vel, game){
    let opts = {};
    opts.pos = pos;
    opts.vel = [2*vel[0], 2*vel[1]];
    opts.radius = Bullet.RADIUS;
    opts.color = Bullet.COLOR;
    opts.game = game;

    MovingObject.call(this, opts);
}
Util.inherits(Bullet, MovingObject);

Bullet.COLOR = 'yellow';
Bullet.RADIUS = 5;

Bullet.prototype.isWrappable = false;

module.exports = Bullet;
