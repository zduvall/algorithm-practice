# Minimum Operations to Make Array Equal
# You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid
# values of i (i.e. 0 <= i < n).

# In one operation, you can select two indices x and y where 0 <= x, y < n and
# subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y]
# += 1). The goal is to make all the elements of the array equal. It is
# guaranteed that all the elements of the array can be made equal using some
# operations.

# Given an integer n, the length of the array. Return the minimum number of
# operations needed to make all the elements of arr equal.

# Example 1:

# Input: n = 3
# Output: 2
# Explanation: arr = [1, 3, 5]
# First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
# In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].

# Example 2:

# Input: n = 6
# Output: 9

# My examples:
# [1, 3]                                    2 => 1
# [1, 3, 5]                                 3 => 2
# [1, 3, 5, 7]                              4 => 4
# [1, 3, 5, 7, 9]                           5 => 6
# [1, 3, 5, 7, 9, 11]                       6 => 9
# [1, 3, 5, 7, 9, 11, 13]                   7 => 12
# [1, 3, 5, 7, 9, 11, 13, 15]               8 => 16
# [1, 3, 5, 7, 9, 11, 13, 15, 17]           9 => 20

# Patterns: for evens add up all even numbers prior to i then + 1
#           for odds add up all even numbers prior


# class Solution:
#     def minOperations(self, n: int) -> int:
#         return sum(range(n)[1::2]) if n % 2 == 0 else sum(range(n)[::2])


# class Solution:
#     def minOperations(self, n: int) -> int:
#         return (n // 2) ** 2 if n % 2 == 0 else (n // 2) * (n - n // 2)

# class Solution:
#     def minOperations(self, n: int) -> int:
#         return n**2 // 4 if n % 2 == 0 else (n // 2) * (n - n // 2)

# class Solution:
#     def minOperations(self, n: int) -> int:
#         return n**2 // 4 if n % 2 == 0 else 2 * n**2 // 4 - n**2 // 4

# both sides can simplify to the same thing, which becomes just this below

class Solution:
    def minOperations(self, n: int) -> int:
        return n**2 // 4


solution = Solution()

print(solution.minOperations(2))
print(solution.minOperations(3))
print(solution.minOperations(4))
print(solution.minOperations(5))
print(solution.minOperations(6))
print(solution.minOperations(7))

# [1, 3, 5, 7]
# [2, 3, 5, 6]
# [2, 4, 4, 6]
# [3, 4, 4, 5]
# [4, 4, 4, 4]

# [1, 3, 5, 7, 9, 11]
# [2, 3, 5, 7, 9, 10]
# [3, 3, 5, 7, 9, 9]
# [3, 3, 6, 6, 9, 9]
# [4, 3, 6, 6, 8, 9]
# [4, 4, 6, 6, 8, 8]
# [5, 4, 6, 6, 7, 8]
# [5, 5, 6, 6, 7, 7]
# [6, 5, 6, 6, 6, 7]
# [6, 6, 6, 6, 6, 6]
