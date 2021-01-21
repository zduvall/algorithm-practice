/**
 * 
 * Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 * @param {string} s
 * @return {boolean}
 */

// the commented out lines didn't seem to optimize it at all... probably because
// it makes it faster for bad strings, but longer for good strings.

const isValid = function (s) {

    // if (s.length % 2 !== 0) return false

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        let top = stack[stack.length - 1];

        if ((top === "(" && cur === ")") ||
            (top === "{" && cur === "}") ||
            (top === "[" && cur === "]")) {
            stack.pop();
        } else {
            stack.push(cur);
        }

        // if (stack.length > s.length / 2) return false;
    }

    return !stack.length;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true