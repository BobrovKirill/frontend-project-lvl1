import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getGameTask, quest) => {
  console.log('Welcome to the Brain Games!');
  const requestName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${requestName}!`);
  console.log(quest);

  for (let i = 0; i < roundsCount; i += 1) {
    const [answer, question] = getGameTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let\`s try again, ${requestName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${requestName}`);
};
