// return masked string
function maskify(str, shownChars = 4) {
  return str.slice(-shownChars).padStart(str.length, '#');
}
