function getLengthOfMissingArray(arrayOfArrays) {
    return (arrayOfArrays || [])
      .map(x => x ? x.length : 0)
      .sort((a, b) => a - b)
      .reduce((a, e, i, arr) => (a > 0 || e === i + arr[0]) ? a : arr[0] && i + arr[0], 0)
  }
  