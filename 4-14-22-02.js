var uniqueInOrder = function(iterable){
  if(!iterable || iterable.length < 1) return [];
  let output = [iterable[0]];
  for(let i = 1; i < iterable.length; i++) {
    if(!(iterable[i-1] == iterable[i])) {
      output.push(iterable[i]);
    }
  }
  return output;
}

//Notes after seeing other solutions
//1. Array.filter seems like it can produce a cleaner solution
//2. My initial check on iterable's truthiness can be replaced by a variable tracking the last element