function findOdd(A) {
    return A.reduce((a, x) => A.filter(y => y == x).length % 2 ? x : a, 0);
  }