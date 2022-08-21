function findUniq(arr) {
  // check whether the first element of the array is the unique number
  if(arr[0] != arr[1] && arr[0] != arr[2]) {
    return arr[0];
  }
  // if not, iterate over the array until you find a number unequal to arr[0]
  for(const elem of arr) {
    if(elem != arr[0]) return elem;
  }
}
