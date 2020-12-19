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

function isSymmetric(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;

    const q = [];
    let levelValues = [];
    let levelLength, currentNode, i, isLevelSymmetric;
    let result = true;

    q.push(root);
    while (q.length > 0) {
        levelLength = q.length;
        i = 0;
        while (i < levelLength) {
            currentNode = q.shift();
            if (!currentNode) {
                levelValues.push(null);
            }
            else {
                levelValues.push(currentNode.val);

                q.push(currentNode.left);
                q.push(currentNode.right);
            }
            i++;
        }
        if (levelValues.filter(e => e === 0 || e).length == 0) {
            break;
        }
        if (!isArraySymmetric(levelValues)) {
            result = false;
            break;
        }
        levelValues = [];
    }

    return result;
};

function isArraySymmetric(values) {
    let reversed = [...values];
    reversed.reverse();

    const result = arraysEqual(values, reversed);
    return result
};

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

module.exports = {
    setupTree,
    isSymmetric
}
