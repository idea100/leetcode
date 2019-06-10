// https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let result = 0;

    function findMaxDepth(node, level) {
        if (!node) {
            return;
        }

        if (result < level) {
            result = level
        }

        findMaxDepth(node.left, level + 1);
        findMaxDepth(node.right, level + 1);
    }

    findMaxDepth(root, 1);

    return result;
};