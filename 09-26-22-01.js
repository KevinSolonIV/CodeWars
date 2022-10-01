function incrementString (strng) {
    if(strng.length == 0) return '1'
    let i = strng.length - 1
    
    // case: strng does not have tailing numerals
    if(!strng[i].match(/[0-9]/)) return strng + '1'
    
    // case: strng contains tailing numerals
    //   find the split point between non-numerals and numerals
    while(i > 0 && strng[--i].match(/[0-9]/)){}
    if(i > 0) i++
    //   separate the string at this deliniation and reconstruct
    //   it after incrementing the numerical portion
    //   NOTE: this is built to work for a zero-length non-numeric prefix
    let numPart = strng.slice(i)
    return strng.slice(0, i) + String(+numPart + 1).padStart(numPart.length, '0')
  }