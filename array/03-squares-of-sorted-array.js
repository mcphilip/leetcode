/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    if (!nums || nums.length == 0) return [];

    if (nums[0] >= 0) {
        // e.g. [0,3,9]
        // simple case, inplace squares
        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums[i] * nums[i];
        }
        return nums;
    }
    else if (nums[nums.length-1] < 0) {
        // e.g. [-9,-3,-2]
        // square and insert into new array
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            result.unshift(nums[i]*nums[i]);
        }
        return result;
    }
    else {
        // e.g. [-9,-3,-2,0,3,9]
        // double pointer approach
        const result = [];
        let l = 0;
        let r = nums.length-1;
        while (result.length < nums.length) {
            let lSquare = nums[l]*nums[l];
            let rSquare = nums[r]*nums[r];
            if (lSquare >= rSquare) {
                result.unshift(lSquare);
                l++;
            }
            else {
                result.unshift(rSquare);
                r--;
            }
        }
        return result;
    }
};

module.exports = {
    sortedSquares
};
