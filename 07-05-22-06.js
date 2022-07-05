function rgb(r, g, b){
  return [r, g, b]
    .reduce((a, e) => a = a * 256 + (e < 0 ? 0 : e > 255 ? 255 : e), 0)
    .toString(16)
    .toUpperCase()
    .padStart(6,'0');
}