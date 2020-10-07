import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const quest = 'Find the greatest common divisor of given numbers.';

const nod = (firstRandomNumber, secondRandomNumber) => {
  if (secondRandomNumber > 0) {
    const temp = firstRandomNumber % secondRandomNumber;
    return nod(secondRandomNumber, temp);
  }
  return firstRandomNumber;
};

const makeGcd = () => {
  const firstRandomNumber = makeRandomNum();
  const secondRandomNumber = makeRandomNum();
  const result = nod(firstRandomNumber, secondRandomNumber);
  const question = (firstRandomNumber, secondRandomNumber);
  return [String(result), question];
};

export default () => playGame(makeGcd, quest);
