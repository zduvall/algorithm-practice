/*
https://www.careercup.com/question?id=19286747

Given an array of integers. Find two disjoint contiguous sub-arrays such that the absolute difference between the sum of two sub-array is maximum.
* The sub-arrays should not overlap.

eg- [2 -1 -2 1 -4 2 8] ans - (-1 -2 1 -4) (2 8), diff = 16

I gave him o(n^2) algorithm but he was not satisfied.

- LAP June 10, 2013 in United States | Report Duplicate | Flag |
Google Algorithm

 Email me when people comment.
*/

const testArr1 = [2, -1, -2, 1, -4, 2, 8];
const testArr2 = [10, -9, 8, -8, 9, -10];
const testArr3 = [1, 2, 6, -7, -9, 7, 8, 6];
const testArr4 = [4, -9, 1, 5, -9, 7, -8, 6, 5, 3, -9, 1, 0, 7, -2, -6];
const testArr5 = [1, 3, 1];

// first attempt, not done correctly

function maxDiffContiguousArrs(arr) {
    let diffsTable = new Array(arr.length - 1).fill(-Infinity)

    for (let i = 1; i < arr.length; i++) {
        let left = arr.slice(0, i);
        let right = arr.slice(i);

        let leftSum = left.reduce((accum, num) => {
            return accum + num;
        }, 0)
        let rightSum = right.reduce((accum, num) => {
            return accum + num;
        }, 0)

        let diff = Math.abs(leftSum - rightSum);
        diffsTable[i - 1] = diff;
    }
    return Math.max(...diffsTable);
}

// console.log(maxDiffContiguousArrs(testArr1))
// console.log(maxDiffContiguousArrs(testArr2))
// console.log(maxDiffContiguousArrs(testArr3))
// console.log(maxDiffContiguousArrs(testArr4))

// // // // // this one above didn't work because it's assuming all numbers have to be used // // // // //



// to do it with a time complexity of O(2n) I need to have two tables

function maxDiffContiguousArrs2(arr) {

    function helper(cb1, cb2) {
        let l2rTab = new Array(arr.length - 1);
        let r2lTab = new Array(arr.length - 1);

        let tabLen = r2lTab.length;

        l2rTab[0] = arr[0];
        r2lTab[tabLen - 1] = arr[arr.length - 1];

        
        for (let i = 1; i < tabLen; i++) {
            l2rTab[i] = cb1((arr[i] + l2rTab[i - 1]), arr[i])
            r2lTab[tabLen - i - 1] = cb2((arr[arr.length - 1 - i] + r2lTab[tabLen - i]), arr[arr.length - 1 - i]);
        }

        let maxDiff = -Infinity

        for (let i = 0; i < tabLen; i++) {
            maxDiff = Math.max(Math.abs(l2rTab[i] - r2lTab[i]), maxDiff)
        }
        return maxDiff
    }
    return Math.max(helper(Math.min, Math.max), helper(Math.max, Math.min))
}

console.log(maxDiffContiguousArrs2(testArr1)) // 16
console.log(maxDiffContiguousArrs2(testArr2)) // 18
console.log(maxDiffContiguousArrs2(testArr3)) // 37
console.log(maxDiffContiguousArrs2(testArr4)) // 27
console.log(maxDiffContiguousArrs2(testArr5)) // 3