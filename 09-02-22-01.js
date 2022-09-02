// returns an array of same length as mask with an
//   integer frequency of each character in the mask,
//   in the same order as the mask
//   (e.g. return_value[x] is the number of times the character at mask[x] appears in s)
const compFreq = (s, mask) => {
    let res = [...Array(mask.length)];
    for(let i = 0; i < mask.length; i++) {
        res[i] = s.length - s.split(mask[i]).join('').length;
    }
    return res;
}

function mix(s1, s2) {
    // build a frequency distribution of characters
    const charMask = 'abcdefghijklmnopqrstuvwxyz'
    const freq1 = compFreq(s1, charMask);
    const freq2 = compFreq(s2, charMask);
    // constsruct array of strings
    let freqMix = freq1.map((_, i) => {
        if(freq1[i] > freq2[i]) return '1:' + charMask[i].repeat(freq1[i]);
        if(freq1[i] < freq2[i]) return '2:' + charMask[i].repeat(freq2[i]);
        if(freq1[i]===freq2[i]) return '=:' + charMask[i].repeat(freq1[i]);
        }).filter(x => x.length > 3);
    // sort strings according to prompt
    freqMix.sort().sort((a, b) => b.length - a.length);
    // join partial strings and return
    return freqMix.join('/');
}