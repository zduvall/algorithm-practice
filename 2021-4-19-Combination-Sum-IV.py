# Combination Sum IV
# Given an array of distinct integers nums and a target integer target, return
# the number of possible combinations that add up to target.

# The answer is guaranteed to fit in a 32-bit integer.

# Example 1:

# Input: nums = [1,2,3], target = 4
# Output: 7
# Explanation:
# The possible combination ways are:
# (1, 1, 1, 1)
# (1, 1, 2)
# (1, 2, 1)
# (1, 3)
# (2, 1, 1)
# (2, 2)
# (3, 1)
# Note that different sequences are counted as different combinations.
# Example 2:

# Input: nums = [9], target = 3
# Output: 0

# Constraints:

# 1 <= nums.length <= 200
# 1 <= nums[i] <= 1000
# All the elements of nums are unique.
# 1 <= target <= 1000


# Follow up: What if negative numbers are allowed in the given array? How does
# it change the problem? What limitation we need to add to the question to allow
# negative numbers?


# w/ Top-Down DP:
class Solution:
    def combinationSum4(self, nums, target) -> int:
    # def combinationSum4(self, nums: List[int], target: int) -> int:
        dp = [0] * (target + 1)
        dp[0] = 1
        for i in range(1, target + 1):
            for num in nums:
                if num <= i:
                    dp[i] += dp[i - num]
                # print(dp)
        return dp[target]


# w/ Bottom-Up DP:
class Solution2:
    def combinationSum4(self, nums, target) -> int:
    # def combinationSum4(self, nums: List[int], target: int) -> int:
        dp = [0] * (target + 1)
        dp[0] = 1
        for i in range(target):
            if not dp[i]:
                continue
            for num in nums:
                if num + i <= target:
                    dp[i + num] += dp[i]
                # print(dp)
        return dp[target]


solution = Solution2()

print(solution.combinationSum4([1,2,3], 4))