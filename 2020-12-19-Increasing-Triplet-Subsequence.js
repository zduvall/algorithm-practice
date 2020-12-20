/**
 * Increasing Triplet Subsequence

Given an integer array nums, return true if there exists a triple of indices 
(i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1


Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */

const increasingTriplet = function (nums) {
    let firstNum = Infinity // this variable will end up set to the lowest number in the array
    let secondNum = Infinity // this variable will end up set to the second lowest number in the array if it's index if after first num

    for (let num of nums) {
        if (num <= firstNum) firstNum = num;
        else if (num <= secondNum) secondNum = num;
        else return true; // if we ever make it to this final else statement, that means we've set first num to the lowest number and second num to the second lowest number and we still have something left that would have to be higher.
    }
    return false;
};

