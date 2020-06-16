
import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const RequestName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${RequestName}!`);
  return RequestName;
};

const RandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const RandomNumber = () => {
  const Random = RandomNum();
  console.log(`Question: ${Random}`);
  const even = (readlineSync.question('Your answer: ')) === 'yes';
  if ((Random % 2) !== even) {
    return true;
  } return false;
};


const RandomSings = (arr) => {
  const RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
};


const RandomExpression = () => {
  const ArithmeticSigns = ['+', '-', '*'];
  const StRandomNumber = RandomNum();
  const SdRandomNumber = RandomNum();
  const expression = (StRandomNumber + RandomSings(ArithmeticSigns) + SdRandomNumber);
  return expression;
};

const UserAnswer = () => (readlineSync.question('Your answer: '));

const nod = (x, y) => {
  if (y > 0) {
    const z = x % y;
    return nod(y, z);
  }
  return x;
};

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

const SimpleNumber = (num) => {
  if (num === 1) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export {
  // eslint-disable-next-line max-len
  RandomExpression, greeting, RandomNumber, UserAnswer, RandomSings, nod, RandomNum, progression, SimpleNumber,
};
