function saleHotdogs(n){
    if(n < 0) return 0
    if(n < 5) return 100 * n
    if(n < 10) return 95 * n
    else return 90 * n
  }