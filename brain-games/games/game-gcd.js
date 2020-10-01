import { RandomNum } from '../src/cli.js';
import startGame from '../src/index.js';

const Quest = 'Find the greatest common divisor of given numbers.';

const nod = (StRandomNumber, SdRandomNumber) => {
  if (SdRandomNumber > 0) {
    const temp = StRandomNumber % SdRandomNumber;
    return nod(SdRandomNumber, temp);
  }
  return StRandomNumber;
};

const Game = () => {
  const StRandomNumber = RandomNum();
  const SdRandomNumber = RandomNum();
  const result = nod(StRandomNumber, SdRandomNumber);
  const question = (StRandomNumber, SdRandomNumber);
  return [result, question];
};

export default () => startGame(Game, Quest);
