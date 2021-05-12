# Range Sum Query 2D - Immutable
# Given a 2D matrix matrix, handle multiple queries of the following type:

# Calculate the sum of the elements of matrix inside the rectangle defined by
# its upper left corner (row1, col1) and lower right corner (row2, col2).
# Implement the NumMatrix class:

# NumMatrix(int[][] matrix) Initializes the object with the integer matrix
# matrix.
# int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the
# elements of matrix inside the rectangle defined by its upper left corner
# (row1, col1) and lower right corner (row2, col2).


# Example 1:


# Input
# [["NumMatrix"],
# "sumRegion", "sumRegion", "sumRegion"]
# [[[[3, 0, 1, 4, 2],
#    [5, 6, 3, 2, 1],
#    [1, 2, 0, 1, 5],
#    [4, 1, 0, 1, 7],
#    [1, 0, 3, 0, 5]]],
# [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]

# Output
# [null, 8, 11, 12]

# Explanation
# NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
# numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
# numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
# numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)


# Constraints:

# m == matrix.length
# n == matrix[i].length
# 1 <= m, n <= 200
# -105 <= matrix[i][j] <= 105
# 0 <= row1 <= row2 < m
# 0 <= col1 <= col2 < n
# At most 104 calls will be made to sumRegion.


# my original solutions took too long. see here: https://leetcode.com/problems/range-sum-query-2d-immutable/discuss/525902/Easy-understand-python-dynamic-programming-solution-O(m*n)

class NumMatrix:
    def __init__(self, matrix):
        # def __init__(self, matrix: List[List[int]]):
        if not matrix or not matrix[0]:
            return None
        row = len(matrix)
        col = len(matrix[0])
        self.dp = [[0] * (col + 1) for _ in range(row + 1)]
        
        for i in range(1, row + 1):
            for j in range(1, col + 1):
                self.dp[i][j] = (
                    self.dp[i][j - 1]
                    + self.dp[i - 1][j]
                    - self.dp[i - 1][j - 1]
                    + matrix[i - 1][j - 1]
                )

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return (
            self.dp[row2 + 1][col2 + 1]
            - self.dp[row2 + 1][col1]
            - self.dp[row1][col2 + 1]
            + self.dp[row1][col1]
        )


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)

obj = NumMatrix(
    [
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5],
    ]
)

param_1 = obj.sumRegion(2, 1, 4, 3)
param_2 = obj.sumRegion(1, 1, 2, 2)
param_3 = obj.sumRegion(1, 2, 2, 4)

print(param_1)
print(param_2)
print(param_3)


# class NumMatrix:
#     def __init__(self, matrix):
#     # def __init__(self, matrix: List[List[int]]):
#         self.matrix = matrix

#     def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
#         total = 0
#         for x in range(row1, row2 + 1):
#             for y in range(col1, col2 + 1):
#                 total += self.matrix[x][y]

#         return total

# class NumMatrix:
#     def __init__(self, matrix):
#     # def __init__(self, matrix: List[List[int]]):
#         self.matrix = matrix

#     def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
#         new_matrix = [x[col1 : col2 + 1] for x in self.matrix[row1 : row2 + 1]]

#         total = sum(sum(new_matrix,[]))

#         return total