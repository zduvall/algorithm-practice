// Ambiguous Coordinates
// We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we
// removed all commas, decimal points, and spaces, and ended up with the string
// s.  Return a list of strings representing all possibilities for what our
// original coordinates could have been.

// Our original representation never had extraneous zeroes, so we never started
// with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other
// number that can be represented with less digits.  Also, a decimal point
// within a number never occurs without at least one digit occuring before it,
// so we never started with numbers like ".1".

// The final answer list can be returned in any order.  Also note that all
// coordinates in the final answer have exactly one space between them
// (occurring after the comma.)

// Example 1:
// Input: s = "(123)"
// Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
// Example 2:
// Input: s = "(00011)"
// Output:  ["(0.001, 1)", "(0, 0.011)"]
// Explanation:
// 0.0, 00, 0001 or 00.01 are not allowed.
// Example 3:
// Input: s = "(0123)"
// Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
// Example 4:
// Input: s = "(100)"
// Output: [(10, 0)]
// Explanation:
// 1.0 is not allowed.

// Note:

// 4 <= s.length <= 12.
// s[0] = "(", s[s.length - 1] = ")", and the other elements in s are digits.

/**
 * @param {string} s
 * @return {string[]}
 */

// two loops nested in one other
// first loop splits the string with a comma and space
// second loops splits the substrings with a decimal

const ambiguousCoordinates = function (s) {

  const ans = [];

  // outer for loop to create all combinations of numbers on left and right side
  for (let i = 2; i < s.length - 1; i++) {
    let lft = s.slice(1, i);
    let rght = s.slice(i, s.length - 1);

    //  add combinations with no decimals
    const ls = [lft];
    const rs = [rght];

    // inner for loop to find all combinations of left side with a decimal
    for (let i = 1; i < lft.length; i++) {
      temp1 = lft.slice(0, i);
      temp2 = lft.slice(i);
      ls.push(`${temp1}.${temp2}`);
    }

    // inner for loop to find all combinations of right side with a decimal
    for (let i = 1; i < rght.length; i++) {
      temp1 = rght.slice(0, i);
      temp2 = rght.slice(i, rght.length);
      rs.push(`${temp1}.${temp2}`);
    }

    // push in all valid answers that pass the regex
    for (let l of ls) {
      if (!/^([1-9]\d*|0\.\d*[1-9]|[1-9]\d*\.\d*[1-9]|0)$/i.test(l)) continue;
      for (let r of rs) {
        if (!/^([1-9]\d*|0\.\d*[1-9]|[1-9]\d*\.\d*[1-9]|0)$/i.test(r)) continue;
        ans.push(`(${l}, ${r})`);
      }
    }
  }
  return ans;
};

console.log(ambiguousCoordinates('(123)'));
console.log(ambiguousCoordinates('(00011)'));
console.log(ambiguousCoordinates('(0123)'));
console.log(ambiguousCoordinates('(100)'));
