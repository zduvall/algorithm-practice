# Missing Number In Arithmetic Progression
# In some array arr, the values were in arithmetic progression: the values
# arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.

# Then, a value from arr was removed that was not the first or last value in
# the array.

# Return the removed value.

# Example 1:

# Input: arr = [5,7,11,13]
# Output: 9
# Explanation: The previous array was [5,7,9,11,13].
# Example 2:

# Input: arr = [15,13,12]
# Output: 14
# Explanation: The previous array was [15,14,13,12].

# Constraints:

# 3 <= arr.length <= 1000
# 0 <= arr[i] <= 10^5

# tabulation for diffs
# object to store count of diffs
# variable for diff that is smallest absolute value
# variable for index of diff that is smallest absulte value

class Solution:
    def missingNumber(self, arr) -> int:
    # def missingNumber(self, arr: List[int]) -> int:
      length = len(arr)
      diff = (arr[length - 1] - arr[0]) / length
      if diff == 0:
        return arr[0]
      for i in range(1, length):
        if arr[i] - arr[i-1] != diff:
          return int(arr[i] - diff)

class Solution2:
    def missingNumber(self, arr) -> int:
    # def missingNumber(self, arr: List[int]) -> int:
      return ((len(arr) + 1) * (arr[0] + arr[len(arr) - 1]) / 2) - sum(arr)


solution = Solution2()


print(solution.missingNumber([5, 7, 11, 13])) # 9
print(solution.missingNumber([15, 13, 12])) # 14
