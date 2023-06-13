function formatDuration (seconds) {
  let remainingTime = seconds;

  let unitArr = ['year', 'day', 'hour', 'minute', 'second']
  let valArr = []
  
  // 1 year = 365 days * 24 hours * 60 minutes * 60 seconds
  let unitDivisor = 365 * 24 * 60 * 60
  
  // add years
  valArr.push(Math.floor(remainingTime / unitDivisor))
  remainingTime %= unitDivisor;
  unitDivisor /= 365;
  // add days
  valArr.push(Math.floor(remainingTime / unitDivisor))
  remainingTime %= unitDivisor;
  unitDivisor /= 24;
  // add hours
  valArr.push(Math.floor(remainingTime / unitDivisor))
  remainingTime %= unitDivisor;
  unitDivisor /= 60;
  // add minutes
  valArr.push(Math.floor(remainingTime / unitDivisor))
  remainingTime %= unitDivisor;
  unitDivisor /= 60;
  // add seconds
  valArr.push(remainingTime);
  
  // construct string partials : "[num] [unit][s]"
  let substrArr = valArr.map((e, i) => {
    if(e === 0) return null;
    if(e === 1) return e + ' ' + unitArr[i];
    return e + ' ' + unitArr[i] + 's';
  }).filter(x => x);
  console.log(substrArr);
  
  // combine string partials
  let resultStr = substrArr.reduce((a, e, i) => {
    if(i === substrArr.length - 1) return a + e;
    if(i === substrArr.length - 2) return a + e + ' and ';
    return a + e + ', ';
  }, '').trim()
  console.log(resultStr)
  
  return resultStr;
}
