const isFirstLetterCapital = (word) => {
  if (word) {
    // to remove preciding blank spaces
    const checkWord = word.trim();
    return /^[A-Z]/.test(checkWord);
  } else {
    throw new Error("Invalid string");
  }
};

module.exports = { isFirstLetterCapital };
