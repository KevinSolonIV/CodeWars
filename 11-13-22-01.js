function getConsectiveItems(items, key){
  let max = 0;
  let run = 0;
  for(let item of items.toString()) {
    if(item === key.toString()) {
      run++;
      max = Math.max(run, max);
    } else {
      run = 0;
    }
  }
  return max;
}