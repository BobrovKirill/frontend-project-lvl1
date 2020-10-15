const makeRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const makeRandomItems = (arr) => {
  const randomIndex = makeRandomNum(0, arr.length);
  return arr[randomIndex];
};

export { makeRandomItems, makeRandomNum };
