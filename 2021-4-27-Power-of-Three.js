// Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true
// Example 4:

// Input: n = 45
// Output: false

// Constraints:

// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} n
 * @return {boolean}
 */

const isPowerOfThree = function (n) {
    // if (n > 1 && n % 3 !== 0) return false;
    while (n >= 3) n = n / 3;
    return n === 1;
};

// const isPowerOfThree = function (n) {
//   if (n === 0) return false;
//   if (n % 2 === 0) return false;

//   while (n >= 1) {
//     if (n === 1) return true;
//     n /= 3;
//   }
//   return false
// };

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(100));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(45));
console.log(isPowerOfThree(9));
