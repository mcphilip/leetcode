/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length === 0) return -1;
    if (nums.length === 1) return 0;
    if (nums.length === 2) {
        if (nums[0] === 0) return 1;
        if (nums[1] === 0) return 0;
        return -1;
    }

    let leftSum = 0;
    let rightSum = 0;
    let idx = -1;

    for (let i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }

    if (leftSum === rightSum) return 0;

    for (let i = 1; idx === -1 && i < nums.length; i++) {
        leftSum += nums[i-1];
        rightSum -= nums[i];
        //console.log(`leftSum: ${leftSum}, rightSum: ${rightSum}, pivot: ${nums[i]}, i: ${i}`);
        if (leftSum === rightSum) idx = i;
    }

    return idx;
};

module.exports = {pivotIndex};
