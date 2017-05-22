var canvasWidth = 840;
var canvasHeight = 500;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  frameRate(1);  
  //noLoop();
}

var n = 1;
var d = 1;

function draw() {
  background(0, 0, 0); 
  translate(width / 2, height / 2);
  
  beginShape();
  noFill();

  d = Math.floor(random(1,50))
  n = Math.floor(random(1,35))
  console.log(d)
  console.log(n)
  var k = n/d;

  for (var a = 0; a < TWO_PI * d; a += 0.01){ 
    var r = 200 * cos(k * a);
    var x = r * cos(a);
    var y = r * sin(a);
    stroke(random(255), random(255), random(255));
    vertex(x, y); 
  }
  endShape();
}  

