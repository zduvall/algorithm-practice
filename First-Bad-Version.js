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
    return function checker(n, vers = { start: n }) {
        if (vers[1] === 'bad') return 1
        // let mid = Math.ceil(n / 2);
        vers[n] = isBadVersion(n) ? 'bad' : 'good';
        if (vers[n] && vers[n - 1] && vers[n] !== vers[n - 1]) return n;
        if (vers[n] && vers[n + 1] && vers[n] !== vers[n + 1]) return n + 1;
        return vers[n] === 'bad' ?
            checker(Math.ceil(n / 2), vers) : checker(Math.ceil((n / 2 + vers.start / 2)), vers);
    };

};



// I made this up below to pretend to be the api they're sending into the function.
// I think I got it to work, but leet code is showing I only passed 11. At that point
// it's saying my code takes too long
function isBadVersion(n) {
    // let arr = [null, false, false, false, false, false, false, false, true, true, true]
    // let arr = [null, true]
    let arr = [null, false, false, false, true, true]
    // let arr = [null, false, true]
    return arr[n]
}

function checker(n, vers = { start: n }) {
    if (vers[1] === 'bad') return 1
    // let mid = Math.ceil(n / 2);
    vers[n] = isBadVersion(n) ? 'bad' : 'good';
    if (vers[n] && vers[n - 1] && vers[n] !== vers[n - 1]) return n;
    if (vers[n] && vers[n + 1] && vers[n] !== vers[n + 1]) return n + 1;
    return vers[n] === 'bad' ?
        checker(Math.ceil(n / 2), vers) : checker(Math.ceil((n / 2 + vers.start / 2)), vers);
};

// console.log(checker(10)); // 8
// console.log(checker(1)); // 1
console.log(checker(5)); // 5
// console.log(checker(2)); // 2






// // Okay, here's a non-recursive attempt. I had to check their solution

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