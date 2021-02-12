# Valid Anagram
# Given two strings s and t , write a function to determine if t is an anagram of s.

# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false
# Note:
# You may assume the string contains only lowercase alphabets.

# Follow up:
# What if the inputs contain unicode characters? How would you adapt your solution to such case?
# from collections import defaultdict

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False

#         s_dict = dict()
#         t_dict = dict()
#         for i in range(len(s)):
#             s_cur = s[i]
#             t_cur = t[i]

#             if s_cur not in s_dict:
#                 s_dict[s_cur] = s.count(s_cur)
#             if t_cur not in t_dict:
#                 t_dict[t_cur] = t.count(t_cur)
            

#         return s_dict == t_dict

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        ltrs = set()

        for l in s:
            if l in ltrs:
                continue
            ltrs.add(l)

            if s.count(l) != t.count(l):
                return False

        return True


solution = Solution()

print (solution.isAnagram('car', 'rac'))
print (solution.isAnagram('asdf', 'sdfg'))
print (solution.isAnagram('apple', 'leppa'))
print (solution.isAnagram('', ''))
print (solution.isAnagram('aacc', 'ccac'))

# use a count or return