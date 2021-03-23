/* 
Merge two sorted linked lists and return it as a sorted list. The list should 
be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

/**
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

// // recursively
const mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

// // iteratively
const mergeTwoLists = (l1, l2) => {
    if (!l1 || !l2) return l1 || l2;
    
    const resHead = {val: 0, next: null};
    let cur = resHead;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    
    return resHead.next;
}


// Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]

const fL4 = new ListNode(4, null);
const fL2 = new ListNode(2, fL4);
const fL1 = new ListNode(1, fL2);

const sL4 = new ListNode(4, null);
const sL3 = new ListNode(3, sL4);
const sL1 = new ListNode(1, sL3);

console.log(mergeTwoLists(fL1, sL1)); // [1, 1, 2, 3, 4, 4]