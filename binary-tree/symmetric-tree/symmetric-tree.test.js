const { setupTree, isSymmetric: isSymmetricIterative } = require('./symmetric-tree-iterative');

describe('isSymmetric (iterative)', () => {
    it('should return false when tree is null', () => {
        const tree = setupTree([]);
        
        expect(isSymmetricIterative(null)).toEqual(true);
    });
    it('should return true when tree is one level', () => {
        const tree = setupTree([0]);

        expect(isSymmetricIterative(tree)).toEqual(true);
    });
    it('should return true for symmetric leetcode sample', () => {
        const tree = setupTree([1,2,2,3,4,4,3]);

        expect(isSymmetricIterative(tree)).toEqual(true);
    });
    it('should return false for asymmetric leetcode sample', () => {
        const tree = setupTree([1,2,2,null,3,null,3]);

        expect(isSymmetricIterative(tree)).toEqual(false);
    })
});
