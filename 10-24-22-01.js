function getCurrentHand(arr) {
  // remove last four cards played from the set of seen cards as they cannot have been redrawn
  return [... arr.slice(-4).reduce((a, e) => {
    a.delete(e);
    return a;
    }, new Set(arr))];
}