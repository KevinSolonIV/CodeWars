
// Define roman numeral values
const romToDec = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
}

function solution (roman) {
  // convert string of roman numerals to array of decimal numbers
  let decArr = roman.split('').map(x => romToDec[x]);
  // combine array of decimal numbers following roman numeral addition rules
  return decArr.reduceRight((a, e, i, arr) => arr[i] < (arr[i+1] || 0) ? a - e : a + e, 0);
  // note that this method assumes there is never two 'subtractive' values in a row
  // (e.g. 3 is represented as 'III' and not 'IIV') and will break if this is not the case
}

// One line version:
const solution2 = rom => rom.split('').map(x => romToDec[x]).reduceRight((a, e, i, arr) => arr[i] < arr[i+1] ? a - e : a + e);