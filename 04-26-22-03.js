function findNb(m) {
    let n = 0
    while(m > 0) {
      n ++;
      m -= n * n * n;
    }
    return m == 0 ? n : -1;
  }
  