#!/usr/bin/env node

import { greeting, RandomExpression, UserAnswer } from '../src/cli.js';
import BrainGames from '../src/index.js';

const Game = () => {
  const expression = RandomExpression();
  console.log(`Question: ${expression}`);
  const Answer = UserAnswer();
  // eslint-disable-next-line no-eval
  const TrueAnswer = eval(expression);
  if (Number(Answer) === TrueAnswer) {
    console.log('Correct!');
  } else {
    // eslint-disable-next-line no-use-before-define
    console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${TrueAnswer}".Let\`s try again,${UserName}`);
  }
};

const UserName = greeting();
console.log('What is the result of the expression?');
BrainGames(UserName, Game);
