function getAllPrimeFactors(n) {
    let primes = [];
    let pObj = factorize(n);
    for(const factor in pObj) {
      primes.push(...(new Array(pObj[factor]).fill(+factor)));
    }
    return primes.sort((a, b) => a - b);
  }
  
  function getUniquePrimeFactorsWithCount(n) { 
    let primes = [[],[]];
    let pObj = factorize(n);
    for(const factor in pObj) {
      primes[0].push(+factor);
      primes[1].push(pObj[factor]);
    }
    return primes;
  }
  
  function getUniquePrimeFactorsWithProducts(n) { 
    let primes = [];
    let pObj = factorize(n);
    for(const factor in pObj) {
      primes.push(Math.pow(+factor, pObj[factor]));
    }
    return primes;
  }
  
  function factorize(n) {
    // if n is fractional  or n is not a number     or n is NaN
    if(n !== Math.round(n) || typeof n !== "number" || n !== n) {
      return {};
    } else if(n === 1) {
      return {1: 1};
    }
    let p = {};
    let num = n;
    for(let i = 2; i <= num / 2; i++) {
      while(num % i === 0) {
        p[i] = p[i] + 1 || 1;
        num /= i;
      }
    }
    if(num > 1) {
      p[num] = p[num] + 1 || 1;
    }
    return p;
  }