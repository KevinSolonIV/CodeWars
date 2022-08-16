function shortcut (string) {
  //with regex
  return string.replace(/[aeiou]/g, '')
  //without regex
  return string.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('')
}