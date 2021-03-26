class CheckWord {
  constructor(word) {
    this.word = word;
  }

  isFirstLetterCapital() {
    return /^[A-Z]/.test(this.word);
  }
}

module.exports = CheckWord;
