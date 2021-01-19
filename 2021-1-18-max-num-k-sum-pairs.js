/**
 * 
 *   Max Number of K-Sum Pairs
You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and 
remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= 109
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


const maxOperations = function (nums, k) {

    let map = new Map(), sum = 0;

    nums.forEach(num => {
        if (num >= k) return;
        let diff = k - num;

        if (map.get(diff) >= 1) {
            map.set(diff, map.get(diff) - 1)
            sum++;
            
        } else {
            map.set(num, map.get(num) + 1 || 1);
        }
    })

    return sum;
};

console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(maxOperations([4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], 2)); // 2

// // This works, but timed out. Too long.

// const maxOperations = function (nums, k) {

//     const goodSet = new Set(), badSet = new Set()
//     let sum = 0; 

//     for (let i = 0; i < nums.length - 1; i++) {
//         let goodEl = false;

//         const el1 = nums[i];

//         if (el1 > k) {
//             badSet.add(el1);
//             continue;
//         }
//         if (goodSet.has(i) || badSet.has(el1)) continue;

//         for (let j = i + 1; j < nums.length; j++) {
//             const el2 = nums[j];

//             if (el2 > k) {
//                 badSet.add(el2);
//                 continue;
//             }
//             if (goodSet.has(j) || badSet.has(el2)) continue;

//             if (el1 + el2 === k) {

//                 goodSet.add(j);
//                 sum++;
//                 goodEl = true;
//                 break
//             }
//         }
//         if (!goodEl) badSet.add(el1);
//     }
//     return sum;
// };
