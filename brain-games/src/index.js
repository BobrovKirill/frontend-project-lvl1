
const BrainGames = (UserName, Game) => {
  const UserTry = 3;
  for (let i = 0; i < UserTry; i += 1) {
    // eslint-disable-next-line no-unused-expressions
    Game();
  }
  console.log(`Congratulations, ${UserName}`);
};

export default BrainGames;
