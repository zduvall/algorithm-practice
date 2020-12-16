// https://leetcode.com/problems/validate-binary-search-tree/submissions/

/*
Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

Input: root = [2,1,3]
Output: true
Example 2:

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

const six = new TreeNode(6);
const three = new TreeNode(3);
const four = new TreeNode(4, three, six);
const one = new TreeNode(1);
const five = new TreeNode(5, one, four);

const n7 = new TreeNode(7);
const n3 = new TreeNode(3);
const n6 = new TreeNode(6, n3, n7);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5, n4, n6);

// here's the solution I came up with, ranged from 26% - 89%, time complexity is linear - O(n)
// because it just hits every node once

function isValidBST(root, arr = [-Infinity], bstStatus = [true]) {
    if (!root) return;
    isValidBST(root.left, arr, bstStatus);
    if (root.val <= arr[0]) {
        bstStatus[0] = false;
    } else {
        arr[0] = root.val;
    }
    isValidBST(root.right, arr, bstStatus);
    return bstStatus[0];
};

console.log(isValidBST(five));
console.log(isValidBST(n5));

// got this solution from someone else online

function isValidBST2(root, min = null, max = null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST2(root.left, min, root) && isValidBST2(root.right, root, max);
};

console.log(isValidBST2(five));
console.log(isValidBST2(n5));