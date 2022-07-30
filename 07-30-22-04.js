const MayaPieces = {
  1: 'o    ',
  2: 'oo   ',
  3: 'ooo  ',
  4: 'oooo ',
  5: '-----',
  chunkZero: ['  --- ', '/   \\', '\\   /', ' --- '].join('\n')
};

const reverseMayaPieces = {
  'o    ': 1,
  'oo   ': 2,
  'ooo  ': 3,
  'oooo ': 4,
  '-----': 5
}

function toMaya(n) {
  let number = [];
  if(n === 0) number.unshift(MayaPieces.chunkZero);
  while(n > 0) {
    let m = n % 20;
    let digit = [];
    if(m === 0) {
      number.unshift(MayaPieces.chunkZero);
    } else {
      while(m >= 5) {
        digit.unshift(MayaPieces[5])
        m -= 5;
      }
      if(m > 0) digit.unshift(MayaPieces[m]);
      number.unshift(digit);
    }
    console.log(number);
    n = Math.floor(n / 20);
  }
  return number;
}

function fromMaya(maya) {
  return maya.reduce((acc, x) => {
    //multiply last digit by 20
    acc *= 20;
    //check for maya zero
    if(x != MayaPieces.chunkZero) {
    // if not zero, construct digit from array
      acc += x.reduce((a, b) => a + reverseMayaPieces[b], 0);
    }
    return acc;
  }, 0)
}
