# Max Area of Island
# You are given an m x n binary matrix grid. An island is a group of 1's
# (representing land) connected 4-directionally (horizontal or vertical.) You
# may assume all four edges of the grid are surrounded by water.

# The area of an island is the number of cells with a value 1 in the island.

# Return the maximum area of an island in grid. If there is no island, return 0.

# Example 1:

# Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
#                [0,0,0,0,0,0,0,1,1,1,0,0,0],
#                [0,1,1,0,1,0,0,0,0,0,0,0,0],
#                [0,1,0,0,1,1,0,0,1,0,1,0,0],
#                [0,1,0,0,1,1,0,0,1,1,1,0,0],
#                [0,0,0,0,0,0,0,0,0,0,1,0,0],
#                [0,0,0,0,0,0,0,1,1,1,0,0,0],
#                [0,0,0,0,0,0,0,1,1,0,0,0,0]]
# Output: 6
# Explanation: The answer is not 11, because the island must be connected 4-directionally.
# Example 2:

# Input: grid = [[0,0,0,0,0,0,0,0]]
# Output: 0

# Constraints:

# m == grid.length
# n == grid[i].length
# 1 <= m, n <= 50
# grid[i][j] is either 0 or 1.


class Solution:
    def maxAreaOfIsland(self, grid) -> int:

        visited = set()

        def area(y, x):
            if (
                (y, x) in visited
                or -1 in {y, x}
                or y >= len(grid)
                or x >= len(grid[0])
                or grid[y][x] == 0
            ):
                return 0

            visited.add((y, x))

            return 1 + area(y, x + 1) + area(y, x - 1) + area(y + 1, x) + area(y - 1, x)

        return max(
            [
                area(x, y)
                for x in range(len(grid))
                for y in range(len(grid[0]))
                if grid[x][y] == 1
            ]
            + [0]
        )


solution = Solution()

grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]

print(solution.maxAreaOfIsland(grid))

grid2 = [[0]]

print(solution.maxAreaOfIsland(grid2))


# function maxAreaOfIsland (grid) {
#   let max = 0;
#   for (let i = 0; i < grid.length; i++) {
#     for (let j = 0; j < grid[0].length; j++) {
#       if (grid[i][j] === 1) {
#         let cur = islandArea(i, j);
#         max = Math.max(max, cur);
#       }
#     }
#   }

#   function islandArea(x, y) {
#     let area = 0;
#     if (
#       x < 0 ||
#       y < 0 ||
#       x >= grid.length ||
#       y >= grid[0].length ||
#       grid[x][y] === 0
#     ) {
#       return 0;
#     }
#     grid[x][y] = 0;
#     area =
#       1 +
#       islandArea(x - 1, y) +
#       islandArea(x + 1, y) +
#       islandArea(x, y - 1) +
#       islandArea(x, y + 1);
#     return area;
#   }
#   return max;
# };
