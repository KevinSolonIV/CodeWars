function latestEvens(arr, window) {
  return arr.filter(x => x % 2 === 0).slice(-window);
}


console.log(latestEvens([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), '\n', [4, 6, 8])
console.log(latestEvens([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), '\n', [-8, 26])
console.log(latestEvens([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), '\n', [6])