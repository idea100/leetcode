/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const stack = [];
    const result = [];

    function pushStack(node) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
    }

    function popStack() {
        let val;
        do {
            val = stack.pop();
            if (!val) {
                return;
            }
            result.push(val.val);
            val = val.right;
        } while (!val);

        return val;
    }

    while (root) {
        pushStack(root);
        root = popStack();
    }

    return result;

};