// Longest String Chain
// Given a list of words, each word consists of English lowercase letters.

// Let's say word1 is a predecessor of word2 if and only if we can add exactly
// one letter anywhere in word1 to make it equal to word2. For example, "abc" is
// a predecessor of "abac".

// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1,
// where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3,
// and so on.

// Return the longest possible length of a word chain with words chosen from the
// given list of words.

// Example 1:

// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chain is "a","ba","bda","bdca".
// Example 2:

// Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of English lowercase letters.

const longestStrChain = function (words) {
  let memo = {};
  let ans = 0

  words.sort((a, b) => a.length - b.length);

  for (let word of words) {
    let max = 0;
    for (let i = 0; i < word.length; i++) {
      let temp = word.slice(0, i) + word.slice(i + 1);
      max = Math.max(max, (memo[temp] || 0) + 1);
    }
    memo[word] = max
    ans = Math.max(ans, max)
  }
  return ans
};

console.log(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])); // 4
console.log(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])); // 5

// const longestStrChain = function (words) {
//   let memo = {};

//   words = words.sort((a, b) => a.length - b.length);

//   for (let word of words) {
//     let longest = 0;
//     for (let i = 0; i < word.length; i++) {
//       let pre = word.slice(0, i) + word.slice(i + 1);

//       longest = Math.max(longest, (memo[pre] || 0) + 1);
//     }

//     memo[word] = longest;
//   }

//   return Math.max(...Object.values(memo));
// };
