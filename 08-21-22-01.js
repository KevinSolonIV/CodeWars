function getDivisorsCnt(n){
  let numDivisors = 0;
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) numDivisors ++;
  }
  return numDivisors;
}