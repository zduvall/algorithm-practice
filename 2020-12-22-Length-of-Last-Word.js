/* 
58. Length of Last Word
Easy

Share
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.



Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0


Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
*/

const lengthOfLastWord = function (s) {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (count > 0 && s[i] === ' ') break;
        if (s[i] !== ' ') count++;
    }
    return count
};

// const lengthOfLastWord = function (s) {
//     let arr = s.split(" ").filter(el => el !== '');
//     if (arr.length) return arr[arr.length - 1].length;
//     return 0
// };

console.log(lengthOfLastWord('This is a test')); // 4
console.log(lengthOfLastWord('test')); // 4
console.log(lengthOfLastWord('a    ')); // 1
console.log(lengthOfLastWord(' '));