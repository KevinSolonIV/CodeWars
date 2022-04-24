function comp(array1, array2){
    if(array1 == null || array2 == null) {
      return false;
    }
    //unique deep copy of array2
    let arr2cpy = JSON.parse(JSON.stringify(array2));
    array1.forEach(x => {
      if(arr2cpy.includes(corrFunc(x))) {
        //remove each element of arr2cpy that correlates to each element of array1
        let pos = arr2cpy.indexOf(corrFunc(x));
        arr2cpy.splice(pos, 1);
      } else {
        //if there is an element of array1 that does not correlate to an element of
        //  arr2cpy, exit early
        return false;
      }
    });
    //if after removing each correlated value from arr2cpy, the array is empty, all
    //  values correlate
    return arr2cpy.length === 0;
  }
  
  //I have generalized out the correlation function for array1 => array2 correlation,
  //  x => x^2 in this case
  function corrFunc(x) {
    return x * x;
  }