/* eslint-disable no-eval */
import { RandomNum, RandomSings } from '../src/cli.js';
import startGame from '../src/index.js';

const Quest = 'What is the result of the expression?';

const Game = () => {
  const ArithmeticSigns = ['+', '-', '*'];
  const RandomOperator = RandomSings(ArithmeticSigns);
  const StRandomNumber = RandomNum();
  const SdRandomNumber = RandomNum();
  const question = `${StRandomNumber}${RandomOperator}${SdRandomNumber}`;
  const expression = eval(question);

  return [expression, question];
};

export default () => startGame(Game, Quest);
