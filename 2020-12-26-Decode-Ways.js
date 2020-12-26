/**
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.

Example 1:

Input: s = "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: s = "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
Example 3:

Input: s = "0"
Output: 0
Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
Example 4:

Input: s = "1"
Output: 1

Constraints:

1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
 */

/**
* @param {string} s
* @return {number}
*/

const numDecodings = function (s, i = 0) {
    if (i === s.length) return 1;

    let oneNum = s[i] !== '0' ? Number(s[i]) : false;
    let twoNums = s[i + 1] && s[i] !== '0' ? Number(s[i] + s[i + 1]) : false;

    let take1 = (1 <= oneNum && oneNum <= 26) ? numDecodings(s, i + 1) : 0;
    let take2 = (1 <= twoNums && twoNums <= 26) ? numDecodings(s, i + 2) : 0;

    return take1 + take2;
};

// console.log(numDecodings('12')); // 2
// console.log(numDecodings('226')); // 3
// console.log(numDecodings('0')); // 0
// console.log(numDecodings('1')); // 1
// console.log(numDecodings('27')); // 1
// console.log(numDecodings('2101')); // 1
console.log(numDecodings('111111111111111111111111111111111111111111111')); // 1

// recursion took too long... I think I need to use tabulation