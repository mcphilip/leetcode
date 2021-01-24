const {plusOne} = require('./03-plus-one');

describe('plusOne', () => {
    it('should handle leetcode example #1', () => {
        expect(plusOne([1,2,3])).toEqual([1,2,4]);
    });
    it('should handle leetcode example #2', () => {
        expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });
    it('should handle leetcode example #3', () => {
        expect(plusOne([0])).toEqual([1]);
    })
    it('should handle 1 digit edge case adding extra digit', () => {
        expect(plusOne([9])).toEqual([1,0]);
    });
    it('should handle multiple digit edge case adding extra digit', () => {
        expect(plusOne([9,9])).toEqual([1,0,0]);
    });
    it('should carry as expected', () => {
        expect(plusOne([4,3,9,9])).toEqual([4,4,0,0]);
    });
})
