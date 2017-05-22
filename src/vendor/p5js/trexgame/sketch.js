var player;
var obstacles = [];
var stars = [];

function setup() {
  initialize();
}

function draw() {
  background(0);

  for(var i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show();
    obstacles[i].update();

    if(player.hits(obstacles[i])) {
      initialize();
      return false;
    }

    if(obstacles[i].outOfScreen()) {
      obstacles.splice(i, 1);
      player.score += 10;
    }
  }

  for(var i = stars.length - 1; i >= 0; i--) {
    stars[i].show();
    stars[i].update();

    if(stars[i].outOfScreen()) {
      stars.splice(i, 1);
    }
  }

  player.update();
  player.show();

  if(frameCount % 80 == 0) {
    obstacles.push(new Obstacle());
  }

  if(frameCount % 10 == 0) {
    stars.push(new Star());
  }
}

function keyPressed() {
  if(keyCode == 87 && player.onBottom()) {
    player.jump();
  }
}

function initialize() {
  obstacles = [];
  stars = [];

  var canvas = createCanvas(720, 400);
  canvas.parent('canvas');

  player = new Player();
  obstacles.push(new Obstacle());
  stars.push(new Star());
}
