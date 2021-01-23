/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (nums.length === 1) return nums;

    let hasRepeatedNumber = false;
    let map = new Map();
    let mapVal;

    for (let i = 0; i < nums.length; i++) {
        mapVal = map.get(nums[i]);
        mapVal = mapVal || 0;
        if (!hasRepeatedNumber && mapVal > 0) hasRepeatedNumber = true;

        map.set(nums[i], mapVal + 1);
    }

    // console.log(`hasRepeatedNubmer: ${hasRepeatedNumber}, map: ${[...map.entries()]}`);

    if (!hasRepeatedNumber) return nums;

    let sortedDescending = [...map.entries()].sort((entryA, entryB) => entryA[1] < entryB[1] ? 1 : entryA[1] === entryB[1] ? 0 : -1);

    // console.log(`sortedDescending: ${sortedDescending}`);

    let results = [];
    for (let i = 0; i < k; i++) {
        results.push(sortedDescending[i][0]);
    }

    return results;
};

module.exports = {topKFrequent};
