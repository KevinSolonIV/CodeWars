function solution(string) {
  let str = string.slice();
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(e => {
    str = str.split(e).join(' ' + e);
  });
  return str;
}
