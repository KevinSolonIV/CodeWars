function validParentheses(parens) {
  let p = parens.slice();
  while(p.includes('()')) {
    p = p.replace('()', '');
  }
  if(p.length > 0) return false
  else return true
}