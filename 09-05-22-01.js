function dirReduc(arr){
    let cancels = {
      NORTH: 'SOUTH',
      SOUTH: 'NORTH',
      EAST: 'WEST',
      WEST: 'EAST'
    }
    return arr.reduce((a, e) => a[a.length - 1] == cancels[e] ? a.slice(0, -1) : a.concat(e), []);
  }