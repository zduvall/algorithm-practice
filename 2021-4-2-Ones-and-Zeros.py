# Ones and Zeroes
# You are given an array of binary strings strs and two integers m and n.

# Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

# A set x is a subset of a set y if all elements of x are also elements of y.

# Example 1:

# Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
# Output: 4
# Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
# Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
# {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
# Example 2:

# Input: strs = ["10","0","1"], m = 1, n = 1
# Output: 2
# Explanation: The largest subset is {"0", "1"}, so the answer is 2.

# Constraints:

# 1 <= strs.length <= 600
# 1 <= strs[i].length <= 100
# strs[i] consists only of digits '0' and '1'.
# 1 <= m, n <= 100

# /**
#  * @param {string[]} strs
#  * @param {number} m
#  * @param {number} n
#  * @return {number}
#  */

# // convert array of strings into an object with {m: #, n: #} (m for 0 and n for 1)

class Solution:
    def findMaxForm(self, strs, M, N) -> int:
    # def findMaxForm(self, strs: List[str], M: int, N: int) -> int:
        tab = [[0 for _ in range(N+1)] for _ in range(M+1)]
        for s in strs:
            zeros = s.count("0")
            ones = len(s) - zeros
            for i in range(M, zeros - 1, -1):
                for j in range(N, ones - 1, -1):
                    tab[i][j] = max(tab[i][j], tab[i-zeros][j-ones] + 1)
        return tab[M][N]

solution = Solution()

print(solution.findMaxForm(["10","0001","111001","1","0"], 5, 3))
print(solution.findMaxForm(["10","0","1"], 1, 1))