function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b).filter((x, i, arr) => arr[i + 1] === undefined || x != arr[i + 1])
  }