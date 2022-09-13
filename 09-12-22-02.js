function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join('');
}
function isPalindrome1(x) {
  let str = x.toLowerCase()
  for(let i = 1; i < (str.length / 2); i++) {
    if(str.charAt(i - 1) != str.charAt(str.length - i)) return false
  }
  return true
}