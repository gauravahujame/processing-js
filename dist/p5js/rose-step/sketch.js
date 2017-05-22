var canvasWidth = 840;
var canvasHeight = 500;

var n = 1;
var d = 1;
var k;


function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  frameRate(30);
  //noLoop();
  background(0, 0, 0); 

  d = Math.floor(random(1, 50))
  n = Math.floor(random(1, 35))
  k = n / d;
  console.log(d)
  console.log(n)

  generatePoints();
}


var xPoints = [];
var yPoints = [];

function generatePoints() {
  for (var a = 0; a < TWO_PI * d; a += 0.01) {
    var r = 500 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    xPoints.push(x);
    xPoints.push(y);
  }
}




function draw() {
  //translate(width / 2, height / 2);
  stroke(random(255), random(255), random(255));
  point(xPoints.pop(), yPoints.pop());  
}  

