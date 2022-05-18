function sortArray(array) {
    let odds = array.filter(x => x % 2).sort((a, b) => a - b);
    let oddIndex = 0;
    return array.map(x => x % 2 ? odds[oddIndex++] : x);
  }