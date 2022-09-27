function firstNonConsecutive (arr) {
    for(let i = 0; i < arr.length; i++) {
      if(i + arr[0] !== arr[i]) return arr[i];
    }
    return null
  }