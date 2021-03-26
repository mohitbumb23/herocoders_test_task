const checkIsNumber = (number) => {
  const regex = new RegExp(/^[0-9]/, "g");
  return regex.test(number);
};

module.exports = { checkIsNumber };
