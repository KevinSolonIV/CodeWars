function order(words){
  return words.split(' ').sort((x, y) => x.match(/\d/) - y.match(/\d/)).join(' ');
}