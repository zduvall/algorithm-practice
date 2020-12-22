/* 
Smallest Range II
Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

Example 1:

Input: A = [1], K = 0
Output: 0
Explanation: B = [1]
Example 2:

Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]
Example 3:

Input: A = [1,3,6], K = 3
Output: 3
Explanation: B = [4,6,3]
 

Note:

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000
*/

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */

 // had to watch a video to get this

const smallestRangeII = function (A, K) {
    if (A.length === 1) return 0;

    A.sort((a, b) => a - b);
    let last = A.length - 1;
    let res = A[last] - A[0];

    for (let i = 0; i < last; i++) {
        let min = Math.min(A[0] + K, A[i + 1] - K);
        let max = Math.max(A[i] + K, A[last] - K);
        res = Math.min(max - min, res);
    }
    return res;
}

console.log(smallestRangeII([1, 3, 6], 3)) // 3
console.log(smallestRangeII([7, 8, 8], 5)) // 1


// below was a fail
const smallestRangeIIFAIL1 = function (A, K) {
    if (A.length === 1) return 0;
    let max = -Infinity;
    let min = Infinity;

    A.forEach(num => {
        if (num > max) max = num;
        if (num < min) min = num;
    })

    return Math.min(
        Math.abs(max + K - (min + K)),
        Math.abs(max - K - (min - K)),
        Math.abs(max - K - (min + K)),
        Math.abs(max + K - (min - K)),
    )
}

// below was a fail
const smallestRangeIIFAIL = function (A, K) {
    if (A.length === 1) return 0;

    let sum = 0;
    let result = [];
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        sum += num;
    }

    const avg = sum / A.length;

    for (let i = 0; i < A.length; i++) {
        let add = A[i] + K, sub = A[i] - K;
        let choice = Math.abs(avg - add) < Math.abs(avg - sub) ? add : sub;
        result.push(choice);
        if (choice > max) max = choice;
        if (choice < min) min = choice;
    }
    return max - min;
};
