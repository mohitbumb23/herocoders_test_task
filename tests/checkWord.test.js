const assert = require("assert");
const CheckWord = require("../src/checkWord");

describe("Testcase for checkWord", () => {
  it("First letter should be capital", () => {
    const word = "Hello";
    const checkWordInstance = new CheckWord(word);
    const result = checkWordInstance.isFirstLetterCapital();
    assert.equal(result, true);
  });

  it("First letter should be small", () => {
    const word = "hello";
    const checkWordInstance = new CheckWord(word);
    const result = checkWordInstance.isFirstLetterCapital();
    assert.equal(result, false);
  });
});
