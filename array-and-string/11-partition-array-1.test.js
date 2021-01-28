const {arrayPairSum} = require('./11-partition-array-1');

describe('arrayPairSum', () => {
    it('should handle leetcode example #1', () => {
        expect(arrayPairSum([1,4,3,2])).toEqual(4);
    })
    it('should handle leetcode example #2', () => {
        expect(arrayPairSum([6,2,6,5,1,2])).toEqual(9);
    });
    it('should handle 2 element array', () => {
        expect(arrayPairSum([2,1])).toEqual(1);
    }); 
});
