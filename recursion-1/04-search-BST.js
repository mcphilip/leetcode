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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) return null;
    if (val === root.val) return root;
    if (!root.left && !root.right) return null;

    let result = null;

    const r = function(node) {
        
        if (node.val === val) {
            result = node;
            return;
        }
        else if (!node.left && !node.right) return;

        if (!result) {
            if (node.val < val && node.right) r(node.right);
            else if (node.val > val && node.left) r(node.left);
        }
    };

    r(root);

    return result;
};

module.exports = {searchBST};
