const { removeDuplicates } = require('./07-remove-duplicates-from-sorted-array');

describe('removeDuplicates', () => {
    it('should return 0 for null input', () => {
        expect(removeDuplicates(null)).toEqual(0);
    });
    it('should return 0 for undefined input', () => {
        expect(removeDuplicates()).toEqual(0);
    });
    it('should return 0, set [] for empty array', () => {
        const nums = [];
        expect(removeDuplicates(nums)).toEqual(0);
        expect(nums).toEqual([]);
    });
    it('should return 1, set [x] for single element array', () => {
        const nums = [1];
        expect(removeDuplicates(nums)).toEqual(1);
        expect(nums).toEqual([1]);
    })
    it('should return [x].length, [x] for array with no duplicates', () => {
        const nums = [1,2,3];
        expect(removeDuplicates(nums)).toEqual(3);
        expect(nums).toEqual([1,2,3]);
    });
    it('should return 1, [x] for array with only duplicates', () => {
        const nums = [1,1];
        expect(removeDuplicates(nums)).toEqual(1);
        expect(nums.slice(0,1)).toEqual([1]);
    });
    it('should return 2, [1,2] for [1,1,2] input', () => {
        const nums = [1,1,2];
        expect(removeDuplicates(nums)).toEqual(2);
        expect(nums.slice(0,2)).toEqual([1,2]);
    });
    it('should return 5, [0,1,2,3,4] for [0,0,1,1,1,2,2,3,3,4] input', () => {
        const nums = [0,0,1,1,1,2,2,3,3,4];
        expect(removeDuplicates(nums)).toEqual(5);
        expect(nums.slice(0,5)).toEqual([0,1,2,3,4]);
    });
    it('should return 5, [0,1,2,3,4] for crazy input', () => {
        const nums = [0,0,0,1,2,3,3,3,3,3,4,4];
        expect(removeDuplicates(nums)).toEqual(5);
        expect(nums.slice(0,5)).toEqual([0,1,2,3,4]);
    });
});
