// Longest Valid Parentheses
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:
// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

// Example 2:
// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".

// Example 3:
// Input: s = ""
// Output: 0

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (str) {
  let stack = [-1]; // start out with one extra that doesn't count (could be any character)
  let max = 0;

  for (let i = 0; i < str.length; i++)
    if (str[i] === '(') {
      stack.push(i);
    } else if (stack.length === 1) {
      stack[0] = i;
    } else {
      stack.pop();
      max = Math.max(max, i - stack[stack.length - 1]);
    }
  return max;
};

console.log(longestValidParentheses('(()'));
console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses(''));
