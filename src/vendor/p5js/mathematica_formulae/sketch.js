var angle = 0,
    point = 0,
    pos_x = 0,
    points = [];

function setup() {
  var canvas = createCanvas(720, 200);
  canvas.parent('sin');
  frameRate(60);
}

function draw() {
  background(0);
  fill(255);

  point = Math.sin(angle);
  if(angle >= 360) {
    angle = 0;
  } else {
    angle += 0.05;
  }

  if(pos_x >= 720) {
    pos_x = 0;
    points = [];
  } else {
    pos_x++;
    points.push(point);
  }

  for(var i = 0; i < points.length; i++) {
    if(points[i] == point) {
      fill(255, 0, 0);
      ellipse(i, (points[i]*50) + 100, 6, 6);
    } else {
      fill(255);
      ellipse(i, (points[i]*50) + 100, 2, 2);
    }
  }
}
