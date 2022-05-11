function duplicateCount(text){
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789'
    return alpha.split('').reduce((a, c) => {
        return text.toLowerCase().indexOf(c) != text.toLowerCase().lastIndexOf(c) ? a + 1: a
    }, 0);
  }

// single line version - less readable
const duplicateCount = text => 'abcdefghijklmnopqrstuvwxyz0123456789'.split('').reduce((a, c) => text.toLowerCase().indexOf(c) != text.toLowerCase().lastIndexOf(c) ? a + 1: a, 0);