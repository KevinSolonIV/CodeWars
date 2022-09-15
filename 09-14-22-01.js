function sortArrays(arr1,arr2){
    //these must be new arrays, not references, to prevent permutating the input arrays
    let incr1 = arr1.slice().sort((a, b) => a - b)
    let incr2 = arr2.slice().sort((a, b) => a - b)
    let ans1 = new Array(arr1.length)
    let ans2 = new Array(arr2.length)
    
    for(let i = 0; i < arr1.length; i++) {
      // find the value from each arr
      let val1 = arr1[i]
      let val2 = arr2[i]
      // find the position for each value
      let pos1 = incr1.indexOf(arr1[i])
      let pos2 = incr2.indexOf(arr2[i])
      // set the value at the correct position in each ans arr
      ans1[pos2] = val1
      ans2[pos1] = val2
      // in order to deal with duplicate values, remove values from utility arrs after use
      incr1.splice(pos1, 1, null)
      incr2.splice(pos2, 1, null)
    }
    return [ans1, ans2]
  }