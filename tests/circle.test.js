const assert = require("assert");
const Circle = require("../src/circle");

describe("Testcase for circle", () => {
  it("Set redius of a circle", () => {
    const radius = 10;
    const circleInstance = new Circle(radius);
    assert.equal(radius, circleInstance.radius);
  });

  it("Calculate area of circle", () => {
    const radius = 10;
    const computedArea = Math.PI * Math.pow(radius, 2);
    const circleInstance = new Circle(radius);
    const area = circleInstance.area();
    assert.equal(area, computedArea);
  });

  it("Throw error while calculating area of circle when invalid string provided", () => {
    try {
      const radius = "abcd";
      const circleInstance = new Circle(radius);
    } catch (err) {
      assert.equal("Invalid radius value for the circle", err.message);
    }
  });
});
