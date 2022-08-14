function oddOrEven(array) {
  return array.reduce((a, e) => a ^ ([-1, 1].includes(e % 2)), false) ? 'odd' : 'even';
}