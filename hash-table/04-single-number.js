/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (!nums || nums.length === 0 || nums.length % 2 === 0) return null;
    if (nums.length === 1) return nums[0];

    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) set.delete(nums[i]);
        else set.add(nums[i]);
    }

    return set.keys().next().value;
};

module.exports = {singleNumber};
