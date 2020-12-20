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

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function isSymmetric(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    if (!root.left || !root.right) return false;

    const leftArray = [];
    const rightArray = [];

    getLeftTreeValues(root.left, leftArray);
    getRightTreeValues(root.right, rightArray);

    return arraysEqual(leftArray, rightArray);
};

function getLeftTreeValues(root, valueArray) {
    if (!root) {
        valueArray.push(null);
        return;
    }

    valueArray.push(root.val);

    if (!root.left && !root.right) return;

    getLeftTreeValues(root.left, valueArray);
    getLeftTreeValues(root.right, valueArray);
};

function getRightTreeValues(root, valueArray) {
    if (!root) {
        valueArray.push(null);
        return;
    }

    valueArray.push(root.val);

    if (!root.right && !root.left) return;

    getRightTreeValues(root.right, valueArray);
    getRightTreeValues(root.left, valueArray);
};

module.exports = {
    setupTree,
    isSymmetric
}
