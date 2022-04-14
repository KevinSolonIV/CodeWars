function XO(str) {
    const exes = str.replace(/[^xX]/g, '').length;
    const ohs = str.replace(/[^oO]/g, '').length;
    return exes == ohs;
}

//Notes after seeing other solutions
//1. I should be using the i flag in regular expressions to ignore case
//2. str.match can provide a cleaner solution
//3. Since only the length matters, I could have just split on the x's and o's instead of replacing everything that isn't x's or o's, and compared the array lengths
