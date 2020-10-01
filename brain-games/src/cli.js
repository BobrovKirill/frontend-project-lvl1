const RandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const RandomSings = (arr) => {
  const RandomIndex = Math.floor(Math.random() * arr.length);
  return arr[RandomIndex];
};

export { RandomSings, RandomNum };
