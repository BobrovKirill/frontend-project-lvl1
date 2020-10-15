import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const taskGame = ('What number is missing in the progression?');
const progressionLenght = 10;

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
  const answer = progressionList[questionNum];
  progressionList[questionNum] = '..';
  const question = (progressionList.join(','));

  return [String(answer), question];
};

export default () => playGame(makeProgressionAnswer, taskGame);
