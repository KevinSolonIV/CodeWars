function sumDigPow(a, b) {
    let answers = [];
    for(let i = a; i <= b; i++) {
      // putting a '1' on the beginning both converts i to a string and makes the index nicer
      // for the pow function; since it will always add one to the total (1^0 = 1),
      // I set the initial accumulator value to -1 to account for it
      const pows = ('1' + i).split('').reduce((acc, elem, ind) => acc + Math.pow(elem, ind), -1);
      if(+pows == +i) {
        answers.push(i);
      }
    }
    return answers;
  }
  