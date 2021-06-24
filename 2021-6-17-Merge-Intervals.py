# This was a practice problem I did with Michael Norton, and then later with Peter Anderson

def mergeIntervals(intervals):
    intervals.sort(key=lambda el: el[0])

    ans = [intervals[0]]

    for i in range(1, len(intervals)):

        cur = intervals[i]
        
        if ans[-1][0] <= cur[0] <= ans[-1][1]:
            if cur[1] > ans[-1][1]:
                ans[-1][1] = cur[1]
        else:
            ans.append(cur)

    return ans


print(mergeIntervals([[2, 6], [1, 3], [15, 18], [8, 10], [3, 4]]))