function isValidWalk(walk, time = 10) {
  // [blocks north of origin, blocks east of origin, total blocks walked]
  let tracker = [0, 0, 0];
  walk.forEach(e => {
    if(e == 'n') tracker[0] += 1;
    if(e == 's') tracker[0] -= 1;
    if(e == 'e') tracker[1] += 1;
    if(e == 'w') tracker[1] -= 1;
    tracker[2] += 1;
  });
  return tracker[0] == 0 && tracker [1] == 0 && tracker[2] == time;
}