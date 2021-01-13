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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const addTwoNumbers = function (l1, l2) {

  let num1 = `${l1.val}`
  let num2 = `${l2.val}`

  while (l1.next) {
    num1 += l1.next.val;
    l1 = l1.next;
  }

  while (l2.next) {
    num2 += l2.next.val;
    l2 = l2.next;
  }

  let num3 = String(Number(num1) + Number(num2))
  let node = null;
  
  console.log(num1);
  console.log(num2);
  console.log(num3);

  for (let i = num3.length - 1; i >= 0; i--) {
    let val = Number(num3[i])
    node = new ListNode(val, node)
  }

  return node
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