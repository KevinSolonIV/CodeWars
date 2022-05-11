const binaryArrayToNumber = arr => {
    return arr.reduce((a, x) => {
      return x ? (a * 2) + 1 : a * 2;
    }, 0);
  };

// One line:
const binaryArrayToNumber2 = arr => arr.reduce((a, x) => x ? (a * 2) + 1 : a * 2, 0);