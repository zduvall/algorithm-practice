/**
 * Reach a Number
You are standing at position 0 on an infinite number line. There is a goal at position target.

On each move, you can either go left or right. During the n-th move (starting from 1), you take n steps.

Return the minimum number of steps required to reach the destination.

Example 1:
Input: target = 3
Output: 2
Explanation:
On the first move we step from 0 to 1.
On the second step we step from 1 to 3.

Example 2:
Input: target = 2
Output: 3
Explanation:
On the first move we step from 0 to 1.
On the second move we step  from 1 to -1.
On the third move we step from -1 to 2.

Note:
target will be a non-zero integer in the range [-10^9, 10^9].
 */

/**
* @param {number} target
* @return {number}
*/

// This one seemed easy, but I had to look up a solution

const reachNumber = function (target) {
    target = Math.abs(target);
    let steps = 0, sum = 0;
    
    while (sum < target) {
        steps++;
        sum += steps;
    }
    
    if ((sum - target) % 2 === 0) return steps;
    steps++; sum += steps;
    if ((sum - target) % 2 === 0) return steps;
    return ++steps
};

console.log(reachNumber(3)); // 2
console.log(reachNumber(2)); // 3
console.log(reachNumber(-2)); // 3
console.log(reachNumber(4)); // 3
console.log(reachNumber(5)); // 5

