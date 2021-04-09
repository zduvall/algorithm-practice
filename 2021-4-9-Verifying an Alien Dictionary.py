# Verifying an Alien Dictionary
# In an alien language, surprisingly they also use english lowercase letters,
# but possibly in a different order. The order of the alphabet is some
# permutation of lowercase letters.

# Given a sequence of words written in the alien language, and the order of the
# alphabet, return true if and only if the given words are sorted
# lexicographicaly in this alien language.

# Example 1:

# Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
# Output: true
# Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
# Example 2:

# Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
# Output: false
# Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
# Example 3:

# Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
# Output: false
# Explanation: The first three characters "app" match, and the second string is
# shorter (in size.) According to lexicographical rules "apple" > "app", because
# 'l' > '∅', where '∅' is defined as the blank character which is less than any
# other character (More info).

# Constraints:

# 1 <= words.length <= 100
# 1 <= words[i].length <= 20
# order.length == 26
# All characters in words[i] and order are English lowercase letters.


class Solution:
    def isAlienSorted(self, words: [str], order: str) -> bool:
        dct = {y: x + 1 for x, y in enumerate(order)}

        order_dict = {}

        for i, word in enumerate(words):
            for j, ltr in enumerate(word):
                cur_val = dct[ltr]
                if j not in order_dict:
                    order_dict[j] = cur_val
                elif cur_val > order_dict[j]:
                    order_dict[j] = cur_val
                    break
                elif j == len(word) - 1 and len(word) < len(words[i -1]):
                    return False
                elif cur_val == order_dict[j]:
                        continue
                else:
                    return False

        return True


solution = Solution()

print(solution.isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"))      # => True
print(solution.isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"))   # => False
print(solution.isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"))           # => False
print(solution.isAlienSorted(["hello", "hello"], "abcdefghijklmnopqrstuvwxyz"))         # => True
print(solution.isAlienSorted(["apap","app"], "abcdefghijklmnopqrstuvwxyz"))             # => True
