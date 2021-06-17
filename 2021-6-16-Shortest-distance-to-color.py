# Shortest Distance to Target Color
# You are given an array colors, in which there are three colors: 1, 2 and 3.

# You are also given some queries. Each query consists of two integers i and c,
# return the shortest distance between the given index i and the target color c.
# If there is no solution return -1.

# Example 1:

# Input: colors = [1,1,2,1,3,2,2,3,3], queries = [[1,3],[2,2],[6,1]]
# Output: [3,0,3]
# Explanation:
# The nearest 3 from index 1 is at index 4 (3 steps away).
# The nearest 2 from index 2 is at index 2 itself (0 steps away).
# The nearest 1 from index 6 is at index 3 (3 steps away).

# Example 2:

# Input: colors = [1,2], queries = [[0,3]]
# Output: [-1]
# Explanation: There is no 3 in the array.

# Constraints:

# 1 <= colors.length <= 5*10^4
# 1 <= colors[i] <= 3
# 1 <= queries.length <= 5*10^4
# queries[i].length == 2
# 0 <= queries[i][0] < colors.length
# 1 <= queries[i][1] <= 3

from typing import List
from bisect import bisect_left


class Solution:
    def shortestDistanceColor(
        self, colors: List[int], queries: List[List[int]]
    ) -> List[int]:

        ans = []

        idxs = {1: [], 2: [], 3: []}

        for i in range(len(colors)):
            idxs[colors[i]].append(i)

        for i, c in queries:
            if not len(idxs[c]):
                ans.append(-1)
                continue

            # returns where the second argument (int) would fit in the first (list) without actually inserting it
            insrt_i = bisect_left(idxs[c], i)

            if insrt_i == 0:
                ans.append(idxs[c][0] - i)
            elif insrt_i >= len(idxs[c]):
                ans.append(i - idxs[c][-1])
            else:
                ans.append(
                    min(
                        i - idxs[c][insrt_i - 1],
                        idxs[c][insrt_i] - i,
                    )
                )

        return ans


solution = Solution()

print(
    solution.shortestDistanceColor(
        colors=[1, 1, 2, 1, 3, 2, 2, 3, 3], queries=[[1, 3], [2, 2], [6, 1]]
    )
)
print(solution.shortestDistanceColor(colors=[1, 2], queries=[[0, 3]]))


# # works but takes too long
# class Solution:
#     def shortestDistanceColor(
#         self, colors: List[int], queries: List[List[int]]
#     ) -> List[int]:

#         ans = []

#         idxs = {1: [], 2: [], 3: []}

#         for i in range(len(colors)):
#             idxs[colors[i]].append(i)

#         for [i, c] in queries:

#             if not len(idxs[c]):
#                 ans.append(-1)
#                 continue

#             minimum = float("inf")

#             for idx in idxs[c]:
#                 minimum = min(minimum, abs(i - idx))

#             ans.append(minimum)

#         return ans