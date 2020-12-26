const { setupTree, lowestCommonAncestor } = require('./lowest-common-ancestor');

describe('lowestCommonAncestor', () => {
    it('should return correct ancestor for leetcode example #1', () => {
        const tree = setupTree([3,5,1,6,2,0,8,null,null,7,4]);

        expect(lowestCommonAncestor(tree, tree.left, tree.right).val).toEqual(3);
    });
    it('should return correct ancestor for leetcode example #2', () => {
        const tree = setupTree([3,5,1,6,2,0,8,null,null,7,4]);

        expect(lowestCommonAncestor(tree, tree.left, tree.left.right.right).val).toEqual(5);
    });
    it('should return correct ancestor for leetcode example #3', () => {
        const tree = setupTree([1,2]);

        expect(lowestCommonAncestor(tree, tree, tree.left).val).toEqual(1);
    });
});
