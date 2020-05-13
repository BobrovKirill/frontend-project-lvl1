/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

// eslint-disable-next-line camelcase
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  // eslint-disable-next-line camelcase
  const request_name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line camelcase
  console.log(`Hello, ${request_name}!`);
  // eslint-disable-next-line camelcase
  return request_name;
};
// eslint-disable-next-line camelcase


// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line camelcase
const random_number = () => {
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line no-shadow
  // eslint-disable-next-line camelcase
  const random_number = Math.floor(Math.random() * 100);
  // eslint-disable-next-line no-template-curly-in-string
  // eslint-disable-next-line camelcase
  console.log(`Question: ${random_number}`);
  // eslint-disable-next-line eqeqeq
  const even = (readlineSync.question('Your answer: ')) == 'yes';
  // eslint-disable-next-line camelcase
  // eslint-disable-next-line eqeqeq
  // eslint-disable-next-line camelcase
  if ((random_number % 2) != even) {
    return true;
  } return false;
};

// eslint-disable-next-line camelcase
export { greeting, random_number };
