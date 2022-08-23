function squareDigits(num){
  return +(num + '').split('').reduce((a, x) => a + +x * +x, '');
}