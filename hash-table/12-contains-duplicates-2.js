/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (!nums || nums.length < 2) return false;
    if (!k || k < 1) return false;

    // optimize for edge case of k = 1:
    if (k === 1) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i-1] === nums[i]) return true;
        }

        return false;
    }

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], i);
        else {
            if (i - map.get(nums[i]) <= k) return true;

            map.set(nums[i], i)
        }
    }

    return false;
};

module.exports = {containsNearbyDuplicate};
