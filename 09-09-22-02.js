function longestBouncyListV2(arr) {
    //edge cases
    if(!Array.isArray(arr)) return []
    if(arr.length < 2) return arr
    if(arr.length === 2) return arr[0] === arr[1] ? [arr[0]] : arr
    
    //sign to alternate comparisons
    let sign = (arr[0] < arr[1] ? -1 : 1)
    //create array to hold bouncy subarrays
    let bounciest = [arr[0]]
    //create an array to hold working bouncy array
    let bouncy = [arr[0]]
    
    for(let i = 1; i < arr.length; i++) {
      //for each element of arr, if it follows bouncy pattern add it to current bouncy array
      if((arr[i - 1] - arr[i]) * sign > 0) {
        bouncy.push(arr[i])
        sign *= -1
        //if working array is longer, set bounciest to working array
        if(bouncy.length > bounciest.length) {
          bounciest = bouncy
        }
      }
      //if it does not follow bouncy pattern, start new working array
      else {
        //skip any repeated values
        while(arr[i - 1] === arr[i] && i < arr.length) {
          i++
        }
        //if end of arr break out of loop
        if(i + 1 >= arr.length) break;
        //start a new working array starting from the previous index of arr
        bouncy = [arr[i - 1], arr[i]]
        //set sign (only strictly necessary if duplicates were skipped)
        sign = (arr[i - 1] > arr[i] ? -1 : 1)
      }
    }
    //return the longest bouncy subarray
    return bounciest
  }