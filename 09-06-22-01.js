function arrAdder(arr) {
  return arr[0].map((_, i) => arr.map(x => x[i]).join('').trim()).join(' ');
}