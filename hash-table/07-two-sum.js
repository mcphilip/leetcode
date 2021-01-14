/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0,1];

    let map = new Map();
    map.set(nums[0], 0);
    let j = null;

    for (let i = 1; i < nums.length; i++) {
        j = map.get(target - nums[i]);

        if (j !== null && j !== undefined) return [j, i];

        map.set(nums[i], i);
    }

    return [];
};

module.exports = {twoSum};
