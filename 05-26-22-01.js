function stray(nums) {
    let orderedNums = nums.slice().sort((a, b) => a - b);
    return orderedNums[0] == orderedNums[1] ? orderedNums[orderedNums.length - 1] : orderedNums[0];
  }

// better:

const stray2 = (numbers) => numbers.filter(el => numbers.indexOf(el) === numbers.lastIndexOf(el))[0];

// best (using bitwise or):

const stray3 = (nums) => nums.reduce((a, e) => a ^ e, 0);

// This does rely on there being an even number of repeated elements, since x ^ x = 0