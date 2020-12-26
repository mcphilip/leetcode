function TreeNode(val, left, right) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
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

function lowestCommonAncestor(root, p, q) {
    let lca = null;

    // find p & q, wiring up ancestors while traversing inorder
    let pNode = null;
    let qNode = null;

    const findPAndQ = function(node) {
        if (pNode && qNode) return;

        if (node.val == p.val) pNode = node;
        if (node.val == q.val) qNode = node;

        if (node.left) {
            node.left.parent = node;
            findPAndQ(node.left);
        }
    
        if (node.right) {
            node.right.parent = node;
            findPAndQ(node.right);
        }
    }
    
    findPAndQ(root);

    // console.log(`pNode: ${pNode}; qNode: ${qNode}`);

    // build ancestors arrays for p
    const pAncestors = [];
    pAncestors.push(pNode);
    while (pNode.parent) {
        pAncestors.push(pNode.parent);
        pNode = pNode.parent;
    }

    const qAncestors = [];
    qAncestors.push(qNode);
    while (qNode.parent) {
        qAncestors.push(qNode.parent);
        qNode = qNode.parent;
    }

    if (qAncestors.length >= pAncestors.length) {
        for (let i = 0; i < qAncestors.length; i++) {
            if (pAncestors.find(pNode => pNode.val == qAncestors[i].val)) {
                lca = qAncestors[i];
                break;
            }
        }
    }
    else {
        for (let i = 0; i < pAncestors.length; i++) {
            if (qAncestors.find(qNode => qNode.val == pAncestors[i].val)) {
                lca = pAncestors[i];
                break;
            }
        }
    }

    // console.log(`pAncestors: ${pAncestors}, qAncestors: ${qAncestors}`);
    return lca;
}

module.exports = {
    setupTree,
    lowestCommonAncestor
}
