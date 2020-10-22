import { makeRandomNum, makeRandomItems } from '../cli.js';
import playGame from '../index.js';

const taskGame = 'What is the result of the expression?';
const arithmeticSigns = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calc = (firstNum, secondNum, operator) => {
  if (operator === '+') {
    return firstNum + secondNum;
  }
  if (operator === '-') {
    return firstNum - secondNum;
  }
  if (operator === '*') {
    return firstNum * secondNum;
  }
};

const makeCalc = () => {
  const randomOperator = makeRandomItems(arithmeticSigns);
  const randomNum1 = makeRandomNum();
  const randomNum2 = makeRandomNum();
  const question = `${randomNum1}${randomOperator}${randomNum2}`;
  const expressionResult = calc(randomNum1, randomNum2, randomOperator);

  return [String(expressionResult), question];
};

export default () => playGame(makeCalc, taskGame);
