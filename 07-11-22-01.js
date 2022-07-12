function draw(twoRectangles) {
  // create a 100 x 100 canvas
  var canvas = new Canvas(100,100)
  var ctx = canvas.getContext('2d');
  // draw background
  ctx.fillStyle="#ffffff"
  ctx.fillRect(0,0,100,100)
  
  // draw rectangles
  ctx.fillStyle = 'blue';
  for(const rect of twoRectangles) {
    // sort each rectangle's corner vertices
    if(rect[1][0] < rect[0][0]) {
      let minX = rect[1][0];
      rect[1][0] = rect[0][0];
      rect[0][0] = minX;
    }
    if(rect[1][1] < rect[0][1]) {
      let minY = rect[1][1];
      rect[1][1] = rect[0][1];
      rect[0][1] = minY;
    }
    // calc side lengths
    let lenX = rect[1][0] - rect[0][0] + 1;
    let lenY = rect[1][1] - rect[0][1] + 1;
    // draw rectangle
    ctx.fillRect(...rect[0], lenX, lenY);
  }
  
  // generic evaluation for overlap rectangle
  let intersection = [[Math.max(twoRectangles[0][0][0], twoRectangles[1][0][0]),
                       Math.max(twoRectangles[0][0][1], twoRectangles[1][0][1])],
                      [Math.min(twoRectangles[0][1][0], twoRectangles[1][1][0]),
                       Math.min(twoRectangles[0][1][1], twoRectangles[1][1][1])]]
  // if side lengths of the theoretical overlap rectangle are greater than zero
  //   in both directions there is overlap, otherwise there is none
  let interX = intersection[1][0] - intersection[0][0] + 1;
  let interY = intersection[1][1] - intersection[0][1] + 1;
  // if there is overlap, draw overlap rectangle
  if(interX > 0 && interY > 0) {
    ctx.fillStyle = 'black';
    ctx.fillRect(...intersection[0], interX, interY);
  }
  
  // return the image data
  return canvas.toDataURL()
}