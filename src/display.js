var d3 = require("d3");

var screen = d3.select("body").append("svg")
    .attr("class", "screen");

module.exports.renderPolygons = function(data) {
    function points(d) {
        return d.verticies.map(function(v) {
            return v[0]+","+v[1];
        }).join(" ");
    }

    var p = screen.selectAll("polygon")
        .data(data)
        .classed("collided", function(d){return d.collided;});

    p.enter().append("polygon");
    p.attr("points",points);
};
