function vowelOne(s){
  return s.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '1' : '0').join('');
}