/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const RequestName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${RequestName}!`);
  return RequestName;
};


const RandomNumber = () => {
  const RandomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${RandomNumber}`);
  const even = (readlineSync.question('Your answer: ')) == 'yes';
  if ((RandomNumber % 2) != even) {
    return true;
  } return false;
};


const RandomSings = (arr) => {
  const RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
};


const RandomExpression = () => {
  const ArithmeticSigns = ['+', '-', '*'];
  const StRandomNumber = Math.floor(Math.random() * 100);
  const SdRandomNumber = Math.floor(Math.random() * 100);
  const expression = (StRandomNumber + RandomSings(ArithmeticSigns) + SdRandomNumber);
  return expression;
};

const UserAnswer = () => (readlineSync.question('Your answer: '));


export {
  RandomExpression, greeting, RandomNumber, UserAnswer,
};
