const { setupTree, levelOrder, MultiLevelQueue, TreeNode } = require('./index');

describe('MultiLevelQueue', () => {
    it('should build two level queue', () => {
        const mlq = new MultiLevelQueue();
        mlq.enqueue(0, 1);
        mlq.enqueue(1, 2);
        mlq.enqueue(1, 3);

        expect(mlq.toArrayOfArrays()).toEqual([[1],[2,3]]);
    });
});

describe('setupTree', () => {
    it('should handle null input', () => {
        let tree = setupTree();

        expect(tree).toEqual(null);
    });

    it('should handle empty array input', () => {
        let tree = setupTree([]);

        expect(tree).toEqual(null);
    });

    it('should build tree for leetcode sample input', () => {
        const tree = setupTree([3,9,20,null,null,15,7]);

        expect(tree.val).toEqual(3);
        expect(tree.left.val).toEqual(9);
        expect(tree.left.left).toEqual(null);
        expect(tree.left.right).toEqual(null);
        expect(tree.right.val).toEqual(20);
        expect(tree.right.left.val).toEqual(15);
        expect(tree.right.left.left).toEqual(null);
        expect(tree.right.left.right).toEqual(null);
        expect(tree.right.right.val).toEqual(7);
        expect(tree.right.right.left).toEqual(null);
        expect(tree.right.right.right).toEqual(null);
    });

    it('should handle single node input', () => {
        const tree = setupTree([2]);

        expect(tree.val).toEqual(2);
        expect(tree.left).toEqual(null);
        expect(tree.right).toEqual(null);
    });

    it('should handle three nodes all on right', () => {
        const tree = setupTree([2,null,3,null,null,null,6]);

        expect(tree.val).toEqual(2);
        expect(tree.left).toEqual(null);
        expect(tree.right.val).toEqual(3);
        expect(tree.right.left).toEqual(null);
        expect(tree.right.right.val).toEqual(6);
        expect(tree.right.right.left).toEqual(null);
        expect(tree.right.right.right).toEqual(null);
    })
});

describe('levelOrder', () => {
    it('should return empty array for null input', () => {
        const tree = levelOrder();

        expect(tree).toEqual([]);
    });
    it('should return empty array for root node with null value', () => {
        const tree = levelOrder(new TreeNode(null));

        expect(tree).toEqual([]);
    });
    it('should return expected output format for leetcode sample input', () => {
        const tree = setupTree([3,9,20,null,null,15,7]);
        const result = levelOrder(tree);

        expect(result).toEqual([[3],[9,20],[15,7]])
    });
    it('should return expected output format for right node only tree', () => {
        const tree = setupTree([2,null,3,null,null,null,6]);
        const result = levelOrder(tree);

        expect(result).toEqual([[2], [3], [6]]);
    });
});
