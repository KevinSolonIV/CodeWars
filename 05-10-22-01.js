function duplicateCount(text){
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789'
    return alpha.split('').reduce((a, c) => text.toLowerCase().indexOf(c) != text.toLowerCase().lastIndexOf(c) ? a + 1: a, 0);
  }