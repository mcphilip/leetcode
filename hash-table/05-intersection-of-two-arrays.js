/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // handle edge cases:
    if (!nums1 || !nums2) return [];
    if (nums1.length === 0 || nums2.length === 0) return [];

    const set = new Set();
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        set.add(nums1[i]);
    }

    for (let j = 0; j < nums2.length; j++) {
        if (set.has(nums2[j])) {
            result.push(nums2[j]);
            set.delete(nums2[j]);
        }
    }

    return result;
};

module.exports = {intersection};
