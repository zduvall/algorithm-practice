// https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * 1480. Running Sum of 1d Array
Easy

Share
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.



Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 */


/**
* @param {number[]} nums
* @return {number[]}
*/
const runningSum0 = function (nums) {
    if(nums.length === 1) return nums;
    const runningSum = new Array(nums.length);
    runningSum[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        runningSum[i] = nums[i] + runningSum[i-1];
    }
    return runningSum;
};

console.log(runningSum0([1, 2, 3, 4]))


// This one below out-performed only some of the time the one above on leet code.

const runningSum2 = function (nums) {
    if (nums.length === 1) return nums;

    const runningSum = new Array(nums.length);
    const map = new Map()
    runningSum[0] = nums[0];
    map.set(0, nums[0])

    for (let i = 1; i < nums.length; i++) {
        let cur = nums[i] + map.get(i - 1);
        map.set(i, cur)
        runningSum[i] = cur;
    }
    return runningSum;
};

console.log(runningSum2([1, 2, 3, 4]))