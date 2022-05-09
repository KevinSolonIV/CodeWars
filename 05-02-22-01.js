function removeSmallest(numbers) {
    const arr = numbers.slice();
    arr.splice(numbers.indexOf(Math.min(...numbers)), 1);
    return arr;
  }

  // Filtering also works, as in:

  function removeSmallest2(numbers) {
    return numbers.filter((x, i, arr) => i !== arr.indexOf(Math.min(...arr)));
  }