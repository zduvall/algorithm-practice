// https://leetcode.com/explore/featured/card/top-interview-questions-easy/96/sorting-and-searching/774/

/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first 
bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version 
is bad. Implement a function to find the first bad version. You should minimize 
the number of calls to the API.

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1


Constraints:

1 <= bad <= n <= 231 - 1
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function checker(n, lowHi = [0, n]) {
        // if (vers[1] === 'bad') return 1
        if (lowHi[1] - lowHi[0] === 1) return lowHi[1]
        if (n === 1) return 1
        let mid = Math.ceil((lowHi[0] + lowHi[1]) / 2);
        if (isBadVersion(mid)) {
            lowHi[1] = mid;
        } else {
            lowHi[0] = mid;
        }
        return checker(mid, lowHi);
    };

};





// Below is what I wrote so I could test this here. See comments below for more instructions

function isBadVersion(n) {
    return n >= 2
}

// Passed with recursion
function checker(n, lowHi = [0, n]) {
    // if (vers[1] === 'bad') return 1
    if (lowHi[1] - lowHi[0] === 1) return lowHi[1]
    if (n === 1) return 1
    let mid = Math.ceil((lowHi[0] + lowHi[1]) / 2);
    if (isBadVersion(mid)) {
        lowHi[1] = mid;
    } else {
        lowHi[0] = mid;
    }
    return checker(mid, lowHi);
};

// // note whatever I have to let right (in the comment below) needs to be at 
// the end of the isBadVersion return line

// console.log(checker(10)); // 8
// console.log(checker(1)); // 1
// console.log(checker(5)); // 5
// console.log(checker(400)); // 300
console.log(checker(2)); // 2







// // And here's a non-recursive solution. I had to check their solution

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1, right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};