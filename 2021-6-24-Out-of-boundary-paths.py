# Out of Boundary Paths
# There is an m x n grid with a ball. The ball is initially at the position
# [startRow, startColumn]. You are allowed to move the ball to one of the four
# adjacent cells in the grid (possibly out of the grid crossing the grid
# boundary). You can apply at most maxMove moves to the ball.

# Given the five integers m, n, maxMove, startRow, startColumn, return the
# number of paths to move the ball out of the grid boundary. Since the answer
# can be very large, return it modulo 109 + 7.

# Example 1:
# Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
# Output: 6

# Example 2:
# Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
# Output: 12

# Constraints:

# 1 <= m, n <= 50
# 0 <= maxMove <= 50
# 0 <= startRow < m
# 0 <= startColumn < n


from functools import cache


class Solution:
    def findPaths(
        self, m: int, n: int, maxMove: int, startRow: int, startColumn: int
    ) -> int:
        @cache
        def solve(i, j, maxMove):
            if not (0 <= i < m and 0 <= j < n):
                return 1

            maxMove -= 1

            if maxMove < 0:
                return 0

            return (
                solve(i - 1, j, maxMove)
                + solve(i + 1, j, maxMove)
                + solve(i, j - 1, maxMove)
                + solve(i, j + 1, maxMove)
            )

        return solve(startRow, startColumn, maxMove) % 1000000007


solution = Solution()

print(solution.findPaths(m=2, n=2, maxMove=2, startRow=0, startColumn=0))  # 6
print(solution.findPaths(m=1, n=3, maxMove=3, startRow=0, startColumn=1))  # 12
print(solution.findPaths(m=40, n=40, maxMove=100, startRow=0, startColumn=1))  # 50909076
