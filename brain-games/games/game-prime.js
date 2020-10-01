import { RandomNum } from '../src/cli.js';
import startGame from '../src/index.js';

const Quest = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const SimpleNumber = (num) => {
  if (num === 1) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const Game = () => {
  const RandomNumber = RandomNum();
  const TrueAnswer = SimpleNumber(RandomNumber);
  return [TrueAnswer, RandomNumber];
};

export default () => startGame(Game, Quest);
