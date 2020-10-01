import readlineSync from 'readline-sync';

const UserTry = 3;

export default (gameEngine, Quest) => {
  console.log('Welcome to the Brain Games!');
  const RequestName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${RequestName}!`);
  console.log(Quest);

  for (let i = 0; i < UserTry; i += 1) {
    const [Answer, question] = gameEngine();
    console.log(`Question: ${question}`);
    const UserAnswer = readlineSync.question('Your answer: ');
    if (String(Answer) !== UserAnswer) {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${Answer}".Let\`s try again, ${RequestName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${RequestName}`);
};
