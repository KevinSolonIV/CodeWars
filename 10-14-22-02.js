function pipeFix_1(numbers){
    // determine minimum and maximum (ends of the return array)
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    // construct an array of numbers from min to max inclusive
    let fixedArr = []
    for(let i = min; i <= max; i++) {
      fixedArr.push(i);
    }
    // return the constructed array
    return fixedArr;
  }
  
  // one line solution
  let pipeFix = (nums) => [...Array(Math.max(...nums) - Math.min(...nums) + 1).keys()].map(x => x + Math.min(...nums));