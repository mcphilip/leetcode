/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 1) return 0;

    let maxIdx = 0;
    let nextMaxIdx = null; 

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] >= nums[maxIdx]) {
            nextMaxIdx = maxIdx;
            maxIdx = i;
        }
        else if (nextMaxIdx === null) {
            nextMaxIdx = i;
        }
        else if (nums[i] >= nums[nextMaxIdx]) {
            nextMaxIdx = i;
        }
    }

    console.log(`nums[maxIdx]: ${nums[maxIdx]}, nums[nextMaxIdx]: ${nums[nextMaxIdx]}`);

    if (nums[maxIdx] >= 2 * nums[nextMaxIdx]) return maxIdx;

    return -1;
};

module.exports = {dominantIndex};
