import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isSimpleNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const makePrime = () => {
  const randomNumber = makeRandomNum();
  const trueAnswer = isSimpleNumber(randomNumber) ? 'yes' : 'no';
  return [trueAnswer, randomNumber];
};

export default () => playGame(makePrime, taskGame);
