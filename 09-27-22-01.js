function gimme (triplet) {
    return triplet.indexOf(triplet.slice().sort((a, b) => a - b)[1])
  }