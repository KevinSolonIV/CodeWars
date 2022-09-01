function diag2Sym(strng) {
    let strArr = strng.split('\n');
    return [...Array(strArr.length)].map((_, i) => strArr.map(x => x[i]).reverse().join('')).reverse().join('\n');
  }
  function rot90Counter(strng) {
    let strArr = strng.split('\n');
    return [...Array(strArr.length)].map((_, i) => strArr.map(x => x[i]).join('')).reverse().join('\n');
  }
  function selfieDiag2Counterclock(strng) {
    let strArr = strng.split('\n');
    let diagArr = diag2Sym(strng).split('\n');
    let rotArr = rot90Counter(strng).split('\n');
    let ans = '';
    for(let i = 0; i < strArr.length; i++) {
      ans += strArr[i] + '|' + diagArr[i] + '|' + rotArr[i] + '\n';
    }
    return ans.trim();
  }
  function oper(fct, s) {
    if(fct === diag2Sym) return diag2Sym(s);
    if(fct === rot90Counter) return rot90Counter(s);
    if(fct === selfieDiag2Counterclock) return selfieDiag2Counterclock(s);
  }