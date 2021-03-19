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


# class Solution:
#     def isIsomorphic(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
#         mapDict = {}
#         for i in range(0, len(s)):
#             if (s[i] in mapDict and mapDict[s[i]] != t[i]):
#                 return False
#             else:
#                 mapDict[s[i]] = t[i]
#         vals = list(mapDict.values())
#         for val in vals:
#             if vals.count(val) > 1:
#                 return False
#         return True


# class Solution:
#     def isIsomorphic(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
#         dct1 = {}
#         dct2 = {}
#         for i in range(0, len(s)):
#             s_el = s[i]
#             t_el = t[i]
#             if (s_el in dct1 and dct1[s_el] != t_el) or (
#                 t_el in dct2 and dct2[t_el] != s_el
#             ):
#                 return False
#             else:
#                 dct1[s_el] = t_el
#                 dct2[t_el] = s_el
#         return True

class Solution:
    def isIsomorphic(self, s, t):
        return len(set(zip(s, t))) == len(set(s)) == len(set(t))


solution = Solution()


print(solution.isIsomorphic("egg", "add"))  # True
print(solution.isIsomorphic("paper", "title"))  # True
print(solution.isIsomorphic("kick", "side"))  # False
print(solution.isIsomorphic("badc", "baba"))  # False
