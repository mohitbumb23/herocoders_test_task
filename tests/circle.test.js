const assert = require("assert");
const { getCircleArea } = require("../src");
const { ERROR_MESSAGE_CIRCLE } = require("../constants");

describe("Testcase for circle", () => {
  it("Calculate area of circle when redius is positive number", () => {
    const radius = 10;
    const computedArea = Math.PI * Math.pow(radius, 2);
    const area = getCircleArea(radius);
    assert.equal(area, computedArea);
  });

  it("Throw error while calculating area of circle when radius is 0", () => {
    try {
      const radius = 0;
      getCircleArea(radius);
      assert.fail();
    } catch (err) {
      assert.equal(ERROR_MESSAGE_CIRCLE, err.message);
    }
  });

  it("Throw error while calculating area of circle when invalid string provided", () => {
    try {
      const radius = "abcd";
      getCircleArea(radius);
      assert.fail();
    } catch (err) {
      assert.equal(ERROR_MESSAGE_CIRCLE, err.message);
    }
  });
});
