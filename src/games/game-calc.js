import { makeRandomNum, makeRandomItems } from '../cli.js';
import playGame from '../index.js';

const taskGame = 'What is the result of the expression?';
const arithmeticSigns = ['+', '-', '*'];

const calc = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
};

const makeCalc = () => {
  const randomOperator = makeRandomItems(arithmeticSigns);
  const randomNum1 = makeRandomNum();
  const randomNum2 = makeRandomNum();
  const question = `${randomNum1}${randomOperator}${randomNum2}`;
  const expression = calc(randomNum1, randomNum2, randomOperator);

  return [String(expression), question];
};

export default () => playGame(makeCalc, taskGame);
