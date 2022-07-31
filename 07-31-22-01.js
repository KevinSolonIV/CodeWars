function spiralCorner(rows, columns) {
  if(rows < 3 || columns < 3) return [];
  let botX = 0,
      botY = 0,
      topX = rows - 1,
      topY = columns - 1,
      result = [];
  //initial point
  result.push([0, 0])
  while(true) {
    //left side
    result.push([topX, botY]);
    botY++;
    if(botY > topY) break;
    //top side
    result.push([topX, topY]);
    topX--;
    if(botX > topX) break;
    //right side
    result.push([botX, topY]);
    topY--;
    if(botY > topY) break;
    //bottom side
    result.push([botX, botY]);
    botX++;
    if(botX > topX) break;
  }
  return result;
}