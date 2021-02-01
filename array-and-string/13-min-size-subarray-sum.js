/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {    
    if (nums.length === 0) return 0;
    if (nums.length === 1) {
        if (nums[0] >= s) return 1;
        return 0;
    }

    let result = 0;

    let r = minSubArrayFromLeftIdx(nums, s, 0, 0, nums.length - 1, 0);
    console.log(`minSubArrayFromLeft: ${JSON.stringify(r)}, result: ${result}`);

    if (!r) return 0;
    if (r.leftIdx === r.rightIdx) return 1;

    r = minSubArrayFromRightIdx(nums, s, r.leftIdx, r.rightIdx, r.sum);
    result = r.rightIdx - r.leftIdx + 1;
    console.log(`minSubArrayFromRight: ${JSON.stringify(r)}, result: ${result}`);

    if (r.rightIdx === nums.length - 1) return result;
    if (r.leftIdx === r.rightIdx) return 1;

    for (let i = r.leftIdx + 1; i <= nums.length - 1; i++) {
        if (i === nums.length - 1) {
            if (nums[i] >= s) return 1;
            
            return result;
        } 

        r = minSubArrayFromLeftIdx(nums, s, i, r.rightIdx, nums.length - 1, r.sum - nums[i-1]);

        if (!r) return result;
        result = result > r.rightIdx - r.leftIdx + 1 ? r.rightIdx - r.leftIdx + 1 : result;
        console.log(`minSubArrayFromLeft: ${JSON.stringify(r)}, result: ${result}`);
        if (r.rightIdx === r.leftIdx) return 1;

        r = minSubArrayFromRightIdx(nums, s, i, r.rightIdx, r.sum);
        result = result > r.rightIdx - r.leftIdx + 1 ? r.rightIdx - r.leftIdx + 1 : result;
        console.log(`minSubArrayFromRight: ${JSON.stringify(r)}, result: ${result}`);

        if (r.rightIdx === r.leftIdx) return 1;

        i = r.leftIdx;
    }

    return result;
};

const minSubArrayFromLeftIdx = function(nums, s, leftIdx, rightIdx, maxRightIdx, startingSum) {
    console.log(`[minSubArrayFromLeftIdx] params: `, {s, leftIdx, rightIdx, maxRightIdx, startingSum});
    if (startingSum && startingSum >= s) {
        return {
            leftIdx: leftIdx,
            rightIdx: rightIdx,
            sum: startingSum
        };
    }
    if (nums[leftIdx] >= s) {
        return {
            leftIdx: leftIdx,
            rightIdx: leftIdx,
            sum: nums[leftIdx]
        };
    }

    let sum = startingSum ? startingSum - nums[rightIdx] : 0;
    for (;rightIdx <= maxRightIdx; rightIdx++) {
        sum += nums[rightIdx];

        if (sum >= s) {
            return {leftIdx, rightIdx, sum};
        }
    }
    return null;
};

const minSubArrayFromRightIdx = function(nums, s, leftIdx, rightIdx, sum) {
    console.log(`[minSubArrayFromRightIdx] params: `, {s, leftIdx, rightIdx, sum});
    if (sum < s) return null;

    let previousSum = sum;
    while (leftIdx <= rightIdx && sum >= s) {
        previousSum = sum;
        sum -= nums[leftIdx];
        leftIdx++;
    }

    let r = {
        leftIdx: leftIdx - 1,
        rightIdx: rightIdx,
        sum: previousSum
    }

    return r;
}

module.exports = {minSubArrayFromLeftIdx, minSubArrayFromRightIdx, minSubArrayLen};
