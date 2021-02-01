const {minSubArrayFromLeftIdx, minSubArrayFromRightIdx, minSubArrayLen} = require('./13-min-size-subarray-sum');

describe('minSubArrayFromRightIdx', () => {
    const nums = [1,6,44,34,77,1,14,5,7,900];
    it('should handle ending on smallest subarray', () => {
        let r = minSubArrayFromRightIdx(nums, 40, 0, 2, 51);

        expect(r.leftIdx).toEqual(2);
        expect(r.rightIdx).toEqual(2);
        expect(r.sum).toEqual(44);
    });
    it('should handle starting at largest subarray', () => {
        let r = minSubArrayFromRightIdx(nums, 51, 0, 2, 51);

        expect(r.leftIdx).toEqual(0);
        expect(r.rightIdx).toEqual(2);
        expect(r.sum).toEqual(51);
    });
    it('should handle single element array', () => {
        let r = minSubArrayFromRightIdx(nums, 44, 2, 2, 44);

        expect(r.leftIdx).toEqual(2);
        expect(r.rightIdx).toEqual(2);
        expect(r.sum).toEqual(44);
    });
    it('should return null for bad data', () => {
        let r = minSubArrayFromRightIdx(nums, 45, 2, 2, 44);

        expect(r).toEqual(null);
    });
});

describe('minSubArrayFromLeftIdx', () => {
    it('should work as expected', () => {
        const nums = [1,9,3,2,5,6,3,8,9,9000];

        let r = minSubArrayFromLeftIdx(nums, 1, 0, 1, 9);

        expect(r.leftIdx).toEqual(0);
        expect(r.rightIdx).toEqual(0);
        expect(r.sum).toEqual(1);

        r = minSubArrayFromLeftIdx(nums, 11, 0, 0, 9);

        expect(r.leftIdx).toEqual(0);
        expect(r.rightIdx).toEqual(2);
        expect(r.sum).toEqual(13);

        r = minSubArrayFromLeftIdx(nums, 11, 0, 1, 1);

        expect(r).toEqual(null);

        r = minSubArrayFromLeftIdx(nums, 17, 7, 7, 9);

        expect(r.leftIdx).toEqual(7);
        expect(r.rightIdx).toEqual(8);
        expect(r.sum).toEqual(17);

        r = minSubArrayFromLeftIdx(nums, 9000, 0, 0, 9);

        expect(r.leftIdx).toEqual(0);
        expect(r.rightIdx).toEqual(9);
        expect(r.sum).toEqual(9046);
    });
    it('should handle failed test #1', () => {
        let nums = [2,3,1,2,4,3];
        let r = minSubArrayFromLeftIdx(nums, 9, 0, 0, nums.length - 1);

        expect(r.leftIdx).toEqual(0);
        expect(r.rightIdx).toEqual(4);
        expect(r.sum).toEqual(12);
    });
    it('should handle failed test #2', () => {
        let nums = [2,3,1,2,4,3];
        let r = minSubArrayFromLeftIdx(nums, 9, 1, 4, nums.length - 1, 10);

        expect(r.leftIdx).toEqual(1);
        expect(r.rightIdx).toEqual(4);
        expect(r.sum).toEqual(10);
    });
});
describe('minSubArrayLen', () => {
    it('should handle example #1', () => {
        expect(minSubArrayLen(7, [2,3,1,2,4,3])).toEqual(2);
    });
    it('should handle failed test #1', () => {
        expect(minSubArrayLen(9, [2,3,1,2,4,3])).toEqual(3);
    });
    it('should handle empty array', () => {
        expect(minSubArrayLen(1, [])).toEqual(0);
    });
    it('should handle no subarray found', () => {
        expect(minSubArrayLen(1000, [1,2,3,4,5])).toEqual(0);
    });
});
