import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const quest = ('What number is missing in the progression?');
const progressionLenght = 9;

const makeProgression = (start, step, long = 10) => {
  let items = [];
  for (let i = 0; i < long - 1; i += 1) {
    items = [...items, start + step * i];
  }
  return items;
};

const makeProgressionAnswer = () => {
  const start = makeRandomNum();
  const step = makeRandomNum();
  const questionNum = makeRandomNum(1, progressionLenght);
  const progressionList = makeProgression(start, step);
  const trueNum = progressionList[questionNum];
  progressionList[questionNum] = '..';
  const question = (progressionList.join(','));

  return [String(trueNum), question];
};

export default () => playGame(makeProgressionAnswer, quest);
