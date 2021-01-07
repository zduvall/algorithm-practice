/* 
Kth Missing Positive Number
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Find the kth positive integer that is missing from this array.

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

const findKthPositive = function (arr, k) {
  if (arr[0] > k) return k;

  let skpdNums = arr[0] - 1;
  let prvSkpdNums = skpdNums;

  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i], prv = arr[i - 1];

    skpdNums += cur - prv - 1;
    
    if (skpdNums === k) return cur - 1;
    if (skpdNums > k) return prv + (k - prvSkpdNums);
    
    prvSkpdNums = skpdNums;
  }

  return arr[arr.length - 1] + k - skpdNums;
};

let arr1 = [2, 3, 4, 7, 11], k1 = 5;
let arr2 = [1, 2, 3, 4], k2 = 2;
let arr3 = [2], k3 = 1;
let arr4 = [1, 3], k4 = 1;
let arr5 = [1, 10, 21, 22, 25], k5 = 12;
let arr6 = [7, 17, 22, 26, 34], k6 = 9;
let arr7 = [5, 6, 7, 8, 9], k7 = 9;

console.log(findKthPositive(arr1, k1)); // 9
console.log(findKthPositive(arr2, k2)); // 6
console.log(findKthPositive(arr3, k3)); // 1
console.log(findKthPositive(arr4, k4)); // 2
console.log(findKthPositive(arr5, k5)); // 14
console.log(findKthPositive(arr6, k6)); // 10
console.log(findKthPositive(arr7, k7)); // 14