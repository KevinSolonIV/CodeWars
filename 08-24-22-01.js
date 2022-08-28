/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */
String.prototype.capitalize = function() {
  let str = this.toString();
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let capper = {};
  for(let i = 0; i < 26; i++) {
    capper[lower[i]] = upper[i];
  }
  if(capper[str.charAt(0)]) return capper[str.charAt(0)] + str.slice(1);
  return str;
}
