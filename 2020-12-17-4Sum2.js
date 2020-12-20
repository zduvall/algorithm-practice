/**
 * Given four lists A, B, C, D of integer values, compute how many tuples 
 * (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. 
All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be 
at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

 */

/**
* @param {number[]} A
* @param {number[]} B
* @param {number[]} C
* @param {number[]} D
* @return {number}
*/


const A = [1, 2]
const B = [-2, -1]
const C = [-1, 2]
const D = [0, 2]

// time complexity = O(n + n^2) --> quadratic  (note my solution below out performed 
// this one using a map rather than an object)
// space complexity = n^2 --> quadratic

const fourSumCount = function (A, B, C, D) {
    const hash = {};
    const cd = [];
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            let diff = 0 - (A[i] + B[j])
            if (hash[diff]) {
                hash[diff]++;
            } else {
                hash[diff] = 1;
            }
            cd.push(C[i] + D[j]);
        }
    }

    for (let i = 0; i < cd.length; i++) {
        let cur = cd[i];
        if (cur in hash) count += hash[cur];
    }

    return count;
};

console.log(fourSumCount(A, B, C, D));


// here I did it using a map object. This out performed my other answer in leetcode.

const fourSumCount = function (A, B, C, D) {
    const map = new Map();
    const cd = [];
    let count = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            let diff = 0 - (A[i] + B[j])
            if (map.has(diff)) {
                map.set(diff, map.get(diff) + 1)
            } else {
                map.set(diff, 1);
            }
            cd.push(C[i] + D[j]);
        }
    }

    for (let i = 0; i < cd.length; i++) {
        let cur = cd[i];
        if (map.has(cur)) count += map.get(cur);
    }

    return count;
};