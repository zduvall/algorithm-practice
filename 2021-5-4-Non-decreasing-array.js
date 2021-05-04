// Non-decreasing Array
// Given an array nums with n integers, your task is to check if it could become
// non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for
// every i (0-based) such that (0 <= i <= n - 2).

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one
// element.

// Constraints:

// n == nums.length
// 1 <= n <= 104
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      // if current is ever bigger than last, increment
      // then check if count > 1, or i - 2 > i, or i - 1 > i + 1
      if (count++ || (nums[i - 2] > nums[i] && nums[i - 1] > nums[i + 1]))
        return false;
    }
  }
  return true;
};

console.log(checkPossibility([4, 2, 3])); // true
console.log(checkPossibility([4, 2, 1])); // false
console.log(checkPossibility([1])); // true
console.log(checkPossibility([3, 4, 2, 3])); // false
console.log(checkPossibility([5, 7, 1, 8])); // true
