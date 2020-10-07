/* eslint-disable no-eval */
import { makeRandomNum, makeRandomSings } from '../cli.js';
import playGame from '../index.js';

const quest = 'What is the result of the expression?';

const makeCalc = () => {
  const ArithmeticSigns = ['+', '-', '*'];
  const RandomOperator = makeRandomSings(ArithmeticSigns);
  const StRandomNumber = makeRandomNum();
  const SdRandomNumber = makeRandomNum();
  const question = `${StRandomNumber}${RandomOperator}${SdRandomNumber}`;
  const expression = eval(question);

  return [String(expression), question];
};

export default () => playGame(makeCalc, quest);
