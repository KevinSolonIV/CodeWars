function diamond(n){
    if(n < 0 || n % 2 == 0) return null
    let shortHalf = (n - 1) / 2
    let longHalf = (n + 1) / 2
    let firstHalf = [...Array(longHalf)].map((_, i) => ' '.repeat(longHalf - i - 1) + '*'.repeat(2 * i + 1));
    let secondHalf = [...Array(shortHalf)].map((_, i) => ' '.repeat(i + 1) + '*'.repeat(2 * (shortHalf - i) - 1));
    return firstHalf.concat(secondHalf).join('\n') + '\n'
  }