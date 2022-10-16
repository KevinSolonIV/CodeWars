function findShort(s){
    return s.split(' ').reduce((a, e, i, arr) => e.length < a ? e.length : a, s.length);
  }