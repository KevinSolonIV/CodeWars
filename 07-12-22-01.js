function count(sheep){
  // convert to 2d matrix
  let mat = sheep.split('\n').map(e => e.split(''));
  
  let numSheep = 0;
  for(let i = 1; i < mat.length - 1; i++) {
    for(let j = 1; j < mat[0].length - 1; j++) {
      // + pattern
      if([mat[i-1][j], mat[i][j-1], mat[i][j], mat[i][j+1], mat[i+1][j]].sort().join('') == 'eehps') {
        numSheep++;
      }
      // X pattern
      if([mat[i-1][j-1], mat[i-1][j+1], mat[i][j], mat[i+1][j-1], mat[i+1][j+1]].sort().join('') == 'eehps') {
        numSheep++;
      }
    }
  }
  return numSheep;
}