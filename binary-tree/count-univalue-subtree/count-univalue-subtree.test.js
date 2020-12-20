const { setupTree, countUnivalSubtrees } = require('./count-univalue-subtrees');

describe('countUnivalSubtrees', () => {
    it('should return 0 for empty array input', () => {
        const tree = setupTree([]);

        expect(countUnivalSubtrees(tree)).toEqual(0);
    });
    it('should return 5 for leetcode sample input', () => {
        const tree = setupTree([5,1,5,5,5,null,5]);
        
        expect(countUnivalSubtrees(tree)).toEqual(4);
    });
    it('should return 6 for additional leetcode sample input', () => {
        const tree = setupTree([5,5,5,5,5,null,5]);
        
        expect(countUnivalSubtrees(tree)).toEqual(6);
    });
    it('should return 3 for custom input', () => {
        const tree = setupTree([3,9,20,null,null,15,7]);

        expect(countUnivalSubtrees(tree)).toEqual(3);
    })
});
