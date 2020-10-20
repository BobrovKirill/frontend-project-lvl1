import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const nod = (firstNum, secondNum2) => {
  if (secondNum2 > 0) {
    const temp = firstNum % secondNum2;
    return nod(secondNum2, temp);
  }
  return firstNum;
};

const makeGcd = () => {
  const randomNum1 = makeRandomNum();
  const randomNum2 = makeRandomNum();
  const result = nod(randomNum1, randomNum2);
  const question = (randomNum1, randomNum2);
  return [String(result), question];
};

export default () => playGame(makeGcd, taskGame);
