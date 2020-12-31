/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (!nums || nums.length == 0) return null;
    if (nums.length == 1) return nums[0];

    let thirdMax = null;
    let secondMax = null;
    let max = nums[0];
    let distinctNumbers = {};
    distinctNumbers[nums[0].toString()] = true;

    for (let i = 1; i < nums.length; i++) {
        if (distinctNumbers[nums[i].toString()] === true) continue;

        distinctNumbers[nums[i].toString()] = true;

        if (nums[i] > max) {
            thirdMax = secondMax;
            secondMax = max;
            max = nums[i];
        }
        else if (secondMax === null || nums[i] > secondMax) {
            thirdMax = secondMax;
            secondMax = nums[i];
        }
        else if (thirdMax === null || nums[i] > thirdMax) {
            thirdMax = nums[i];
        }
    }

    if (Object.keys(distinctNumbers).length < 3) return max;

    return thirdMax;
};

module.exports = {thirdMax};
