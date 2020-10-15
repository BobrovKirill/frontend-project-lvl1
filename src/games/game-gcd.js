import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const nod = (num1, num2) => {
  if (num2 > 0) {
    const temp = num1 % num2;
    return nod(num2, temp);
  }
  return num1;
};

const makeGcd = () => {
  const randomNum1 = makeRandomNum();
  const randomNum2 = makeRandomNum();
  const result = nod(randomNum1, randomNum2);
  const question = (randomNum1, randomNum2);
  return [String(result), question];
};

export default () => playGame(makeGcd, taskGame);
