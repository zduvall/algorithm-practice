/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]
Example 2:

Input: head = []
Output: []
Example 3:

Input: head = [1]
Output: [1]

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
    if (!head) return head;
    if (!head.next) return head;

    let newHead = head.next;

    let i = 1;
    let node = head;
    let prevNode;
    let prevPrevNode;

    while (node) {
        if (i % 2 === 0) {
            if(prevPrevNode) prevPrevNode.next = node;
            prevNode.next = node.next;
            node.next = prevNode;
            node = prevNode.next;
        } else {
            if (i >= 3) prevPrevNode = prevNode;
            prevNode = node;
            node = node.next;
        }
        i++;
    }
    return newHead;
};

// 1 -> 2 -> 3 -> 4

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let four = new ListNode(4, null);
let three = new ListNode(3, four);
let two = new ListNode(2, three);
let one = new ListNode(1, two);

console.log(swapPairs(one));

let testNull = new ListNode(null, null)

console.log(swapPairs(testNull));