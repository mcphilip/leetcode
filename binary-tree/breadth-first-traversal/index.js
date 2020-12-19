function TreeNode(val, left, right, parentNode) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
    this.parentNode = (parentNode === undefined ? null : parentNode);
}

function Queue(){
    const queueArray = [];

    return {
        enqueue(val) {
            queueArray.push(val);
        },
        dequeue() {
            return queueArray.shift();
        },
        length() {
            return queueArray.length;
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
    const q = new Queue();

    let level = 0;
    let countAtLevel, numberRemovedAtLevel, currentTreeNode;
    q.enqueue(tree);

    while (q.length() > 0) {
        countAtLevel = q.length();
        numberRemovedAtLevel = 0;
        result[level] = [];
        while (numberRemovedAtLevel < countAtLevel) {
            currentTreeNode = q.dequeue();
            
            result[level].push(currentTreeNode.val);

            if (currentTreeNode.left) q.enqueue(currentTreeNode.left);
            if (currentTreeNode.right) q.enqueue(currentTreeNode.right);

            numberRemovedAtLevel++;
        }
        level++;
    }

    return result;
}

module.exports = {
    setupTree,
    levelOrder,
    Queue,
    TreeNode
}
