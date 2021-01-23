const {fourSumCount} = require('./21-four-sum');

describe('fourSumCount', () => {
    it('should handle empty input', () => {
        expect(fourSumCount([],[],[],[])).toEqual(0);
    });
    it('should handle single element array input totaling zero', () => {
        expect(fourSumCount([1],[2],[-1],[-2])).toEqual(1);
    });
    it('should handle single element array input totaling non-zero', () => {
        expect(fourSumCount([1],[2],[-1],[0])).toEqual(0);
    });
    it('sould handle leetcode example', () => {
       expect(fourSumCount([1,2],[-2,-1],[-1,2],[0,2])).toEqual(2);
    });
    it('should handle custom testcase #1', () => {
        expect(fourSumCount([1,5],[5,1],[-4,-2],[-2,-4])).toEqual(4);
    });
    it('should handle custom testcase #2', () => {
        expect(fourSumCount([0,0],[0,0],[0,0],[0,0])).toEqual(16);
    });
});
