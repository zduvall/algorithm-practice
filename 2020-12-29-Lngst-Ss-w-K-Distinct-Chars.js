/**
Given a string s and an integer k, return the length of the longest substring 
of s that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: The substring is "ece" with length 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: The substring is "aa" with length 2.

Constraints:

1 <= s.length <= 5 * 104
0 <= k <= 50
 */

/**
* @param {string} s
* @param {number} k
* @return {number}
*/

// had to look up this solution to use a sliding window and map. Don't completely understand it.

const lengthOfLongestSubstringKDistinct = function (s, k) {
    if (!s || k === 0) return 0;

    const map = new Map();
    let start = 0, end = 0, maxLen = 0;

    while (end <= s.length) {

        if (map.size === k && !map.has(s[end]) || end === s.length) {
            maxLen = Math.max(maxLen, end - start);

            while (map.size === k) {
                const count = map.get(s[start]);

                if (count - 1 === 0) map.delete(s[start]);
                else map.set(s[start], count - 1);
                start++;
            }
        }

        if (map.has(s[end])) map.set(s[end], map.get(s[end]) + 1);
        else map.set(s[end], 1);

        end++;
    }
    return maxLen;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3
console.log(lengthOfLongestSubstringKDistinct("aa", 1)); // 2

// this solution works, but is super slow

const lengthOfLongestSubstringKDistinct2 = function (s, k) {
    let maxLen = 0;

    for (let strtIdx = 0; strtIdx < s.length; strtIdx++) {
        let distinctChars = new Set(s[strtIdx]);
        let curIdx = strtIdx;
        while (distinctChars.size <= k && curIdx < s.length) {
            let numChars = curIdx - strtIdx + 1;
            if (numChars > maxLen) maxLen = numChars;
            curIdx++;
            distinctChars.add(s[curIdx]);
        }
    }
    return maxLen;
};

console.log(lengthOfLongestSubstringKDistinct2("eceba", 2)); // 3
console.log(lengthOfLongestSubstringKDistinct2("aa", 1)); // 2