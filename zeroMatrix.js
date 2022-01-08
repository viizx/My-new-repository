// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

const zeroMatrix = (m) => {
  let counter = 0;

  if (m.length === 1 && m[0].includes(0)) {
    return [m[0].fill(0)];
  }

  for (let i = 0; i < m[0].length; i++) {
    for (let j = 0; j < m.length; j++) {
      if (m[i][j] === 0) {
        counter++;

        for (let x = 0; x < m[0].length; x++) {
          m[i][x] = 0;
          for (let y = 0; y < m.length; y++) {
            m[y][j] = 0;
            if (x === m[0].length - 1 && y === m.length - 1) {
              console.log("u for petlji");

              return m;
            }
          }
        }
      }
    }
  }

  if (counter === 0) {
    console.log("ja vracam");
    return m;
  }
};
