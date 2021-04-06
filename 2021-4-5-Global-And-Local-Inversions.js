// Global and Local Inversions
// We have some permutation A of [0, 1, ..., N - 1], where N is the length of A.

// The number of (global) inversions is the number of i < j with 0 <= i < j < N and A[i] > A[j].

// The number of local inversions is the number of i with 0 <= i < N and A[i] > A[i+1].

// Return true if and only if the number of global inversions is equal to the number of local inversions.

// Example 1:

// Input: A = [1,0,2]
// Output: true
// Explanation: There is 1 global inversion, and 1 local inversion.
// Example 2:

// Input: A = [1,2,0]
// Output: false
// Explanation: There are 2 global inversions, and 1 local inversion.
// Note:

// A will be a permutation of [0, 1, ..., A.length - 1].
// A will have length in range [1, 5000].
// The time limit for this problem has been reduced.

/**
 * @param {number[]} A
 * @return {boolean}
 */

// iterate over array, check if A[i] > i + 1 (return false)
// return true if make it all the way through

const isIdealPermutation = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (Math.abs(A[i] - i) > 1) return false;
  }
  return true;
};
// const isIdealPermutation = function (A) {
//   for (let i = 0; i < A.length; i++) {
//     const cur = A[i];
//     if (cur < i - 1 || cur > i + 1) return false;
//   }
//   return true;
// };

console.log(isIdealPermutation([1, 0, 2])); // true
console.log(isIdealPermutation([1, 2, 0])); // false
console.log(isIdealPermutation([1, 0, 3, 2, 5, 4])); // true
console.log(isIdealPermutation([2, 1, 0])); // false

// false comes from
// -- skipping more than one at a time
// -- more than one decreasing in a row
// -- ** num can never be more than i + 1 or less than i - 1 **
