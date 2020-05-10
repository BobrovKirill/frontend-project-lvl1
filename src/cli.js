// eslint-disable-next-line import/no-unresolved
import readlineSync from 'readline-sync';

// eslint-disable-next-line camelcase
const user_name = () => {
  // eslint-disable-next-line camelcase
  const request_name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line camelcase
  const request = console.log(`Hello, ${request_name}!`);
  return request;
};
// eslint-disable-next-line camelcase
export default user_name;
