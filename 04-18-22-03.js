function duplicateEncode(word){
    let loWord = word.toLowerCase();
    return loWord.split('').map(char => loWord.indexOf(char) === loWord.lastIndexOf(char) ? '(' : ')').join('');
  }
//Notes after seeing other solutions:
//1. you can get out of using another line to set word.toLowerCase() by using (char, i, arr) instead of just (char) in the arrow function; this 'arr' is already lower cased, so you can compare indexOf() to lastIndexOf() on this array instead.  