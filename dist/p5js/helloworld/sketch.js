var canvasWidth = 840;
var canvasHeight = 500;
var shapeCount = 500;
var shapes = [];
var currentShape;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  fill(255);
  frameRate(30);
  while(this.shapeCount > 0) {
    this.shapes.push(new Shape(random(canvasWidth), random(canvasHeight)));
    this.shapeCount--;
  }
}

function draw() {
  background(0, 0, 100);  //Color for the sky
  for (var i = 0; i < this.shapes.length; i++ ) {
    this.shapes[i].fall();
    this.shapes[i].show();
  }
}
