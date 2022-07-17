var decodeBits = function(bits){
  //trim leading and tailing zeros
  while(bits[0] === '0') bits = bits.slice(1);
  while(bits[bits.length - 1] === '0') bits = bits.slice(0, -1);
  
  //to find resolution, look at all the substrings of ones and zeros...
  let resolution = bits.split('0').concat(bits.split('1'))
                      //look at the lengths greater than zero...
                      .map(e => e.length).filter(e => e > 0)
                      //and select the smallest such length as the resolution.
                      .sort((a, b) => a - b)[0];
  
  //reduce the incoming bits to an equivalent bit string with a resolution of one
  bits = bits.split('').reduce((a, e, i) => i % resolution === 0 ? a + e : a, '');
  
  //replace all normalized groups of ones and zeros with their morse equivalents
  return bits.split('0000000').join('   ')
    .split('111').join('-')
    .split('000').join(' ')
    .split('1').join('.')
    .split('0').join('')
    .trim();
}

var decodeMorse = function(morseCode){
  return morseCode.split('   ').map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ');
}