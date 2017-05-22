var colors = [];
var canvasWidth = 1200;
var canvasHeight = 500;

function setup() {
  var canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvas');
  noFill();
  addColors();
  smooth(8);
  //background(20);
  noLoop();
  //frameRate(10);
  //fullScreen();
}


function draw() {
  background(20);
  makeRibbons();
}


function makeRibbons() {
  for (var i = 0; i < 1; i++) {
    var strokeW = 1;  //Stroke weight
    var amount = 300;  //Amount of curves in one line
    var frequency = random(1.0) / 15;
    var offset = random(50) + 5;  //Max min offset
    var col = getRandomColor();  //Color
    strokeWeight(strokeW);
    stroke(col, 90);
    var startY = height / 2;
    beginShape();
    vertex(0, startY);
    
    var randomX = 0;
    var randomY = 250;
    var randomX2 = 300;
    var randomY2 = 125;
    var randomX3 = 600;
    var randomY3 = 250;
    
    var rrandomX = 600;
    var rrandomY = 250;
    var rrandomX2 = 900;
    var rrandomY2 = 375;
    var rrandomX3 = 1200;
    var rrandomY3 = 250;

    ellipse(randomX, randomY, 10, 10);
    ellipse(randomX2, randomY2, 10, 10);
    ellipse(randomX3, randomY3, 10, 10);

    ellipse(rrandomX, rrandomY, 10, 10);
    ellipse(rrandomX2, rrandomY2, 10, 10);
    ellipse(rrandomX3, rrandomY3, 10, 10);
    
    bezierVertex(randomX, randomY, randomX2, randomY2, randomX3, randomY3)
    bezierVertex(rrandomX, rrandomY, rrandomX2, rrandomY2, rrandomX3, rrandomY3)
    //bezierVertex(randomX, randomY, randomX2, randomY2, randomX3, randomY3)

    for (var c = 1; c < 3; c++) {
      var sinoffset = sin(frequency * c);
      var sinX = c * (width / amount);
      var sinY = startY + (sinoffset * offset);
      /* bezierVertex(sinX, sinY, sinX, sinY - 1, sinX, sinY);*/
    }
    endShape();
  }
}


function addColors() {
  var c;
  c = color(0, 138, 176);
  colors[0] = c;
  c = color(241, 100, 93);
  colors[1] = c;
  c = color(0, 176, 133);
  colors[2] = c;
  c = color(233, 108, 31);
  colors[3] = c;
  c = color(241, 114, 172);
  colors[4] = c;
  c = color(222, 57, 108);
  colors[5] = c;
  c = color(231, 206, 0);
  colors[6] = c;
  c = color(72, 22, 108);
  colors[7] = c;
  c = color(44, 164, 74);
  colors[8] = c;
}

function getRandomColor() {
  var i = Math.floor(random(colors.length));
  var c = colors[i];
  return c;
}
