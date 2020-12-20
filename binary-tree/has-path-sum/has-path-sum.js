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

function hasPathSum(root, sum) {
    if (!root || root.val === null || root.val === undefined) return false;

    let runningTotal = 0;

    return checkHasPathSum(root, sum, runningTotal);
}

function checkHasPathSum(node, targetSum, runningTotal) {
    runningTotal += node.val;
    
    if (!node.left && !node.right) {
        return runningTotal == targetSum;
    }

    let childHasPathSum = false;
    
    if(node.left) {
        childHasPathSum = checkHasPathSum(node.left, targetSum, runningTotal);
    }

    if (node.right && !childHasPathSum) {
        childHasPathSum = checkHasPathSum(node.right, targetSum, runningTotal);
    }

    return childHasPathSum;
}

module.exports = {
    setupTree,
    hasPathSum
}
