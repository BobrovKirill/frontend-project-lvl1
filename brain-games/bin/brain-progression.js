#!/usr/bin/env node

import {
  greeting, RandomNum, UserAnswer, progression,
} from '../src/cli.js';
import BrainGames from '../src/index.js';

const Game = () => {
  const RandomStart = RandomNum();
  const RandomStep = RandomNum();
  const QuestionNum = RandomNum(1, 10);
  const ProgressionList = progression(RandomStart, RandomStep);
  const TrueNum = ProgressionList[QuestionNum];
  ProgressionList[QuestionNum] = '..';
  console.log(ProgressionList.join(','));
  const Answer = Number(UserAnswer());
  if (TrueNum === Answer) {
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-use-before-define
    console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${TrueNum}".Let\`s try again, ${UserName}`);
  }
};

const UserName = greeting();
console.log('What number is missing in the progression?');
BrainGames(UserName, Game);
