const { checkIsNumber } = require("../utils");
const { ERROR_MESSAGE_CIRCLE } = require("../constants");

const getCircleArea = (radius) => {
  if (checkIsNumber(radius) && parseFloat(radius) > 0) {
    return Math.PI * Math.pow(radius, 2);
  }
  throw new Error(ERROR_MESSAGE_CIRCLE);
};

module.exports = { getCircleArea };
