const {twoSum} = require('./12-two-sum-2');

describe('twoSum', () => {
    it('should handle example #1', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([1,2]);
    });
    it('should handle example #2', () => {
        expect(twoSum([2,3,4], 6)).toEqual([1,3]);
    });
    it('should handle exmaple #3', () => {
        expect(twoSum([-1,0], -1)).toEqual([1,2]);
    });
    it('should handle exmaple #3', () => {
        expect(twoSum([1,2,3,4,5,6,7,8,9,10,11,12], 23)).toEqual([11,12]);
    });
    it('should handle failed test case #1', () => {
        expect(twoSum([3,24,50,79,88,150,345], 200)).toEqual([3,6]);
    });
});
