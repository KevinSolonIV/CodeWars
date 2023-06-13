
// basic solution
function pairs1(ar){
  let count = 0;
  for(let i = 0; i < ar.length; i += 2) {
    if(!ar[i+1]) break;
    if(Math.abs(ar[i+1] - ar[i]) === 1) count++;
  }
  return count;
};

// one line solution
const pairs = (pairsArr) => pairsArr.reduce((a, e, i, arr) => (i % 2 && Math.abs(arr[i] - arr[i-1]) === 1) ? a + 1 : a, 0)