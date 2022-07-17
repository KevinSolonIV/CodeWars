function sumArray(array) {
  if(!array || array.length < 3) return 0;
  return array.slice().sort((a, b) => a - b).slice(1, -1).reduce((a, e) => a + e, 0);
}