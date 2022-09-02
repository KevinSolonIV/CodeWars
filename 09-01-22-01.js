function tops(msg) {
    if(msg == '') return '';
    let topsArr = [];
    let inc = 1;
    let pos = -1;
    while(pos < msg.length) {
      pos += (4 * inc) - 1;
      inc ++;
      topsArr.unshift(msg.slice(pos, pos + inc))
    }
    return topsArr.join('');
  }