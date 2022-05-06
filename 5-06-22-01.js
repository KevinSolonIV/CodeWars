function SeriesSum(n) {
    if(n == 0) {
      return '0.00';
    } else if(n == 1) {
      return '1.00';
    }
    let sum = 0;
    for(let i = 0; i < n; i++) {
      sum += 1. / (1. + (3. * i));
    }
    sum = Math.round(sum * 100) / 100;
    return (new String(sum) + 00).slice(0, 4);
  }

// A more clever way would be to recall that there is a method toFixed() that allows one to
//   specify the number of decimal places AND returns it as a string:
function SeriesSum2(n) {
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum += 1 / (1 - 3 * i);
    }
    return sum.toFixed(2);
}