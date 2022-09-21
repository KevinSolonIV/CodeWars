function deleteNth(arr,n){
    let ans = []
    // for each element of the input, if there are fewer than n copies of this element in ans, add it to ans
    arr.forEach(elem => ans.filter(motif => motif === elem).length < n ?
                ans.push(elem) :
                console.log("too many of this motif: skipping " + elem))
    return ans
  }