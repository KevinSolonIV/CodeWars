// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// input is always type String
// symbolic characters okay
// output: string of size input.length, composed only of "(" and ")" characters

function parenthize1(inputStr) {
  let lowerStr = inputStr.toLowerCase();
  let result = '';
  // look at each character of input string
  for (char of lowerStr) {
    // determine whether this character is unique
    if (lowerStr.indexOf(char) === lowerStr.lastIndexOf(char)) {
      // add a '(' or ')' to the result string as appropriate
      result += '(';
    } else {
      result += ')';
    }
  }
  return result;
}

const parenthize = (str) => str.toLowerCase().split('').map(x => str.indexOf(x) === str.lastIndexOf(x) ? '(' : ')').join('');

// Test cases:
console.log(parenthize("din"), "\n(((")
console.log(parenthize("recede"), "\n()()()")
console.log(parenthize("Success"), "\n)())())")
console.log(parenthize("(( @"), "\n))((")