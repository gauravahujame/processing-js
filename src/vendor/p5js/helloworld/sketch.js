function setup() {
  var canvas = createCanvas(720, 400);
  canvas.parent('canvas');

  background(0);
  fill(255);

  for(var i = 0; i < 20; i++) {
    var rx = random(720) + 1;
    var ry = random(400) + 1;
    ellipse(rx, ry, 20, 20);
  }
}
