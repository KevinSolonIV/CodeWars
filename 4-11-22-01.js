function mxdiflg(arrA, arrB) {
    let aMax = arrA.reduce((a, e) => e.length > a ? e.length : a, -1);
    let aMin = arrA.reduce((a, e) => e.length < a ? e.length : a, Number.MAX_VALUE);
    let bMax = arrB.reduce((a, e) => e.length > a ? e.length : a, -1);
    let bMin = arrB.reduce((a, e) => e.length < a ? e.length : a, Number.MAX_VALUE);
    console.log(aMax, aMin, bMax, bMin);
    return (aMax === -1 || bMax === -1) ? -1 : Math.max(Math.abs(aMax - bMin), Math.abs(aMin - bMax));
  }

//Notes from other solutions:
//1. an initial check for length of 0 reduces later complexity and unnecessary computations
//2. Other ways to operate over the arrays include
//  a. Array.map(x => x.length)
//  b. Array.sort()
//  c. Nested for() loops - I don't like this option because it pushes into O(n^2)
//3. This exercise has a lot of tradeoffs of computational simplicity vs readability