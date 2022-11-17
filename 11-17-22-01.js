snail = function(array) {
  if(!Array.isArray(array)) return [];
  if(array.length === 1) {
    if(array[0].length === 0) return [];
    return array[0];
  }
  console.log(array);
  let width = array[0].length - 1;
  let height = array.length - 1;
  let w = 0;
  let h = 0;
  let result = [];
  while(width > 0 && height > 0) {
    //top
    console.log('top')
    for(;w < width; w++) {
      console.log('looking at [' + h + '][' + w + ']');
      result.push(array[h][w]);
    }
    //right
    console.log('right')
    for(;h < height; h++) {
      result.push(array[h][w]);
    }
    //bottom
    console.log('bottom')
    for(;w > array[0].length - width - 1; w--) {
      result.push(array[h][w]);
    }
    width -= 1;
    //left
    console.log('left')
    for(;h > array.length - height - 1; h--) {
      result.push(array[h][w]);
    }
    height -= 1;
    w += 1;
    h += 1;
  }
  if(array[0].length % 2 && array.length % 2) result.push(array[Math.floor(array.length / 2)][Math.floor(array[0].length / 2)]);
  return result;
}