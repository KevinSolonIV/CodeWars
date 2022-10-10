function noBoringZeros(n) {
    let strN = ('' + n).replace(/0/g, ' ').trim().replace(/ /g, '0')
    return strN.length == 0 ? 0 : parseInt(strN)
  }