const {deserialize, findDuplicateSubtrees} = require('./17-find-duplicate-subtrees');

describe('findDuplicateSubtrees', () => {
    it('should handle bad input', () => {
        expect(findDuplicateSubtrees(null)).toEqual([]);
        expect(findDuplicateSubtrees()).toEqual([]);
    });
    it('should handle single node input', () => {
        const root = {val: 1, left: null, right: null};

        expect(findDuplicateSubtrees(root)).toEqual([]);
    });
    it('should handle 3 node example', () => {
        const root = deserialize('[1,2,2]');

        const result = findDuplicateSubtrees(root);

        expect(result.length).toEqual(1);
        expect(result[0] === root.left || result[0] === root.right).toEqual(true);
    });
});
