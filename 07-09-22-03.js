function find_average(array) {
  return array.length > 0 ? array.reduce((a, e) => a + e, 0) / array.length : 0;
}