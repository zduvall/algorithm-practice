/**
 * 
 * Nested List Weight Sum
You are given a nested list of integers nestedList. Each element is either an 
integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, 
the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.

Example 1:
Input: nestedList = [[1,1],2,[1,1]]
Output: 10
Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.

Example 2:
Input: nestedList = [1,[4,[6]]]
Output: 27
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3. 1*1 + 4*2 + 6*3 = 27.

Example 3:
Input: nestedList = [0]
Output: 0

Constraints:
1 <= nestedList.length <= 50
The values of the integers in the nested list is in the range [-100, 100].
The maximum depth of any integer is less than or equal to 50.
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

const depthSum = function (nestedList, depth = 1) {
    if (nestedList.length === 1 && nestedList[0].isInteger()) return nestedList[0].getInteger() * depth;

    let sum = nestedList.reduce((accum, cur) => {
        cur = (cur.isInteger()) ? cur.getInteger() * depth : depthSum(cur.getList(), depth + 1)
        return accum + cur;
    }, 0)

    return sum;
};

// // this works, but doesn't work on leetcode ... it returned undefined. You have to use
// // their extra provided methods for some reason.

// const depthSum = function (nestedList, depth = 1) {
//     if (nestedList.length === 1 && Number.isInteger(nestedList[0])) return nestedList[0] * depth;

//     let sum = nestedList.reduce((accum, cur) => {
//         cur = (Array.isArray(cur)) ? depthSum(cur, depth + 1) : cur * depth
//         return accum + cur
//     }, 0)

//     return sum
// };

const nestedList1 = [[1, 1], 2, [1, 1]] // 10
const nestedList2 = [1, [4, [6]]] // 27
const nestedList3 = [0] // 0
const nestedList4 = [[[8], 4]] // 32

console.log(depthSum(nestedList1));
console.log(depthSum(nestedList2));
console.log(depthSum(nestedList3));
console.log(depthSum(nestedList4));

