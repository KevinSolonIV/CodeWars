function groupByCommas(n) {
  return n.toString().split('').reverse().reduce((str, char, i) => char + (i % 3 ? '' : ',') + str);
}