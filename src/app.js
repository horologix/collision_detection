var display = require("./display.js");
var Polygon = require("./polygon.js");

var LIMSTEP = 1000;
var nstep = 0;
var polygons = [];

init();

function init() {
    add(new Polygon({
        n: 5,
        r: 75,
        x: 600,
        y: 350,
        da: -.03,
        vx: .0,
        invMass: 10
    }));
    
    add(new Polygon({
        n: 3,
        r: 125,
        x: 760,
        y: 350,
        da: .011,
        vx: -.0,
        invMass: 10
    }));

    step();
}

function step() {
    update();
    render();
    
    if(nstep++===LIMSTEP)
        debugger;
    requestAnimationFrame(step);
}

function update() {
    for(var i=0;i<polygons.length;i++)
        polygons[i].update();

    for(var i=0;i<polygons.length;i++)
        for(var j=i+1;j<polygons.length;j++) {
            var p1=polygons[i],
                p2=polygons[j];
            if(Polygon.checkCollision(p1,p2)) {
                Polygon.applyCollision(p1,p2);
            }
        }

    for(var i=0;i<polygons.length;i++)
        polygons[i].updateVerticies();
}

function render() {
    display.renderPolygons(polygons);
}

function add(poly) {
    polygons.push(poly);
}
