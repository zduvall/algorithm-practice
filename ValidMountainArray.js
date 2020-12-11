// https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/570/week-2-december-8th-december-14th/3561/

/* Valid Mountain Array
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < A[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

[0, 2, 3, 4, 5, 2, 1, 0] // true
[0, 2, 3, 3, 4, 5, 1, 0] // false (because of two 3's in a row)

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true


Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104
*/



let arr = [5, 4, 3, 2, 1]

// Time complexity is linear
function validMountainArray(arr) {
    const length = arr.length
    if (length < 3 || arr[0] >= arr[1]) return false;

    let i = 1;
    for (i; i < length; i++) {
        if (i === length - 1 || arr[i] === arr[i + 1]) return false;
        if (arr[i] > arr[i + 1]) break;
    }

    for (i; i < length; i++) {
        if (arr[i] <= arr[i + 1]) return false;
    }
    return true;
}

console.log(validMountainArray(arr));


// another option that's also linear, didn't seem to necessarily perform better in leetCode
function validMountainArray2(arr) {
    const length = arr.length
    if (length < 3 || arr[0] >= arr[1]) return false;

    let leftPeak = 0, rightPeak = length - 1;
    let oldLeftPeak, oldRightPeak;

    while (oldLeftPeak !== leftPeak || oldRightPeak !== rightPeak) {
        oldLeftPeak = leftPeak, oldRightPeak = rightPeak;

        let nextFromLeftPeak = leftPeak + 1, nextFromRightPeak = rightPeak - 1

        if (arr[leftPeak] < arr[nextFromLeftPeak]) leftPeak = nextFromLeftPeak;
        if (arr[rightPeak] < arr[nextFromRightPeak]) rightPeak = nextFromRightPeak;
    }
    return leftPeak === rightPeak && (rightPeak !== 0 && leftPeak !== length - 1)
}

console.log(validMountainArray2(arr));
