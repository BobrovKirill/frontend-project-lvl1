import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const makeSimpleNumber = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makePrime = () => {
  const RandomNumber = makeRandomNum();
  const TrueAnswer = makeSimpleNumber(RandomNumber) ? 'yes' : 'no';
  return [TrueAnswer, RandomNumber];
};

export default () => playGame(makePrime, quest);
