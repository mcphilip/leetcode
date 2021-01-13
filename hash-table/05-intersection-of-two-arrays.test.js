const {intersection} = require('./05-intersection-of-two-arrays');

describe('intersection', () => {
    it('should handle bad input', () => {
        expect(intersection(null, null)).toEqual([]);
        expect(intersection([], null)).toEqual([]);
        expect(intersection(null, [])).toEqual([]);
        expect(intersection()).toEqual([]);
        expect(intersection([])).toEqual([]);
        expect(intersection(undefined, [])).toEqual([]);
    });
    it('should handle empty array scenarios', () => {
        expect(intersection([], [1])).toEqual([]);
        expect(intersection([1], [])).toEqual([]);
        expect(intersection([], [])).toEqual([]);
    });
    it('should handle intersection of single element arrays', () => {
        expect(intersection([1], [0])).toEqual([]);
        expect(intersection([0], [0])).toEqual([0]);
    });
    it('should handle intersection of non intersecting arrays', () => {
        expect(intersection([1,2,3], [4,5,6])).toEqual([]);
    });
    it('should handle leetcode examples', () => {
        expect(intersection([1,2,2,1], [2,2])).toEqual([2]);
        expect(intersection([4,9,5], [9,4,9,8,4])).toEqual([9,4]);
    });
});
