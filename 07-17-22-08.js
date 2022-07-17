function findOutlier(integers){
  let parity = (integers[0] + integers[1]) % 2 === 0 ? Math.abs(integers[0] % 2) : Math.abs(integers[2] % 2);
  for(let int of integers) {
    if((int + parity) % 2 !== 0) {
      return int;
    }
  }
  return null;
}