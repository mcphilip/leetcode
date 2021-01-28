/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    if (nums.length === 2) return Math.min(nums[0], nums[1]);

    nums.sort((a,b) => a - b);

    let maxMinPairSum = 0;

    for (let i = 0; i < nums.length; i += 2) {
        maxMinPairSum += Math.min(nums[i], nums[i+1]);
    }

    return maxMinPairSum;
};

module.exports = {arrayPairSum};
