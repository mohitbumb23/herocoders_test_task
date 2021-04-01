const { getCircleArea, isFirstLetterCapital } = require("./src");

const checkCircleArea = () => {
  try {
    /* Calculate area start */
    const radius = 10;
    const area = getCircleArea(radius);
    console.log(`Area of a circle with radius ${radius} is ${area}.`);
    /* Calculate area end */
  } catch (err) {
    console.log(err.message);
  }
};

const checkString = () => {
  try {
    /* Check string first letter */
    const word = "Hello";
    const result = isFirstLetterCapital(word);
    console.log(`Is string '${word}' starts with an upper-case? ${result}`);
    /* Check string first letter */
  } catch (err) {
    console.log(err.message);
  }
};

// Initiate function;
checkCircleArea();
checkString();
