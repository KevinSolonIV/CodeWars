function persistence(num) {
    let iterations = 0;
    let strNum = "" + num;
    while(strNum.length > 1) {
      let prod = 1;
      [...strNum].forEach(char => prod *= +char);
      strNum = "" + prod;
      iterations ++;
    }
    return iterations;
  }