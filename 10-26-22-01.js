function nthSmallest(arr, n) {
  let sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[n-1];
}

const nthSmallest_1 = (arr, n) => arr.slice().sort((a, b) => a - b)[n-1];

console.log(nthSmallest([3,1,2],2), " should be : ", 2)
console.log(nthSmallest([15,20,7,10,4,3] ,3), " should be : ", 7)
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 5), " should be : ", 92)