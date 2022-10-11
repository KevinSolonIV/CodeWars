function toBinary(n){
    if(n === 0) return 0
    if(n === 1) return 1
    return (10 * toBinary(Math.floor(n / 2))) + (n % 2);
  }