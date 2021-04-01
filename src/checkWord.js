const { ERROR_MESSAGE_STRING } = require("../constants");

const isFirstLetterCapital = (word) => {
  if (word && typeof word === "string") {
    // to remove preciding blank spaces
    const checkWord = word.trim();
    if (checkWord) {
      return /^[A-Z]/.test(checkWord);
    }
  }
  throw new Error(ERROR_MESSAGE_STRING);
};

module.exports = { isFirstLetterCapital };
