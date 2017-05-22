var center = { x:420, y:250 };
var currentRadius = 10;

function Shape(angle) {
    var x, y;

    this.show = function () {
        stroke(random(255), random(255), random(255));
        fill(random(255), random(255), random(255));
        //line(center.x, center.y, x, y);
        ellipse(x, y, 5);
    }

    this.grow = function () {
        doTheMagic(angle);
        currentRadius += .005;
    }

    function doTheMagic(angle) {
        x = center.x + currentRadius * Math.cos(2 * Math.PI * angle);
        y = center.y + currentRadius * Math.sin(2 * Math.PI * angle);
    }
}