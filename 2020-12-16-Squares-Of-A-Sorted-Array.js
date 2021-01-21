// https://leetcode.com/problems/squares-of-a-sorted-array/
/*
Given an integer array nums sorted in non-decreasing order, return an array of 
the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
*/

// this solution ranged between 35% and 72%, , time complexity = n + nLogn

const sortedSquares = function (nums) { 
    const squaredNums = []
    nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    nums.forEach(el => squaredNums.push(el * el));
    return squaredNums;
};

const nums1 = [-4, -1, 0, 3, 10] // [0,1,9,16,100]
const nums2 = [-7, -3, 2, 3, 11] // [4,9,9,49,121]

console.log(sortedSquares(nums1));
console.log(sortedSquares(nums2));

// ranged from 72.29% - 94.14%, time complexity = n + nLog(n)

const sortedSquares2 = function (nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b)) // O(nLog(n))
    return nums.map(el => (el ** 2)); // linear
};

// for fun, on one line:
// const sortedSquares = nums => nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map(el => (el ** 2));

console.log(sortedSquares2(nums1));
console.log(sortedSquares2(nums2));

// this was after looking at another solution for a couple minutes, but it didn't 
// actually perform much better on their distribution. I think the time complexity
// here may be O(n)

const sortedSquares3 = function (nums) {
    const newNums = [];
    let lftIdx = 0;
    let rtIdx = nums.length - 1;
    let nnIdx = rtIdx;

    while (lftIdx <= rtIdx) {
        const lft = nums[lftIdx];
        const rt = nums[rtIdx];
        if(lft ** 2 > rt ** 2) {
            newNums[nnIdx--] = lft ** 2; // note that the decrement happens after the lookup (--nnIdx wouldn't do that).
            lftIdx++;
        } else {
            newNums[nnIdx--] = rt ** 2;
            rtIdx--;
        }
        // nnIdx--; // took out this line becuase of what I did on 67 adn 70
    }
    return newNums;
};

console.log(sortedSquares3(nums1));
console.log(sortedSquares3(nums2));



let testArr = [1, 2, 3, 4, 5, 6]
let index = 0

console.log(testArr[index++]);
console.log(testArr[index++]);
console.log(testArr[index++]);
console.log(testArr[index++]);
console.log(testArr[index++]);
console.log(testArr[index++]);
