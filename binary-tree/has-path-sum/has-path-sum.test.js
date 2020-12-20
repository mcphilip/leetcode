const { setupTree, hasPathSum } = require('./has-path-sum');

describe('hasPathSum', () => {
    it('should return false for empty array input', () => {
        const tree = setupTree([]);
        expect(hasPathSum(tree, 0)).toEqual(false);
    });
    it('should return false for null tree input', () => {
        expect(hasPathSum(null, 0)).toEqual(false);
    })
    it('should return true for single node tree', () => {
        const tree = setupTree([10]);

        expect(hasPathSum(tree, 10)).toEqual(true);
    })
    it('should return true for leetcode sample input', () => {
        const tree = setupTree([5,4,8,11,null,13,4,7,2,null,null,null,1]);

        expect(hasPathSum(tree, 22)).toEqual(true);
    });
    it('should return false for contrived example', () => {
        const tree = setupTree([3,9,20,null,null,15,7]);

        expect(hasPathSum(tree,23)).toEqual(false);
    });
    it('should handle negative numbers', () => {
        const tree = setupTree([1,2,-1]);

        expect(hasPathSum(tree,0)).toEqual(true);
    });
    it('should return true for failed test case', () => {
        const tree = setupTree([0,1,1]);

        expect(hasPathSum(tree,1)).toEqual(true);
    });
});
