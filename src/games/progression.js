import { makeRandomNum } from '../cli.js';
import playGame from '../index.js';

const taskGame = ('What number is missing in the progression?');
const progressionLenght = 10;

const makeProgression = (start, step, length = 10) => {
  let items = [];
  for (let i = 0; i < length - 1; i += 1) {
    items = [...items, start + step * i];
  }
  return items;
};

const makeProgressionAnswers = () => {
  const start = makeRandomNum();
  const step = makeRandomNum();
  const hiddenElementIndex = makeRandomNum(1, progressionLenght);
  const progression = makeProgression(start, step);
  const answer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  const question = (progression.join(','));

  return [String(answer), question];
};

export default () => playGame(makeProgressionAnswers, taskGame);
