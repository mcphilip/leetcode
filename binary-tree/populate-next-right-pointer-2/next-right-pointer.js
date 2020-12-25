function TreeNode(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
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

function treeToArrayWithNextPointer(root) {
    if (root == null || root.val === null || root.val === undefined) return [];

    const treeArray = [];
    const q = [];
    q.push(root);

    while (q.length > 0) {
        let i = 0;
        let levelSize = q.length;
        while (i < levelSize) {
            const node = q.shift();
            treeArray.push(node.val);

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
            if (!node.next) treeArray.push('#');

            i++;
        }
    }
    
    // console.log(`treeArray: ${treeArray}`);
    return treeArray;
}

function connect(root) {
    if (!root || root.val === undefined || root.val === null) return null;

    const q = [];
    q.push(root);

    while (q.length > 0) {
        let i = 0;
        let levelSize = q.length;
        while (i < levelSize) {
            const node = q.shift();

            if (i < levelSize - 1) node.next = q[0];
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);

            i++;
        }
    }

    return root;
}

module.exports = {
    connect,
    setupTree,
    treeToArrayWithNextPointer
}
