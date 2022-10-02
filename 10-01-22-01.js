function twoSum(numsArr, target) {
    for(let i = 0; i < numsArr.length; i++) {
      if(numsArr.includes(target - numsArr[i])) {
        let ind1 = i
        let ind2 = numsArr.indexOf(target - numsArr[i])
        if(ind1 == ind2) continue
        return [ind1, ind2]
      }
    }
  }