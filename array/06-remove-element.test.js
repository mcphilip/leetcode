const { removeElement } = require('./06-remove-element');

describe('removeElement', () => {
    it('should return 0, set [] when number of elements is zero', () => {
        const nums = [];

        expect(removeElement(nums, 5)).toEqual(0);
        expect(nums).toEqual([]);
    });
    it('should return [x].length, [x] when value is > 50', () => {
        const nums = [1,2,3,4,51];

        expect(removeElement(nums, 51)).toEqual(nums.length);
        expect(nums).toEqual([1,2,3,4,51]);
    });
    it('should return [x].length, [x] when value to remove does not exist in nums', () => {
        const nums = [1,2,3,4,5];

        expect(removeElement(nums,6)).toEqual(nums.length);
        expect(nums).toEqual([1,2,3,4,5]);
    });
    it('should 0, set [] when all elements removed', () => {
        const nums = [1,1];

        expect(removeElement(nums, 1)).toEqual(0);
    });
    it('should return 2, set [2,2] for leetcode example #1', () => {
        const nums  = [3,2,2,3];

        expect(removeElement(nums, 3)).toEqual(2);
        expect(nums.slice(0,2)).toEqual([2,2]);
        
    })
    it('should return 5, set [0,1,4,0,3] for leetcode example #2', () => {
        const nums = [0,1,2,2,3,0,4,2];

        expect(removeElement(nums, 2)).toEqual(5);
        expect(nums.slice(0,5)).toEqual([0,1,3,0,4]);
    });
});
