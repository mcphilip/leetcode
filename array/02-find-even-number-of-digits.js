/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    if (!nums || nums.length == 0) return 0;

    let result = 0;

    nums.forEach(num => {
        if (num.toString().length % 2 == 0) result++;
    });

    return result;
};

module.exports = { findNumbers };
