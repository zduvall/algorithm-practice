/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
 */


const isPowerOfThree = function (n) {
    while(n >= 3) n = n / 3;
    return n === 1;
};

// const isPowerOfThree = function (n) {
//     return (Math.log(n) / Math.log(3)) % 1 < 0.00000000000001
// };


// // I did this option below to show a fellow student how you could use memoization.

// const memo = {}

// const isPowerOfThree = (n, ogN = n) => {
//     if (memo[n]) return memo[n];
//     if (n === 3 || n === 1) {
//         memo[ogN] = true
//         return memo[ogN]
//     };
//     if (n < 3) {
//         memo[ogN] = false
//         return memo[ogN]
//     };
//     return isPowerOfThree(n / 3, ogN)
// }

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(4));