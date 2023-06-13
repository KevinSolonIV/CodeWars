function solve(a,b){
  let primeStr = '2357111317192329313741434753596167717379';
  let lastPrime = 79;
  while(primeStr.length < a + b) {
    lastPrime = nextPrime(lastPrime + 1);
    primeStr += lastPrime;
  }
  return primeStr.slice(a, a + b);
}

function nextPrime(num) {
  if(num <= 2) return 2;
  if(num % 2 === 0) num++
  while(!isPrime(num)) {
    num += 2;
  }
  return num;
}

function isPrime(num) {
  if(num < 2) return false;
  if(num === 2) return true;
  if(num % 2 === 0) return false;
  for(let i = 3; i < num / 2; i += 2) {
    if(num % i === 0) return false;
  }
  return true;
}