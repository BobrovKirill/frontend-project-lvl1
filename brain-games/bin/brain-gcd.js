#!/usr/bin/env node

import {
  greeting, RandomNum, nod, UserAnswer,
} from '../src/cli.js';
import BrainGames from '../src/index.js';


const Game = () => {
  const StRandomNumber = RandomNum();
  const SdRandomNumber = RandomNum();
  const result = nod(StRandomNumber, SdRandomNumber);
  console.log(StRandomNumber, SdRandomNumber);
  const Answer = UserAnswer();
  if (result === Number(Answer)) {
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-use-before-define
    console.log((`"${Answer}" is wrong answer ;(. Correct answer was "${result}".Let\`s try again,${UserName}`));
  }
};

const UserName = greeting();
console.log('Find the greatest common divisor of given numbers.');
BrainGames(UserName, Game);
