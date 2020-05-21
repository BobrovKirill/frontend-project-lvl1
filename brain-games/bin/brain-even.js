#!/usr/bin/env node

import { RandomNumber, greeting } from '../src/cli.js';
import BrainGames from '../src/index.js';

const Game = () => {
  if (RandomNumber() === true) {
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-use-before-define
    console.log(`"yes" is wrong answer ;(.Correct answer was "no".Let\`s try again, ${UserName}`);
  }
};


const UserName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
BrainGames(UserName, Game);
