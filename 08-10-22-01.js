function count (string) {
  return string.split('').reduce((a, e) => {
    a[e] ? a[e]++ : a[e] = 1;
    return a;
  }, {});
}