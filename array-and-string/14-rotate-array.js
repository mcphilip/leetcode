var rotate = function(nums, k) {
    if (k === 0 || k === nums.length) return;

    let ghostNums = [];
    let targetIdx;
    for (let i = nums.length - 1; i >= 0; i--) {
        targetIdx = ((i + k + 1) % (nums.length)) - 1;
        targetIdx = targetIdx < 0 ? nums.length + targetIdx : targetIdx;
        ghostNums[targetIdx] = nums[targetIdx];
        nums[targetIdx] = ghostNums[i] || ghostNums[i] === 0 ? ghostNums[i] : nums[i];
    }
};

module.exports = {rotate};
