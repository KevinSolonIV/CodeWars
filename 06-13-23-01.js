function descendingOrder(n){
  return +('' + n).split('').sort((a, b) => b - a).join('');
}

function descendingOrder2(n) {
  return +[...String(n)].sort((a, b) => b - a).join('');
}