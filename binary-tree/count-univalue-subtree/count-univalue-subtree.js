// 98.5 percentile fastest execution; 34.5 percentile lowest memory usage

function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function setupTree(treeArray) {
    // [3,9,20,null,null,15,7]
    //          3
    //         / \
    //        9   20
    //            / \
    //           15  7

    if (!treeArray || treeArray.length === 0) return null;

    const tree = createNode(0, treeArray);

    return tree;
};

function createNode(treeArrayIndex, treeArray) {
    const newNode = new TreeNode(treeArray[treeArrayIndex]);

    const leftIndex = treeArrayIndex * 2 + 1; 
    const rightIndex = treeArrayIndex * 2 + 2; 

    if (leftIndex < treeArray.length && treeArray[leftIndex] != null) {
        newNode.left = createNode(leftIndex, treeArray);
    }
    if (rightIndex < treeArray.length && treeArray[rightIndex] != null) {
        newNode.right = createNode(rightIndex, treeArray);
    }

    return newNode;
}

function countUnivalSubtrees(root) {
    if (!root || root.val === null || root.val === undefined) return 0;

    let result = 0;

    let recursiveStep = function(node) {
        const leftVal = node.left ? recursiveStep(node.left) : undefined;
        const rightVal = node.right ? recursiveStep(node.right) : undefined;

        let hasUnivalSubtree = false;
        let nodeVal = null;
        let logStr = '';

        if (!node.left && !node.right) {
            hasUnivalSubtree = true;
        }
        else if (leftVal !== undefined && rightVal !== undefined) {
            if (leftVal == rightVal && leftVal == node.val) {
                hasUnivalSubtree = true;
            }
        }
        else if (leftVal !== undefined) {
            if (leftVal == node.val) {
                hasUnivalSubtree = true;
            }
        }
        else if (rightVal !== undefined) {
            if (rightVal == node.val) {
                hasUnivalSubtree = true;
            }
        }

        if (hasUnivalSubtree) {
            result++;
            nodeVal = node.val;
        }

        return nodeVal;
    }

    recursiveStep(root);

    return result;
}

module.exports = {
    setupTree,
    countUnivalSubtrees
}
