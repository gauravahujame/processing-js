var canvasWidth = 840;
var canvasHeight = 500;
var shapeCount = 32;
var shapes = [];
var currentAngle = 0;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  frameRate(15);
  for (var i= 0; i <= shapeCount; i++) {
    this.shapes.push(new Shape(currentAngle));
    currentAngle = i / shapeCount;
  }
}

function draw() {
  background(0, 0, 0); 
  for (var i = 0; i < this.shapes.length; i++ ) {
    this.shapes[i].grow();
    this.shapes[i].show();
  }
}  

