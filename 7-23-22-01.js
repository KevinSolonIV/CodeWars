function isIsogram(str){
  return str.toLowerCase().split('').reduce((acc, elem, _, arr) => arr.indexOf(elem) === arr.lastIndexOf(elem) && acc, true);
}