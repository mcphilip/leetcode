const { merge } = require('./05-merge-sorted-arrays');

describe('merge', () => {
    it('should set [] for [] inputs', () => {
        let nums1 = [];
        merge(nums1, 0, [], 0);
        expect(nums1).toEqual([]);
    });
    it('should set [1,2,2,3,5,6] for leetcode example inputs', () => {
        let nums1 = [1,2,3,0,0,0];
        merge(nums1, 3, [2,5,6], 3)
        expect(nums1).toEqual([1,2,2,3,5,6]);
    });
    it('should set [1,2,3,4] for edge case inputs #1', () => {
        let nums1 = [0,0,0,0];
        merge(nums1, 0, [1,2,3,4], 4);
        expect(nums1).toEqual([1,2,3,4]);
    });
    it('should set [1,2,3,4] for edge case inputs #2', () => {
        let nums1 = [1,2,3,4];
        merge(nums1, 4, [0,0,0,0], 0);
        expect(nums1).toEqual([1,2,3,4]);
    });
    it('should set [1,2,3,4,5,6] for all nums2 elements > nums1 elements', () => {
        let nums1 = [1,2,3,4,0,0,0];
        merge(nums1, 4, [5,6,7], 3);
        expect(nums1).toEqual([1,2,3,4,5,6,7]);
    });
    it('should work for crazy input', () => {
        let nums1 = [-180,-33,0,1,16,89,0,0,0];
        merge(nums1, 6, [-200, 0, 88], 3);
        expect(nums1).toEqual([-200,-180,-33,0,0,1,16,88,89]);
    });
});
