function highAndLow(numbers){
  let numsArr = numbers.split(' ')
  let low = +numsArr[0]
  let high = low;
  numsArr.forEach(x => {
    if(+x < low) low = +x;
    if(+x > high) high = +x;
  });
  return high + ' ' + low;
}