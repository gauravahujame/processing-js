function Player() {
  this.size = 30;
  this.y = height - this.size;
  this.x = 48;

  this.gravity = 0.98;
  this.velocity = 0;
  this.jump_height = 16;
  this.score = 0;

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.size, this.size);

    textSize(14);
    text("SCORE: " + this.score, 20, 30);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if((this.y + this.size) > height) {
      this.y = height - this.size;
      this.velocity = 0;
    }
  }

  this.onBottom = function() {
    return this.y == (height - this.size);
  }

  this.jump = function() {
    this.velocity -= this.jump_height;
  }

  this.hits = function(obstacle) {
    if((obstacle.x >= this.x) && (obstacle.x <= (this.x + this.size)) &&
       ((this.y + this.size) >= (height - obstacle.height))) {
      return true;
    } else {
      return false;
    }
  }
}
