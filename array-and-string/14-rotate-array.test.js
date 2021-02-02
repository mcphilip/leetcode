const {rotate} = require("./14-rotate-array");

describe('rotate', () => {
    it('should handle example #1', () => {
        const nums = [1,2,3,4,5,6,7];
        rotate(nums, 3);
        expect(nums).toEqual([5,6,7,1,2,3,4]);
    });
    it('should handle example #2', () => {
        const nums = [-1,-100,3,99];
        rotate(nums, 2);
        expect(nums).toEqual([3,99,-1,-100]);
    });
    it('should handle 0 edge case', () => {
        const nums = [1,2,3,4,5];
        rotate(nums, 0);
        expect(nums).toEqual([1,2,3,4,5]);
    });
    it('should handle array.length edge case', () => {
        const nums = [1,2,3,4,5];
        rotate(nums, 5);
        expect(nums).toEqual([1,2,3,4,5]);
    });
});
