/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (!nums || nums.length < 2) return [];

    nums.sort((a,b) => a < b ? -1 : a == b ? 0 : 1);

    const result = [];

    if (nums[0] > 1) {
        for (let i = 1; i < nums[0]; i++) {
            result.push(i);
        }
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i-1] > 1) {
            for (let j = (nums[i-1] + 1); j < nums[i]; j++) {
                result.push(j);
            }
        }
        if (i == nums.length - 1 && nums[i] < nums.length) {
            for (let j = (nums[i] + 1); j <= nums.length; j++) {
                result.push(j);
            }
        }
    }

    return result;
};

module.exports = {findDisappearedNumbers};
