// 221. Maximal Square

// Given an m x n binary matrix filled with 0's and 1's, find the largest square
// containing only 1's and return its area.

// Example 1:

// Input: matrix = [["1","0","1","0","0"],
//                  ["1","0","1","1","1"],
//                  ["1","1","1","1","1"],
//                  ["1","0","0","1","0"]]
// Output: 4
// Example 2:

// Input: matrix = [["0","1"],["1","0"]]
// Output: 1
// Example 3:

// Input: matrix = [["0"]]
// Output: 0

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 300
// matrix[i][j] is '0' or '1'.

/**
 * @param {character[][]} matrix
 * @return {number}
 */

const maximalSquare = function (matrix) {
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') matrix[i][j] = 0;
      else if (i === 0 || j === 0) matrix[i][j] = Number(matrix[i][j]);
      else {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) +
          1;
      }
      if (matrix[i][j] > max) max = matrix[i][j];
    }
  }

  return max * max;
};

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);

// her's what we could do if we needed to not edit the original array

// const maximalSquare = function (matrix) {
//   const dp = [];
//   let max = 0;

//   for (let i = 0; i < matrix.length; i++) {
//     dp.push(matrix[i].slice());
//   }

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (dp[i][j] === '0') dp[i][j] = 0;
//       else if (i === 0 || j === 0) dp[i][j] = Number(dp[i][j]);
//       else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
//       if (dp[i][j] > max) max = dp[i][j];
//     }
//   }

//   return max;
// };
