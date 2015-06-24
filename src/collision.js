var Vector = require("./vector.js");

function findSeperatingLine(A,B) {
    for(var i=0,j=A.n-1;i<A.n;j=i,i++) {
        var edge = Vector.minus(A.verticies[i],A.verticies[j]);
        var axis = edge.normal();
        if(isSeparate(A,B,axis))
            return true;
    }
    return false;
}

function isSeparate(A,B,axis) {
    var intervalA = calculateInterval(A,axis),
        intervalB = calculateInterval(B,axis);

    return intervalA[0]>intervalB[1] || intervalA[1]<intervalB[0];
}

function calculateInterval(polygon, axis) {
    var min, max;
    min = max = Vector.dot(polygon.verticies[0], axis);
    for(var i=1;i<polygon.verticies.length;i++) {
        var d = Vector.dot(polygon.verticies[i], axis);
        min = Math.min(d,min);
        max = Math.max(d,max);
    }
    return [min,max];
}

module.exports.checkCollision = function(A,B) {
    if(findSeperatingLine(A,B))
        return false;
    if(findSeperatingLine(B,A))
        return false;
    return true;
}

module.exports.applyCollision = function(A,B) {
    A.collided = true;
    B.collided = true;
}
