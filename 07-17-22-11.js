decodeMorse = function(morseCode){
  return morseCode.split('   ')
                  .map(word => word.split(' ')
                                   .map(letter => MORSE_CODE[letter])
                                   .join(''))
                  .join(' ')
                  .trim();
}