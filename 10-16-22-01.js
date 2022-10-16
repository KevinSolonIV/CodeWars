function solution(list){
    // deal with base cases
    if(list.length < 3) return list.join(',');
    let result = list[0].toString();
    // there are at least three numbers, so it is safe to compare i, i-1, and i-2
    for(let i = 2; i < list.length; i++) {
      
      // if list[i-1] is non-sequential below, add a comma and the number to the output string
      if(list[i-1] !== list[i-2] + 1) {
        result += ',' + list[i-1];
      }
      
      // if list[i-1] is non-sequential above, add only the number to the output string
      else if (list[i] !== list[i-1] + 1) {
        // special case for only two sequential numbers
        if(result[result.length-1] !== '-') result += ',';
        result += list[i-1];
      }
      
      // if neither of the above, list[i-1] is sequential above and below and is captured within a '-'
      else if(result[result.length-1] !== '-') {
        result += '-'
      }
    }
    // since the for loop was using list[i-1] to compair above and below, the last number still needs added
    if(result[result.length-1] !== '-') result += ',';
    result += list[list.length-1];
    return result;
  }