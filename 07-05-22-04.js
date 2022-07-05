function dontGiveMeFive(start, end) {
  let count = end - start + 1;
  for(let i = start; i <= end; i++) {
    if(String(i).includes('5')) count--;
  }
  return count;
}