import { RandomNum } from '../src/cli.js';
import startGame from '../src/index.js';

const Quest = 'Answer "yes" if the number is even, otherwise answer "no".';

const Game = () => {
  const question = RandomNum();
  const answer = (((question % 2) === 0) ? 'yes' : 'no');
  return [answer, question];
};

export default () => startGame(Game, Quest);
