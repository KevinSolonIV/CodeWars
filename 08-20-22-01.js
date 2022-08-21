/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    if(num === 0) return '';
    if(num === 1) return 'I';
    const conversion = {
      ints: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roms: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    }
    for(let i = 0; i < conversion.ints.length; i++) {
      let val = conversion.ints[i];
      if(num >= val) return conversion.roms[i] + intToRoman(num - val);
    }
  };