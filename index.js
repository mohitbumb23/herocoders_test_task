const Circle = require("./src/circle");

const main = () => {
  try {
    /* Calculate area start */
    const radius = 10;
    const circleInstance = new Circle(radius);
    const area = circleInstance.area();
    console.log(`Area of a circle with radius ${radius} is ${area}.`);
    /* Calculate area end */
  } catch (err) {
    console.log(err.message);
  }
};

// Initiate finction;
main();
