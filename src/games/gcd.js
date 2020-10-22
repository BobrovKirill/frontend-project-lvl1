import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (firstNumber, secondNumber) => {
  if (secondNumber > 0) {
    const temp = firstNumber % secondNumber;
    return greatestCommonDivisor(secondNumber, temp);
  }
  return firstNumber;
};

const makeGcd = () => {
  const randomNum1 = makeRandomNum();
  const randomNum2 = makeRandomNum();
  const result = greatestCommonDivisor(randomNum1, randomNum2);
  const question = (randomNum1, randomNum2);
  return [String(result), question];
};

export default () => playGame(makeGcd, taskGame);
