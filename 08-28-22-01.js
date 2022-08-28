function rot90Clock(strng) {
  let mat = strng.split('\n').map(x => x.split(''));
  let len = mat.length;
  let perm = [...Array(len)].map(x => [...Array(len)]);
  for(let i = 0; i < len; i++) {
    for(let j = 0 ; j < len; j++) {
      perm[i][j] = mat[len - j - 1][i];
    }
  }
  return perm.map(x => x.join('')).join('\n');
}
function diag1Sym(strng) {
  let mat = strng.split('\n').map(x => x.split(''));
  let len = mat.length;
  let perm = [...Array(len)].map(x => [...Array(len)]);
  for(let i = 0; i < len; i++) {
    for(let j = 0 ; j < len; j++) {
      perm[i][j] = mat[j][i];
    }
  }
  return perm.map(x => x.join('')).join('\n');
}
function selfieAndDiag1(strng) {
  let stringArr = strng.split('\n');
  let permArr = diag1Sym(strng).split('\n');
  return stringArr.map((x, i) => x + '|' + permArr[i]).join('\n');
}
function oper(fct, s) {
  if(fct === rot90Clock) {
    return rot90Clock(s);
  }
  if(fct === diag1Sym) {
    return diag1Sym(s);
  }
  if(fct === selfieAndDiag1) {
    return selfieAndDiag1(s);
  }
}