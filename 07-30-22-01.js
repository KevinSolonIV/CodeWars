function perimeter(n) {
  let fibPre = 0;
  let fibNum = 1;
  let fibSum = 0;
  for(let i = 0; i <= n; i++) {
    fibSum += fibNum;
    [fibPre, fibNum] = [fibNum, fibNum + fibPre];
  }
    return fibSum * 4;
}