function getGeneration(cells, generations){
    if(!cells || cells == [] || cells == [[]]) {
      return [[]];
    } else if(generations < 1) {
      return JSON.parse(JSON.stringify(cells));
    }
    let board = JSON.parse(JSON.stringify(cells));
    for(let i = 0; i < generations && board != [[]]; i++) {
      board = conwayStep(board);
    }
    return board;
  }
  
  //Execute a single step of Conway's Game of Life and return the resulting cells
  function conwayStep(cells) {
    let step = JSON.parse(JSON.stringify(cells));
    let xKOffset = 0;
    let yKOffset = 0;
    //expand board by one if there are three consecutive live cells in an edge row or column
    //  (this is the only way for the active region to expand)
    //  and add an offset to the kernel
    if(step[0].join('').includes('111')) {
      step.unshift(new Array(step[0].length).fill(0));
      yKOffset = -1;
    }
    if(step.map(x => x[0]).join('').includes('111')) {
      step.forEach(x => x.unshift(0));
      xKOffset = -1;
    }
    if(step[step.length - 1].join('').includes('111')) {
      step.push(new Array(step[0].length).fill(0));
    }
    if(step.map(x => x[x.length - 1]).join('').includes('111')) {
      step.forEach(x => x.push(0));
    }
    //run a kernel across the input board, summing a three by three grid centered on x,y
    const kernel = [[-1 + xKOffset, 1 + yKOffset],  [xKOffset, 1 + yKOffset],  [1 + xKOffset, 1 + yKOffset],
                    [-1 + xKOffset, yKOffset],      [xKOffset, yKOffset],      [1 + xKOffset, yKOffset],
                    [-1 + xKOffset, -1 + yKOffset], [xKOffset, -1 + yKOffset], [1 + xKOffset, -1 + yKOffset]];
    for(let y = 0; y < step.length; y++) {
      for(let x = 0; x < step[0].length; x++) {
        const sum = kernel.reduce((acc, elem) => {
            if(cells[y + elem[1]] && cells[y + elem[1]][x + elem[0]]) {
              return acc + cells[y + elem[1]][x + elem[0]];
            } else {
              return acc;
            }
          }, 0);
        //if the sum is less than three, the center is a dead cell in the next gen
        if(sum < 3) {
          step[y][x] = 0;
        }
        //if the sum is exactly three, the center is a live cell in the next gen
        if(sum === 3) {
          step[y][x] = 1;
        }
        //if the sum is exactly four, the center remains as it is in the next gen
        if(sum === 4) {
          //nothing changes
        }
        //if the sum is greater than four, the center is a dead cell in the next gen
        if(sum > 4) {
          step[y][x] = 0;
        }
      }
    }
    return trim(step);
  }
  
  //Trim leading and tailing rows or columns that only contain zeros.
  //  This function should return a new array rather than modifying the
  //  argument array if it were used outside of conwayStep()
  function trim(step) {
    while(step[0].length > 0 && !step.map(x => x[0]).includes(1)) {
      step.forEach(x => x.shift());
    }
    while(step[0].length > 0 && !step.map(x => x[x.length-1]).includes(1)) {
      step.forEach(x => x.pop());
    }
    while(step.length > 1 && !step[0].includes(1)) {
      step.shift();
    }
    while(step.length > 1 && !step[step.length - 1].includes(1)) {
      step.pop();
    }
    return step;
  }