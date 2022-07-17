function validSolution(board){
  for(let i = 0; i < 9; i++) {
    //rows
    if(!validRegion(board[i])) {
      return false;
    }
    
    //columns
    if(!validRegion(board.map(e => e[i]))) {
      return false;
    }
    
    //boxes
    let x = (i % 3) * 3;
    let y = Math.floor(i / 3) * 3
    if(!validRegion(board                               //validate region with (x, y) as upper left element:
                    .slice(y, y + 3)                    //reduce to the three rows that contain this region
                    .map(e => e.slice(x, x + 3))        //reduce rows to the three columns in this region
                    .reduce((a, e) => a.concat(e), [])) //flatten the 2d array into a 1d array
      ) {
      return false
    }
  }
  return true;
}

//for given input:    array of integers
//returns true iff:   array contains first (arr.length - 1) positive integers in any order
function validRegion(arr) {
  //slice() is used to isolate the original array from permutation by the sort() call
  //compare each element of the sorted array with it's index to ensure sequentiality
  return arr.slice().sort((a, b) => a - b).reduce((a, e, i) => a && (e == i + 1), true);
}

//One line solution:
const validSolution2=board=>new Array(9).fill(true).map((_,i)=>board[i].slice().sort((a,b)=>a-b).reduce((a,e,i)=>a&&(e==i+1),true)&&board.map(e=>e[i]).slice().sort((a,b)=>a-b).reduce((a,e,i)=>a&&(e==i+1),true)&&board.slice(Math.floor(i/3)*3,Math.floor(i/3)*3+3).map(e=>e.slice((i%3)*3,(i%3)*3+3)).reduce((a,e)=>a.concat(e),[]).slice().sort((a,b)=>a-b).reduce((a,e,i)=>a&&(e==i+1),true)).every(e=>e);