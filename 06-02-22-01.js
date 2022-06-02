function enough(cap, on, wait) {
    return Math.max(0, wait - (cap - on));
  }