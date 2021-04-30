// Given an array of integers nums sorted in ascending order, find the starting
// and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// Follow up: Could you write an algorithm with O(log n) runtime complexity?

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

// simple, but less optimized

// const searchRange = function (nums, target) {
//   return [nums.indexOf(target), nums.lastIndexOf(target)];
// };

// found this online

const searchRange = function (N, T) {
  const find = (target, arr, left = 0, right = arr.length) => {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };
  let Tleft = find(T, N);
  if (N[Tleft] !== T) return [-1, -1];
  return [Tleft, find(T + 1, N, Tleft) - 1];
};