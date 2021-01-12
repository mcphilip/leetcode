/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (!nums || nums.length < 2) return false;

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;

        set.add(nums[i]);
    }

    return false;
};

module.exports = {containsDuplicate};
