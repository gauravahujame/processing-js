function Star() {
  this.x = width;
  this.y = random(300);
  this.speed = 2;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 3, 3);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.outOfScreen = function() {
    return (this.x < -this.width ? true : false);
  }
}
