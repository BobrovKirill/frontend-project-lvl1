#!/usr/bin/env node

import {
  greeting, RandomNum, UserAnswer, SimpleNumber,
} from '../src/cli.js';
import BrainGames from '../src/index.js';

const Game = () => {
  const RandomNumber = RandomNum();
  const TrueAnswer = SimpleNumber(RandomNumber);
  console.log(RandomNumber);
  const Answer = UserAnswer();
  if (Answer === TrueAnswer) {
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-use-before-define
    console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${TrueAnswer}".Let\`s try again, ${UserName}`);
  }
};

const UserName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
BrainGames(UserName, Game);
