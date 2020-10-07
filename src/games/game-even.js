import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const quest = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeEven = () => {
  const question = makeRandomNum();
  const answer = (((question % 2) === 0) ? 'yes' : 'no');
  return [answer, question];
};

export default () => playGame(makeEven, quest);
