const { Circle, CheckWord } = require("./src");

const checkCircleArea = () => {
  try {
    /* Calculate area start */
    const radius = 10;
    const circleInstance = new Circle(radius);
    const area = circleInstance.area();
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
    const checkWordInstance = new CheckWord(word);
    const result = checkWordInstance.isFirstLetterCapital();
    console.log(`Is string '${word}' starts with an upper-case? ${result}`);
    /* Check string first letter */
  } catch (err) {
    console.log(err.message);
  }
};

// Initiate function;
checkCircleArea();
checkString();
