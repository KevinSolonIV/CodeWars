function sumPairs(ints, s) {
    let targets = new Set()
    for(let i = 0; i < ints.length; i++) {
      if(targets.has(ints[i])) return [s - ints[i], ints[i]]
      targets.add(s - ints[i])
    }
    return undefined
  }