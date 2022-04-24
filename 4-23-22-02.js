function rot13(str) {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return str.replace(/[a-zA-Z]/g, (match) => {
      let i = alpha.indexOf(match)
      return i < 13 || (i >= 26 && i < 39) ? alpha[i + 13] : alpha[i - 13];
    });
  }