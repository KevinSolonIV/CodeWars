function maxProduct(numbers, size){
  return numbers.sort((a, b) => a - b).slice(-size).reduce((a, e) => a * e, 1);
}