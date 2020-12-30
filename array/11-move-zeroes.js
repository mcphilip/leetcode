/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || nums.length < 2) return;

    // [0,1,0,3,0,12]
    // number after x zeroes moves x positions left
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
            continue;
        }

        if (zeroCount > 0) {
            nums[i-zeroCount] = nums[i];
        }
    }

    // zero out zeroCount elements at the end of the array
    for (let j = nums.length-zeroCount; j < nums.length; j++) {
        nums[j] = 0;
    }
};

module.exports = {moveZeroes};
