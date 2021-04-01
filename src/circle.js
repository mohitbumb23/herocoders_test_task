const { checkIsNumber } = require("../utils");

const getCircleArea = (radius) => {
  if (checkIsNumber(radius) && parseFloat(radius) > 0) {
    return Math.PI * Math.pow(radius, 2);
  } else {
    throw new Error("Invalid radius value for the circle");
  }
};

module.exports = { getCircleArea };
