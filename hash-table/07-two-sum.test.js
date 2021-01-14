const {twoSum} = require('./07-two-sum');

describe('twoSum', () => {
    it('should handle two element array', () => {
        expect(twoSum([1,2], 3)).toEqual([0,1]);
    });
    it('should return [0,1] for [2,7,11,15], 9', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
    });
    it('should return [1,2] for [3,2,4], 6', () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2]);
    });
    it('should return [0,2] for [-2,-1,-6], -8', () => {
        expect(twoSum([-2,-1,-6], -8)).toEqual([0,2]);
    });
});
