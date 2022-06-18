function findNextSquare(sq) {
    let base = Math.sqrt(sq);
    return base % 1 === 0 ? sq + 2 * base + 1: -1;
  }