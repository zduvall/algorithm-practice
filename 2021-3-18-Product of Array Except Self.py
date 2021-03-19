# Product of Array Except Self

# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# Example 1:

# Input: nums = [1,2,3,4]
# Output: [24,12,8,6]
# Example 2:

# Input: nums = [-1,1,0,-3,3]
# Output: [0,0,9,0,0]

# Constraints:

# 2 <= nums.length <= 105
# -30 <= nums[i] <= 30
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

# Follow up:

# Could you solve it in O(n) time complexity and without using division?
# Could you solve it with O(1) constant space complexity? (The output array does not count as extra space for space complexity analysis.)


############## Understand: ##############
# - return an array where each number is equal to the product of all other numbers in the original array except the original one
############## Plan: ##############
# - iterate once from left to right multiplying all the numbers as we go and set the current output at that i equal to the current product
# - do the same thing going right to left
# - return the array
############## Code: ##############


# class Solution:
#     def productExceptSelf(self, nums):
#         # def productExceptSelf(self, nums: List[int]) -> List[int]:
#         res = [1] * len(nums)
#         prd = 1

#         for i in range(len(nums)):
#             res[i] *= prd
#             prd *= nums[i]

#         prd = 1

#         for i in range(len(nums) -1, -1, -1):
#             res[i] *= prd
#             prd *= nums[i]

#         return res

class Solution:
    def productExceptSelf(self, nums):
        # def productExceptSelf(self, nums: List[int]) -> List[int]:
        
        length = len(nums)

        res = [1] * length
        prd = prd2 = 1

        for i in range(length):
            res[i] *= prd
            prd *= nums[i]

            rghtIdx = length - 1 - i
            res[rghtIdx] *= prd2
            prd2 *= nums[rghtIdx]

        return res


solution = Solution()

print(solution.productExceptSelf([1, 2, 3, 4, 5]))


############## Refactor: ##############