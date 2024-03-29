//  Determine if String Halves Are Alike
// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
// Example 3:

// Input: s = "MerryChristmas"
// Output: false
// Example 4:

// Input: s = "AbCdEfGh"
// Output: true

// Constraints:

// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

/**
 * @param {string} s
 * @return {boolean}
 */
// const halvesAreAlike = function (s) {
//   const vowels = {
//     a: 1,
//     e: 1,
//     i: 1,
//     o: 1,
//     u: 1,
//     A: 1,
//     E: 1,
//     I: 1,
//     O: 1,
//     U: 1,
//   };

//   let half1 = 0;
//   let half2 = 0;
//   const length = s.length;

//   for (let i = 0; i < length / 2; i++) {
//     // if (s[i] in vowels) half1++;
//     // if (s[length - i - 1] in vowels) half2++;
//     half1 += vowels[s[i]] || 0;
//     half2 += vowels[s[length - i - 1]] || 0;
//   }

//   return half1 === half2;
// };
const halvesAreAlike = function (s) {
  const vowels = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };

  let sum = 0;
  const length = s.length;

  for (let i = 0; i < length / 2; i++) {
    sum += vowels[s[i]] || 0;
    sum -= vowels[s[length - i - 1]] || 0;
  }

  return sum === 0;
};

console.log(halvesAreAlike('book')); // => True
console.log(halvesAreAlike('textbook')); // => False
console.log(halvesAreAlike('MerryChristmas')); // => False
console.log(halvesAreAlike('AbCdEfGh')); // => True
