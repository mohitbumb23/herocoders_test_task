const { checkIsNumber } = require("../utils");

class Circle {
  constructor(radius) {
    if (checkIsNumber(radius)) {
      this.radius = radius;
    } else {
      throw new Error("Invalid radius value for the circle");
    }
  }
  // Calculate area of circle
  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

module.exports = Circle;
