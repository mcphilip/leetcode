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

function maxDepth(root) {
    if (!root) {
        return 0;
    }

    return maxChildDepth(root, 0);
};

function maxChildDepth(treeNode, depth) {
    if (!treeNode) {
        return depth;
    }

    depth++;

    const leftAns = maxChildDepth(treeNode.left, depth);
    const rightAns = maxChildDepth(treeNode.right, depth)

    return leftAns >= rightAns ? leftAns : rightAns;
}

module.exports = {
    setupTree,
    maxDepth
}
