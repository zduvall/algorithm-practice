/**
 * Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single 
digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 
0 itself.

Example 1:

  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
  
  Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]
  
  Example 3: 
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 //ended up having to look up a solution for this, because mine couldn't turn large numbers into strings or vice versa

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = function (l1, l2) {
  let list = new ListNode(0);
  let head = list;
  let sum = 0, carry = 0;

  while (l1 || l2 || sum > 0) {

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;

  }

  return list.next;
};

// Input: l1 = [2, 4, 3], l2 = [5, 6, 4]
// Output: [7, 0, 8]
// Explanation: 342 + 465 = 807.
const n3 = new ListNode(3)
const n2 = new ListNode(4, n3)
const n1 = new ListNode(2, n2)

const n6 = new ListNode(4)
const n5 = new ListNode(6, n6)
const n4 = new ListNode(5, n5)

console.log(addTwoNumbers(n1, n4));

// Input:
// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5, 6, 4]
// Expected:
// [6, 6, 4, 0, 0, 1]

const node29 = new ListNode(1);
const node28 = new ListNode(0, node29);
const node27 = new ListNode(0, node28);
const node26 = new ListNode(0, node27);
const node25 = new ListNode(0, node26);
const node24 = new ListNode(0, node25);
const node23 = new ListNode(0, node24);
const node22 = new ListNode(0, node23);
const node21 = new ListNode(0, node22);
const node20 = new ListNode(0, node21);
const node19 = new ListNode(0, node20);
const node18 = new ListNode(0, node19);
const node17 = new ListNode(0, node18);
const node16 = new ListNode(0, node17);
const node15 = new ListNode(0, node16);
const node14 = new ListNode(0, node15);
const node13 = new ListNode(0, node14);
const node12 = new ListNode(0, node13);
const node11 = new ListNode(0, node12);
const node10 = new ListNode(0, node11);
const node9 = new ListNode(0, node10);
const node8 = new ListNode(0, node9);
const node7 = new ListNode(0, node8);
const node6 = new ListNode(0, node7);
const node5 = new ListNode(0, node6);
const node4 = new ListNode(0, node5);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(0, node3);
const node1 = new ListNode(1, node2);

const node03 = new ListNode(4);
const node02 = new ListNode(6, node03)
const node01 = new ListNode(5, node02)

console.log(addTwoNumbers(node1, node01));
