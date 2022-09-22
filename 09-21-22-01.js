function getRealFloor(n) {
    if(n === 0 || !Number.isInteger(n)) throw "Invalid input"
    if(n < 0) return n
    if(n < 13) return n - 1
    else return n -2
  }