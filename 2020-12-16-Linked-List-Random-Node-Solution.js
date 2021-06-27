/*
Given a singly linked list, return a random node's value from the linked list. 
Each node must have the same probability of being chosen.



Example 1:

Input
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 3, 2, 2, 3]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
// getRandom() should return either 1, 2, or 3 randomly. Each element should 
have equal probability of returning.


Constraints:

The number of nodes in the linked list will be in the range [1, 104]
-104 <= Node.val <= 104
At most 104 calls will be made to getRandom.


Follow up:

What if the linked list is extremely large and its length is unknown to you?
Could you solve this efficiently without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.count = 0;
  this.map = {};

  let cur = head;
  while (cur) {
    this.map[this.count] = cur.val;
    cur = cur.next;
    this.count++;
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  return this.map[Math.floor(Math.random() * this.count)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

// change it to use ES6 classes

/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
class Solution {
  constructor(head) {
    this.count = 0;
    this.map = {};

    let cur = head;
    while (cur) {
      this.map[this.count] = cur.val;
      cur = cur.next;
      this.count++;
    }
  }
}

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  return this.map[Math.floor(Math.random() * this.count)];
};
