/*
Given a string, determine if a permutation of the string could form a palindrome.

Example 1:

Input: "code"
Output: false
Example 2:

Input: "aab"
Output: true
Example 3:

Input: "carerac"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */

const canPermutePalindrome = function (s) {

  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    const ltr = s[i];

    if (map.has(ltr)) {
      map.set(ltr, map.get(ltr) + 1)
    } else {
      map.set(ltr, 1)
    }
  }

  let oddNumOfLtrs = 0

  for (ltr of map) {
    if (ltr[1] % 2 !== 0) oddNumOfLtrs++
  }

  return oddNumOfLtrs <= 1
};

// after looking online, I came up with this:

console.log(canPermutePalindrome('code')) // false
console.log(canPermutePalindrome('aab')) // true
console.log(canPermutePalindrome('carerac')) // false