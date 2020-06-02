const Util = require('./util');

function MovingObject(opts){
    this.game = opts.game;
    this.pos = opts.pos;
    this.vel = opts.vel;
    this.radius = opts.radius;
    this.color = opts.color;
}

MovingObject.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
};

MovingObject.prototype.move = function(fps){
    this.pos[0] += this.vel[0]/fps;
    this.pos[1] += this.vel[1]/fps;
    this.pos = this.game.wrap(this.pos, this.radius);
};

MovingObject.prototype.isCollidedWith = function(obj){
    let dist = Util.distance(this.pos, obj.pos);
    let min = this.radius + obj.radius;
    //console.log(`dist: ${dist}, min: ${min}`);
    return dist < min;
};

MovingObject.prototype.collideWith = function(obj){};

module.exports = MovingObject;
