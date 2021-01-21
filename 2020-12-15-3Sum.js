/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

// this first solution took too long
function threeSum(nums) {
    const finArray = []

    if (nums.length < 3) return finArray;

    for (let i = 0; i < nums.length - 2; i++) {
        let el1 = nums[i];

        for (let j = i + 1; j < nums.length - 1; j++) {
            let el2 = nums[j];

            for (let k = j + 1; k < nums.length; k++) {
                let el3 = nums[k];

                if (el1 + el2 + el3 === 0) {
                    if (finArray.length < 1) {
                        finArray.push([el1, el2, el3])
                    } else {
                        let alreadyExists = false;

                        finArray.forEach(subArray => {
                            if (!(el1 === 0 && el2 === 0 && el3 === 0) &&
                                subArray.includes(el1) &&
                                subArray.includes(el2) &&
                                subArray.includes(el3)) alreadyExists = true;
                            if ((el1 === 0 && el2 === 0 && subArray[0] === 0 && subArray[1] === 0)) alreadyExists = true;
                        })
                        if (!alreadyExists) finArray.push([el1, el2, el3])
                    }
                }
            }
        }
    }
    return finArray;
}

let testArr = [0, 0, 0]
let testArr1 = [-1, 0, 1, 2, -1, -4]
let testArr2 = [-3, 0, 1, 2, -1, -4, 5, 3]
let testArr3 = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]

// console.log(threeSum(testArr));
// console.log(threeSum(testArr1));
// console.log(threeSum(testArr2));
// console.log(threeSum(testArr3));

// here's attempt #2

function threeSum2(nums) {
    const finArray = [];

    if (nums.length < 3) return finArray;

    nums.sort((a, b) => a - b);

    for (let i = 0; nums[i] <= 0 && i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let frtEl = nums[i], midEl = nums[j], bckEl = nums[k]
            let sum = frtEl + midEl + bckEl;

            if (sum === 0) {
                finArray.push([frtEl, midEl, bckEl])
                while (midEl === nums[j + 1]) j++;
                while (bckEl === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return finArray;
};

console.log(threeSum2(testArr));
console.log(threeSum2(testArr1));
console.log(threeSum2(testArr2));
console.log(threeSum2(testArr3));