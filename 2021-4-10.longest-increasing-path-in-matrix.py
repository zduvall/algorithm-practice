# Longest Increasing Path in a Matrix
# Given an m x n integers matrix, return the length of the longest increasing
# path in matrix.

# From each cell, you can either move in four directions: left, right, up, or
# down. You may not move diagonally or move outside the boundary (i.e.,
# wrap-around is not allowed).

# Example 1:
# Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
# Output: 4
# Explanation: The longest increasing path is [1, 2, 6, 9].

# Example 2:
# Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
# Output: 4
# Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is
# not allowed.

# Example 3:
# Input: matrix = [[1]]
# Output: 1

# Constraints:

# m == matrix.length
# n == matrix[i].length
# 1 <= m, n <= 200
# 0 <= matrix[i][j] <= 231 - 1

from functools import lru_cache


class Solution:
    def longestIncreasingPath(self, M) -> int:
        # def longestIncreasingPath(self, M: List[List[int]]) -> int:
        ylen, xlen = len(M), len(M[0])

        @lru_cache(maxsize=None)
        def dfs(y, x):
            val = M[y][x]
            return 1 + max(
                dfs(y + 1, x) if y < ylen - 1 and val > M[y + 1][x] else 0,
                dfs(y - 1, x) if y > 0 and val > M[y - 1][x] else 0,
                dfs(y, x + 1) if x < xlen - 1 and val > M[y][x + 1] else 0,
                dfs(y, x - 1) if x > 0 and val > M[y][x - 1] else 0,
            )

        return max(dfs(y, x) for y in range(ylen) for x in range(xlen))


solution = Solution()
print(solution.longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]])) # 4
print(solution.longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])) # 4
print(solution.longestIncreasingPath([[1]])) # 1
