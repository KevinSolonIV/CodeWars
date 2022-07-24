function digPow(n, p){
  let nArr = ("" + n).split('');
  let sumOfPow = nArr.map((x, i) => Math.pow(x, i + p)).reduce((a, e) => a + e, 0);
  let k = sumOfPow / n;
  return k % 1 === 0 ? k : -1;
}

let digPowInOneLine=(n,p)=>((''+n).split('').map((x,i)=>Math.pow(x,i+p)).reduce((a,e)=>a+e,0)/n)%1?-1:(''+n).split('').map((x,i)=>Math.pow(x,i+p)).reduce((a,e)=>a+e,0)/n;