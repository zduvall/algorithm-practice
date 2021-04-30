// 4. Median of Two Sorted Arrays

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return
// the median of the two sorted arrays.

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Example 3:
// Input: nums1 = [0,0], nums2 = [0,0]
// Output: 0.00000

// Example 4:
// Input: nums1 = [], nums2 = [1]
// Output: 1.00000

// Example 5:
// Input: nums1 = [2], nums2 = []
// Output: 2.00000

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1, nums2) => {
  const len = nums1.length + nums2.length;
  const mid = (len / 2 + 1) | 0;

  let i = 0;
  let j = 0;
  let k = 0;
  let last;
  let b4last;

  while (i++ < mid) {
    b4last = last;
    last = nums1[j] < (nums2[k] ?? Infinity) ? nums1[j++] : nums2[k++];
  }

  return len % 2 === 1 ? last : (last + b4last) / 2;
};

console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// const findMedianSortedArrays = (nums1, nums2) => {
//   const len = nums1.length + nums2.length;
//   // const mid = (len / 2 + 1) | 0; // bitwise or operator does the same thing in this case
//   const mid = Math.floor(len / 2 + 1);

//   let i = 0,
//     j = 0,
//     k = 0,
//     last,
//     b4last;

//   while (i++ < mid) {
//     b4last = last;
//     last = nums1[j] < (nums2[k] ?? Infinity) ? nums1[j++] : nums2[k++];
//   }
//   return len % 2 === 1 ? last : (last + beforeLast) / 2;
// };

// Nullish coalescing operator, ??, handles the case for choosing the lesser
// between nums1[j] and nums2[k] where nums2[k] is undefined and we want
// nums1[j].

// (nums1[j] < (nums2[k]??Infinity))
// This is distict from (nums1[j] < (nums2[k]||Infinity)). The expression
// (nums1[j] < (nums2[k]||Infinity)) is true when nums2[k] is 0 and nums1[j] is
// greater than 0 — a true value, and not what we want!

// Here, we want to use nums1[j] only when a. nums2[k] is a number, and b.
// nums1[j] is less than nums2[k]. Comparing nums1[j] < undefined will always be
// false (not what we want), hence, we default to Infinity when nums2[k] is
// undefined.
