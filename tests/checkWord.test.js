const assert = require("assert");
const { isFirstLetterCapital } = require("../src");
const { ERROR_MESSAGE_STRING } = require("../constants");

describe("Testcase for checkWord", () => {
  const errorMessage = "Invalid string";
  it("First letter should be capital", () => {
    const word = "Hello";
    const result = isFirstLetterCapital(word);
    assert.equal(result, true);
  });

  it("First letter should be small", () => {
    const word = "hello";
    const result = isFirstLetterCapital(word);
    assert.equal(result, false);
  });

  it("Throw error while checking blank string", () => {
    try {
      const word = "";
      isFirstLetterCapital(word);
      assert.fail();
    } catch (err) {
      assert.equal(ERROR_MESSAGE_STRING, err.message);
    }
  });

  it("Throw error while passing object as input", () => {
    try {
      const word = { test: "" };
      isFirstLetterCapital(word);
      assert.fail();
    } catch (err) {
      assert.equal(ERROR_MESSAGE_STRING, err.message);
    }
  });
});
