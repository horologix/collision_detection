function Vector(x,y) {
    this.update(x,y);
}

Vector.add = function(u,v) {
    return new Vector(u[0]+v[0],u[1]+v[1]);
}
Vector.minus = function(u,v) {
    return new Vector(u[0]-v[0],u[1]-v[1]);
}
Vector.dot = function(u,v) {
    return u[0]*v[0]+u[1]*v[1];
}
Vector.cross = function(u,v) {
    return u[0]*v[1]-u[1]*v[0];
}

Vector.prototype.normal = function() {
    return new Vector(-1*this[1],this[0]);
}
Vector.prototype.add = function(v) {
    return this.update(this[0]+v[0],this[1]+v[1]);
}
Vector.prototype.minus = function(v) {
    return this.update(this[0]-v[0],this[1]-v[1]);
}
Vector.prototype.update = function(x,y) {
    this[0] = x;
    this[1] = y;
    return this;
}

module.exports = Vector;
