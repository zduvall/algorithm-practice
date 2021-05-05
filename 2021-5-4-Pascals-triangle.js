// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the
// Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly
// above it as shown:

// Example 1:
// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:
// Input: rowIndex = 0
// Output: [1]

// Example 3:
// Input: rowIndex = 1
// Output: [1,1]

// Constraints:
// 0 <= rowIndex <= 33

// Understand:
// 0  => [1]
// 1  => [1,1]
// 2  => [1, 2, 1]
// 3  => [1, 3, 3, 1]
// 4  => [1, 4, 6, 4, 1]
// 5  => [1, 5, 10, 10, 5, 1]
// 6  => [1, 6, 15, 20, 15, 6, 1]
// 7  => [1, 7, 21, 35, 35, 21, 7, 1]
// 8  => [1, 8, 28, 56, 70, 56, 28, 8, 1]
// 9  => [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
// 10 => [1, 10, 45, 120, 210, 252, 210, 120, 45, 20, 1]

// any num = row!/(col!(row-col)!)      <--     here's the formula I used to solve the problem

fMemo = {};

// factorial
function f(n) {
  if (n in fMemo) return fMemo[n];

  let i = 0;
  let cur = 1;
  while (++i <= n) {
    cur *= i;
    fMemo[i] = cur;
  }
}

function getRow(r) {
  // r for row
  const ans = [1];
  f(r);

  for (let c = 1; c < r / 2 + 0.5; c++) {
    // c for column
    ans.push(fMemo[r] / (fMemo[c] * fMemo[r - c]));
  }

  return r % 2 === 1
    ? [...ans, ...ans.reverse()]
    : [...ans, ...ans.reverse().slice(1)];
}

// Refactor:

// this way is simpler, but actually slower

// function getRow(r) {
//   let ans = [1];

//   for (let i = 0; i < r; i++) {
//     temp1 = [0, ...ans];
//     temp2 = [...ans, 0];
//     for (let i = 0; i < temp1.length; i++) {
//       cur = ans[i] = temp1[i] + temp2[i];
//       if (i > ans.length - 1) ans.push(cur);
//       else ans[i] = cur;
//     }
//   }
//   return ans;
// }

console.log(getRow(0));
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
console.log(getRow(6));
