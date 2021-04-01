# Largest Unique Number
# Given an array of integers A, return the largest integer that only occurs once.

# If no integer occurs once, return -1.


# Example 1:

# Input: [5,7,3,9,4,9,8,3,1]
# Output: 8
# Explanation:
# The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.
# Example 2:

# Input: [9,9,8,8]
# Output: -1
# Explanation:
# There is no number that occurs only once.

# Note:

# 1 <= A.length <= 2000
# 0 <= A[i] <= 1000

import collections


class Solution:
    def largestUniqueNumber(self, A) -> int:
        # def largestUniqueNumber(self, A: List[int]) -> int:
        max = -1
        count = collections.Counter(A)
        for key in count:
            cur = count[key]
            if cur == 1 and key > max:
                max = key
        return max


solution = Solution()

print(solution.largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])) # 8
print(solution.largestUniqueNumber([9, 9, 8, 8])) # -1
