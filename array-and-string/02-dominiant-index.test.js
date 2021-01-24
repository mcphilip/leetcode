const {dominantIndex} = require('./02-dominiant-index');

describe('dominantIndex', () => {
    it('should handle leetcode example #1', () => {
        expect(dominantIndex([3, 6, 1, 0])).toEqual(1);
    });
    it('should handle leetcode example #2', () => {
        expect(dominantIndex([1, 2, 3, 4])).toEqual(-1);
    });
    it('should handle single element array edge case', () => {
        expect(dominantIndex([0])).toEqual(0);
    });
    it('should handle dominant index as first element', () => {
        expect(dominantIndex([99,44,3,2])).toEqual(0);
    });
    it('should handle dominant index as last element', () => {
        expect(dominantIndex([1,44,3,2,99])).toEqual(4);
    });
    it('should handle failed leetcode example #1', () => {
        expect(dominantIndex([0,0,3,2])).toEqual(-1);
    });
});
