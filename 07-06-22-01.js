// first version
function validBraces(braces) {
  return braces.split('').reduce((a, e) => {
    let match = (a[a.length - 1] || '') + e;
    if (match == '()' || match == '{}' || match == '[]') {
      a.pop();
    } else {
      a.push(e);
    }
    return a;
  }, []).length == 0;
}

function validBraces(braces){
  // copy braces string
  let collapseStr = braces.slice();
  // so long as there are braces that are trivially closed...
  while(['()', '[]', '{}'].some((e) => collapseStr.includes(e))) {
    // remove any braces that are trivially closed
    collapseStr = collapseStr.replace('()', '').replace('[]', '').replace('{}', '');
  }
  // if there are any braces left, they do not close in a valid way
  return collapseStr.length == 0;
}