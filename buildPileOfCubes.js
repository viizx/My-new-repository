function findNb(m) {
  let sum = 0;
  let i = 0;

  while (sum < m) {
    i += 1;
    sum += Math.pow(i, 3);
  }
  if (sum === m) return i;
  else return -1;
}
