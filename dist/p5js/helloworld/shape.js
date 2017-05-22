function Shape(x, y) {
    this.x = x;
    this.y = y - 400;
    var randomSize = random(2, 6);
    var ySpeed = randomSize / 2;

    this.show = function() {
        noStroke();
        ellipse(this.x, this.y, randomSize, randomSize);
    }

    this.fall = function () {
        if (this.y > 500){
            this.y = 0;
        } else {
            this.y += ySpeed;
        }
    }
}