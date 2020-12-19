const { setupTree, maxDepth  } = require('./maximum-depth');

describe('maxDepth', () => {
    it('should return 0 when tree is null', () => {
        expect(maxDepth(null)).toEqual(0);
    });
    it('should return 1 when tree is just a root', () => {
        const tree = setupTree([1000]);

        expect(maxDepth(tree)).toEqual(1);
    });
    it('should return 3 for leetcode sample input', () => {
        const tree = setupTree([3,9,20,null,null,15,7]);

        expect(maxDepth(tree)).toEqual(3);
    })
});
