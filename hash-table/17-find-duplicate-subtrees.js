function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    if (!root || (!root.left && !root.right)) return [];

    const result = [];
    const subtreeMap = {};

    const traverse = function(node) {
        if (!node) return;

        traverse(node.left);
        let serializedTree = serialize(node);
        if (subtreeMap[serializedTree] === undefined) {
            subtreeMap[serializedTree] = false;
        }
        else if (subtreeMap[serializedTree] === false) {
            result.push(node);
            subtreeMap[serializedTree] = true;
        }
        traverse(node.right);
    };

    traverse(root);

    return result;
};

var serialize = function(root) {
    if (!root || root.val === null || root.val === undefined) return '[]';

    let resultArray = [];
    
    // [1,null,2,null,3,null,4]
    const appendChildren = function(levelNodes) {
        let nextLevelNodes = [];
        levelNodes.forEach(node => {
            resultArray.push(node === null ? null : node.val);
        })

        while (levelNodes.length > 0) {
            const node = levelNodes.shift();

            if (node) {
                nextLevelNodes.push(node.left);
                nextLevelNodes.push(node.right);
            }
        }

        // console.log(`resultArray: ${resultArray}`);

        if (nextLevelNodes.filter(e => e).length > 0) appendChildren(nextLevelNodes);
    }

    appendChildren([root]);

    if (resultArray[resultArray.length-1] === null) {
        resultArray = resultArray.slice(0,resultArray.length-1);
    }

    return JSON.stringify(resultArray);
};

var deserialize = function(data) {
    if (!data || data === '[]') return null;

    const treeArray = JSON.parse(data);

    const createChildren = function(levelNodes) {
        const nextLevelNodes = [];
        while (levelNodes.length > 0) {
            const parentNode = levelNodes.shift();
            const lVal = treeArray.shift();
            const rVal = treeArray.shift();

            if (lVal !== null && lVal !== undefined) {
                const lNode = new TreeNode(lVal);
                parentNode.left = lNode;
                nextLevelNodes.push(lNode);
            }

            if (rVal !== null && rVal !== undefined) {
                const rNode = new TreeNode(rVal);
                parentNode.right = rNode;
                nextLevelNodes.push(rNode);
            }
        }

        if (nextLevelNodes.length > 0) createChildren(nextLevelNodes);
    };

    const tree = new TreeNode(treeArray.shift());

    createChildren([tree], 1);

    return tree;
};

module.exports = {deserialize, findDuplicateSubtrees};
