function  calculateAge(birthYear, otherYear) {
  
  let dif = otherYear - birthYear;
  
  if(dif < 0) {
    dif *= -1;
    let yrs = dif > 1 ? 'years' : 'year';
    return "You will be born in " + dif + " " + yrs + '.';
  }
  if(dif > 0) {
    let yrs = dif > 1 ? 'years' : 'year';
    return "You are " + dif + " " + yrs + " old.";
  }
  return "You were born this very year!"

}

