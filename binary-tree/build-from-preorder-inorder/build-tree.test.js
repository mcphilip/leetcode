const { buildTree, setupTree, treeToArray } = require('./build-tree');

describe('buildTree', () => {
    it('should return empty array for empty inorder array', () => {
        const tree = buildTree([], [3]);

        expect(treeToArray(tree)).toEqual([]);
    });
    it('should return empty array for empty postorder array', () => {
        const tree = buildTree([3], []);

        expect(treeToArray(tree)).toEqual([]);
    });
    it('should return expected tree array leetcode example', () => {
        const tree = buildTree([3,9,20,15,7], [9,3,15,20,7]);

        expect(treeToArray(tree)).toEqual([3,9,20,null,null,15,7]);
    });
    it('should return expected tree array for custom example', ()  => {
        const tree = buildTree([1,2,4,8,9,5,10,11,3,6,7], [8,4,9,2,10,5,11,1,6,3,7]);

        expect(treeToArray(tree)).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
    });
});
