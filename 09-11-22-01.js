// Sum Numbers
function sum (numbers) {
    "use strict";
    return numbers.reduce((a, e) => typeof(e) == 'number' ? e + a : a, 0);
};