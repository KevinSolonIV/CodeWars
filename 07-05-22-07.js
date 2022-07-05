var countBits = function(n) {
  // using the length of the array of substrings out of the
  //   string representation of the number in binary which
  //   match '1', with a special case of no matches returning
  //   null being handled using the boolean OR operator to act 
  //   on a well behaved alternative to null when it comes up.
  return (Number(n).toString(2).match(/1/g) || []).length;
};