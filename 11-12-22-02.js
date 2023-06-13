function cubeOdd(arr) {
  if(arr.some(x => typeof x !== 'number')) return undefined;
  return arr.map(x => x * x * x).reduce((a, e) => e % 2 ? e + a : a, 0);
}