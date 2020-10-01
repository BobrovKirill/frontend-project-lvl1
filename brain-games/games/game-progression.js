import RandomNum from '../src/cli.js';
import startGame from '../src/index.js';

const Quest = ('What number is missing in the progression?');

const progression = (start, step, long = 10) => {
  const items = [start];
  for (let i = 0; i < long - 1; i += 1) {
    const num = start + step;
    items.push(num);
    // eslint-disable-next-line no-param-reassign
    start = num;
  }
  return items;
};

const Game = () => {
  const RandomStart = RandomNum();
  const RandomStep = RandomNum();
  const QuestionNum = RandomNum(1, 10);
  const ProgressionList = progression(RandomStart, RandomStep);
  const TrueNum = ProgressionList[QuestionNum];
  ProgressionList[QuestionNum] = '..';
  const question = (ProgressionList.join(','));

  return [TrueNum, question];
};

export default () => startGame(Game, Quest);
