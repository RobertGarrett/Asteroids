const Util = {
    inherits(child, parent){
        child.prototype = Object.create(parent.prototype);
    },
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
    scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    },
    wrap(coord, max, offset) {
        if ( coord < 0 - offset )
            return max + offset;
        else if ( max + offset < coord )
            return -1*offset;
        else
            return coord;
    },
    distance(pos1, pos2){
        let x_dif = pos2[0] - pos1[0];
        let y_dif = pos2[1] - pos1[1];
        return Math.sqrt(x_dif*x_dif + y_dif*y_dif);
    }
};

module.exports = Util;
