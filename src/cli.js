const makeRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const makeRandomSings = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export { makeRandomSings, makeRandomNum };
