# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to
# get t.

# All occurrences of a character must be replaced with another character while
# preserving the order of characters. No two characters may map to the same
# character, but a character may map to itself.

# Example 1:

# Input: s = "egg", t = "add"
# Output: true
# Example 2:

# Input: s = "foo", t = "bar"
# Output: false
# Example 3:

# Input: s = "paper", t = "title"
# Output: true

# Constraints:

# 1 <= s.length <= 5 * 104
# t.length == s.length
# s and t consist of any valid ascii character.


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        mapDict = {}
        for i in range(0, len(s)):
            if s[i] in mapDict and mapDict[s[i]] != t[i]:
                return False
            else:
                mapDict[s[i]] = t[i]
        vals = list(mapDict.values())
        for val in vals:
            if vals.count(val) > 1:
                return False
        return True


solution = Solution()


print(solution.isIsomorphic("egg", "add"))  # True
print(solution.isIsomorphic("paper", "title"))  # False
print(solution.isIsomorphic("kick", "side"))  # True
print(solution.isIsomorphic("badc", "baba"))  # False
