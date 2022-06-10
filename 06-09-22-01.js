function alphabetPosition(text) {
    return text.toLowerCase()
               .split('')
               .map(x => 'abcdefghijklmnopqrstuvwxyz'.indexOf(x) + 1)
               .filter(x => x > 0)
               .join(' ');
  }