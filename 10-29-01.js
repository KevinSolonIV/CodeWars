function solution(number){
  if(number < 0) return 0;
  
  let num = Math.ceil(number - 1);
  
  let threes =   Math.floor(num /  3);
  let fives =    Math.floor(num /  5);
  let fifteens = Math.floor(num / 15);
  // return sum of all multiples of three and five, minus multiples of fifteen to eliminate duplicates
  return triangularNum(threes) * 3 + triangularNum(fives) * 5 - triangularNum(fifteens) * 15;
}

function triangularNum(nth) {
  return (nth) * (nth + 1) / 2;
}