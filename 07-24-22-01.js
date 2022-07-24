function solution(input) {
  // Cells are stored as a two-digit number with the tens-place treated as the x-coordinate
  //   and the ones-place treated as the y-coordinate
  let CellGroup = function(cell = []) {
    this.cells = [cell];
    this.edges = this.findEdges(cell);
  }

  CellGroup.prototype.addCell = function(cell) {
    // if this cell is already in the list, return early
    if(this.cells.includes(cell)) return -1;
    // if this cell is in the edges list, remove it
    if(this.edges.includes(cell)) {
      this.edges.splice(this.edges.indexOf(cell), 1);
    }
    // add cell to the cells array
    this.cells.push(cell);
    // add edges of the new cell to the edges array
    this.findEdges(cell).forEach(edge => this.addEdge(edge));
    return 1;
  }

  CellGroup.prototype.findEdges = function(cell) {
    let edges = []
    // ensure that edges out of bounds or edges that overflow
    //   into the next row or column are excluded
    if(+cell % 10 >= 1) edges.push(+cell - 1);
    if(+cell / 10 >= 1) edges.push(+cell - 10);
    if(+cell % 10 < 9) edges.push(+cell + 1);
    if(+cell / 10 < 9) edges.push(+cell + 10);
    return edges;
  }

  CellGroup.prototype.addEdge = function(edge) {
    // if this cell is already stored as an edge or a cell, return early
    if(this.edges.includes(edge) || this.cells.includes(edge)) return -1;
    // otherwise add it to the edges array
    this.edges.push(edge);
    return 1;
  }

  CellGroup.prototype.addGroup = function(group) {
    group.cells.forEach(cell => this.addCell(cell));
  }
  
  // remove non-numbers, numbers out of range, and duplicates
  let inputArr = input.split(',');
  let blackCells = inputArr.filter((x, i) => x.length === 2 && +x >= 0 && +x < 100 && inputArr.indexOf(x) == i).map(x => +x);
  if (blackCells.length === 0) return 0;
  // look for groups that you are a neighbor to
  let cellGroups = [];
  // for each black cell...
  blackCells.forEach((cell, i) => {
    // find all groups that are connected to this cell
    let connectedGroups = []
    cellGroups.forEach((group, index) => {
      if(group.edges.includes(+cell)) {
        connectedGroups.push(index);
      }
    });
    // create new cell group for the current black cell
    let newGroup = new CellGroup(cell);
    // add all the connected cell groups to the new group
    connectedGroups.sort((a, b) => b - a).forEach(groupIndex => {
      newGroup.addGroup(cellGroups[groupIndex]);
      // remove the cell group that was added to newGroup to avoid duplicates
      cellGroups.splice(groupIndex, 1);
    });
    // add new group to the cell groups array
    cellGroups.push(newGroup);
  });
  // sort the array and return the size of the largest cell group
  return cellGroups.sort((a, b) => b.cells.length - a.cells.length)[0].cells.length;
}