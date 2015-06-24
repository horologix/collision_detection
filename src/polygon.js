var Vector = require("./vector.js");
var Collision = require("./collision.js");

function Polygon(attr) {
    attr.n = attr.n || 4;
    attr.r = attr.r || 100;
    attr.x = attr.x || 0;
    attr.y = attr.y || 0;
    attr.a = attr.a || 0;
    attr.da = attr.da || 0;
    attr.vx = attr.vx || 0;
    attr.vy = attr.vy || 0;
    attr.invMass = attr.invMass || 0;

    this.n = attr.n;
    this.r = attr.r;
    
    this.vp = new Vector(attr.x,attr.y);
    this.vv = new Vector(attr.vx,attr.vy);

    this.a = attr.a;
    this.da = attr.da;

    this.invMass = attr.invMass;
    this.collided = false;

    this.verticies = [];
    for(var i=0;i<this.n;i++)
        this.verticies.push(new Vector(0,0));
    this.updateVerticies();
}

Polygon.checkCollision = Collision.checkCollision;
Polygon.applyCollision = Collision.applyCollision;

Polygon.prototype.update = function() {
    this.collided = false;
    if(this.invMass === 0) {
        this.da = 0;
        return;
    }
    
    this.vp = this.vp.add(this.vv);
    this.a += this.da;
};

Polygon.prototype.updateVerticies = function() {
    for(var i=0;i<this.n;i++) {
        var angle = 2*Math.PI*i/this.n+this.a;
        this.verticies[i].update(this.vp[0]+this.r*Math.cos(angle),this.vp[1]+this.r*Math.sin(angle));
    }
};

module.exports = Polygon;
