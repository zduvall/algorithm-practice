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


console.log(canPermutePalindrome('code')) // false
console.log(canPermutePalindrome('aab')) // true
console.log(canPermutePalindrome('carerac')) // false


// after looking online, I came up with this, and then the following one; however,
// neigher were faster than my first one:

const canPermutePalindrome2 = (s) => {
  let oddCnt = 0;
  let ltrCnt = {}
  
  for (ltr of s) {
    ltrCnt[ltr] = ltrCnt[ltr] ? ltrCnt[ltr] + 1 : 1
    oddCnt = ltrCnt[ltr] % 2 === 0 ? oddCnt - 1 : oddCnt + 1
  }
  return oddCnt <= 1
};

console.log(canPermutePalindrome2('code')) // false
console.log(canPermutePalindrome2('aab')) // true
console.log(canPermutePalindrome2('carerac')) // false

// incorporating map

const canPermutePalindrome3 = (s) => {
  let oddCnt = 0;
  let ltrCnt = new Map()

  for (ltr of s) {
    if (ltrCnt.has(ltr)) {
      ltrCnt.set(ltr, ltrCnt.get(ltr) + 1)
    } else {
      ltrCnt.set(ltr, 1)
    }
    oddCnt = ltrCnt.get(ltr) % 2 === 0 ? oddCnt - 1 : oddCnt + 1
  }
  return oddCnt <= 1
};

console.log(canPermutePalindrome3('code')) // false
console.log(canPermutePalindrome3('aab')) // true
console.log(canPermutePalindrome3('carerac')) // false