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

function treeToArray(root) {
    if (root == null || root.val === null || root.val === undefined) return [];

    const treeArray = [];

    const recursiveStep = function(node, index) {
        treeArray[index] = node.val;

        if (node.left) recursiveStep(node.left, index * 2 + 1);
        if (node.right) recursiveStep(node.right, index * 2 + 2);
    }

    recursiveStep(root, 0);
    const resultArray = [];

    for (let i = 0; i < treeArray.length; i++) {
        resultArray[i] = treeArray[i] ? treeArray[i] : null;
    }

    return resultArray;
}

function buildTree(inorder, postorder) {
    if (inorder.length == 0 || postorder.length == 0) return null;

    const rootVal = postorder[postorder.length-1];
    const rootNode = new TreeNode(rootVal);
    
    if (inorder.length == 1) return rootNode;

    let leftSubtreeSize = inorder.indexOf(rootVal);
    let leftInorder = inorder.slice(0,leftSubtreeSize);
    let leftPostorder = postorder.slice(0,leftSubtreeSize);
    let rightInorder = inorder.slice(leftSubtreeSize+1);
    let rightPostorder = postorder.slice(leftSubtreeSize, postorder.length - 1);

    // let logStr = `inorder: ${inorder}\n`; 
    // logStr += `leftInorder: ${leftInorder}\n`;
    // logStr += `rightInorder: ${rightInorder}\n\n`;
    // logStr += `postorder: ${postorder}\n`;
    // logStr += `leftPostorder: ${leftPostorder}\n`;
    // logStr += `rightPostorder: ${rightPostorder}\n`;
    
    // console.log(logStr);

    rootNode.left = buildTree(leftInorder, leftPostorder);
    rootNode.right = buildTree(rightInorder, rightPostorder);

    return rootNode;
};

module.exports = {
    buildTree,
    setupTree,
    treeToArray
}
