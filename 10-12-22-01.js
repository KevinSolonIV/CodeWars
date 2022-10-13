// inputs : n === a number

// output: every integer from 1 to n inclusive, except replace every number divisible by 3 with the string 'Fizz', replace every number divisible by 5 with the string 'Buzz', and replace every number divisible by both 3 and 5 by the string 'Fizz Buzz'.

// Naive solution; iterates and checks each of the possibilities
function fizzBuzz1(n) {
    let output = new Array();
    for(let i = 1; i < n + 1; i++) {
      if(i % 15 === 0) {
        output.push('Fizz Buzz')
      } else if(i % 3 === 0) {
        output.push('Fizz')
      } else if(i % 5 === 0) {
        output.push('Buzz')
      } else {
        output.push(i)
      }
    }
    let answer = output.join('\n')
    return answer
  }
  
  // More refined solution with string concatination; adds only the elements it needs with fewer comparisons and no modulus operations or else blocks (more math ops overall though)
  function fizzBuzz2(n) {
    let test3 = 2;
    let test5 = 2;
    let result = '1';
    for(let i = 2; i <= n; i++) {
      result += ','
      if(test3 === 3) {
        result += ' Fizz';
        test3 = 0;
      }
      if(test5 === 5) {
        result += ' Buzz';
        test5 = 0;
      }
      if(test3 && test5) {
        result += ' ' + i;
      }
      test3++;
      test5++;
    }
    return result;
  }
  
  // Single line solution
  let fizzBuzz3 = (n) => [...Array(n)].map((_, i) => (i + 1) % 15 ? (i + 1) % 3 ? (i + 1) % 5 ? i + 1 : 'Buzz' : 'Fizz' : 'Fizz Buzz').join('\n')
  
  // Test cases
  console.log(fizzBuzz3(4)) // 1, 2, Fizz, 4
  console.log(fizzBuzz3(8)) // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8
  console.log(fizzBuzz3(16)) // 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16
  