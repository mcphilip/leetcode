/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // handle edge cases
    if (nums.length == 0) return 0;
    if (val >= 51) return nums.length;

    let newLength = nums.length;
    let i = nums.length - 1;

    while (i >= 0) {
        if (nums[i] === val) {
            let k = i;
            for (let j = i; j < newLength - 1; j++) {
                nums[k] = nums[j+1];
                k++;
            }
            newLength--;
        }
        i--;
    }

    return newLength;
};

module.exports = {
    removeElement
};
