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
    return diffsTable;
}

console.log(maxDiffContiguousArrs([2, -1, -2, 1, -4, 2, 8]))
// this one above didn't work because it's assuming all numbers have to be used

// to do it with a time complexity of O(2n) I need to have two tables

