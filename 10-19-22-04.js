function nextBigger(n){
  
    // Considering the example 6584763
    // The strategy employed is to split the number into three parts:
    // 1. the significant digits that can be left as is (658 in example)
    // 2. the first digit from the right that is not in descending order (4 in example)
    // 3. the least significant digits that were arranged in descending order (763 in example)
    // The next highest number will be the number where 1 remains as is (658), 2 is changed to the
    //   next highest digit taken from 3 (4 -> 6), followed by the remaining digits in ascending
    //   order (347); this gives us 6584763 -> 6586347
    
    // test base case; one digit number is necessarily highest already
    if(n < 10) return -1;
    // convert number into an array of digits
    let digArr = String(n).split('');
    // consider the digits from least to most significant
    let index = digArr.length - 1;
    // define group 3
    while(digArr[index] <= digArr[index-1]){
      index--;
      // if all the digits are in descending order, there is no next highest number with the same digits
      if(index === 0) return -1;
    }
    let mutableDigits = digArr.slice(index);
    // add group 2 to group 3 and sort
    mutableDigits.push(digArr[index-1]);
    mutableDigits.sort();
    // find next highest digit above group 2
    let sigFig = mutableDigits.splice(mutableDigits.lastIndexOf(digArr[index-1]) + 1, 1)[0];
    // return the groups recombined
    return Number(digArr.slice(0, index-1).concat(sigFig, ...mutableDigits).join(''));
  }