/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || nums.length == 0) return 0;
    if (nums.length == 1) return 1;

    let i = nums.length -1;
    let newLength = nums.length;
    while (i > 0) {
        if (nums[i-1] === nums[i]) {
            let j = i - 1;
            while (j >= 0 && nums[j] === nums[i]) {
                j--;
            }
            j++;
            let duplicatesToRemove = i-j;
            while (j < newLength) {
                nums[j+1] = nums[j+duplicatesToRemove+1];
                j++;
            }
            newLength -= duplicatesToRemove;
            i -= duplicatesToRemove;
        }
        i--;
    }

    return newLength;
};

module.exports = {
    removeDuplicates
};
