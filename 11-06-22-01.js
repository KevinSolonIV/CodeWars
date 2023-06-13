function findMissingLetter(array) {
  return String.fromCharCode(array.map(x => x.charCodeAt(0)).find((x, i, arr) => x - arr[0] !== i) - 1)
}