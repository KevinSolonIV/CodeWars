function numberJoy(n) {
  let digSum = n.toString().split('').reduce((a, e) => a + +e, 0);
  let revDigSum = digSum.toString().split('').reduceRight((a, e) => a * 10 + +e, 0);
  return digSum * revDigSum === n;
}