#!/usr/bin/env node

// eslint-disable-next-line camelcase
// eslint-disable-next-line import/named
// eslint-disable-next-line camelcase
import { greeting, random_number } from '../src/cli.js';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line camelcase
const user_name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// eslint-disable-next-line camelcase
const user_try = 3;
// eslint-disable-next-line camelcase
for (let i = 0; i < user_try;) {
  // eslint-disable-next-line eqeqeq
  if (random_number() == true) {
    console.log('Correct!');
    i += 1;
  } else {
    // eslint-disable-next-line camelcase
    console.log(`"yes" is wrong answer ;(.Correct answer was "no".Let\`s try again, ${user_name}`);
    i = 0;
  }
}
// eslint-disable-next-line camelcase
console.log(`Congratulations, ${user_name}`);
