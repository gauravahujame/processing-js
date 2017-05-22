var canvasWidth = 840;
var canvasHeight = 500;

var shapeCount = 32;
var shapes = [];
var currentAngle = 0;

var angle = 0;
var slider;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  slider = createSlider(0, TWO_PI, PI / 4, 0.001);
  frameRate(10);
}

function draw() {
  background(0, 0, 0); 
  angle = slider.value();
  var len = 100;
  stroke(random(255), random(255), random(255));
  translate(420, height);
  branch(150);
}  

function branch(len) {
  line(0, 0, 0, - len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
  //line(0, 0, 0, -len * 0.66);

 }

