function TreeNode(val, left, right, parentNode) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
    this.parentNode = (parentNode === undefined ? null : parentNode);
}

function MultiLevelQueue(){
    const queueArrays = [];

    return {
        enqueue(level, val) {
            if (queueArrays[level] === undefined) {
                queueArrays[level] = [];
            }
            queueArrays[level].push(val);
        },
        dequeue(level) {
            return (queueArrays[level] || []).shift();
        },
        toArrayOfArrays() {
            return queueArrays;
        }
    }
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

function levelOrder(tree) {
    if (!tree || tree.val === null || tree.val == undefined) return [];

    const result = [];
    const mlq = new MultiLevelQueue();

    addNodeToMultiLevelQueue(tree, mlq, 0);

    return mlq.toArrayOfArrays();
}

function addNodeToMultiLevelQueue(node, mlq, level) {
    mlq.enqueue(level, node.val);

    if (node.left != null) {
        addNodeToMultiLevelQueue(node.left, mlq, level + 1);
    }

    if (node.right != null) {
        addNodeToMultiLevelQueue(node.right, mlq, level + 1);
    }
}


module.exports = {
    setupTree,
    levelOrder,
    MultiLevelQueue,
    TreeNode
}
