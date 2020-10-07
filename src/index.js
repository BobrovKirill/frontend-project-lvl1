import readlineSync from 'readline-sync';

const userTry = 3;

export default (gameEngine, quest) => {
  console.log('Welcome to the Brain Games!');
  const requestName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${requestName}!`);
  console.log(quest);

  for (let i = 0; i < userTry; i += 1) {
    const [answer, question] = gameEngine();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".Let\`s try again, ${requestName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${requestName}`);
};
