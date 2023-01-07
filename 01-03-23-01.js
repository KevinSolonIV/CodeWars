// decent for loop solution
function fib_by_for(n) {
  if(n == 0) return 0;
  if(n == 1) return 1;
  let n_1 = 1;
  let n_2 = 0;
  for(let i = 2; i < n; i++) {
    [n_2, n_1] = [n_1, n_1 + n_2];
  }
  return n_1 + n_2;
}

// wildly inefficient recursive solution
let fib_recursive = (n) => {
  if(n == 0) return 0;
  if(n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// better recursive solution with memoization
function fib(n, memo = [0, 1]) {
  if(memo[n] == undefined) memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log("result:   " + fib(2));
console.log("expected: 1");
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

console.log("result:   " + fib(3));
console.log("expected: 2");
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

console.log("result:   " + fib(4));
console.log("expected: 3");
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.