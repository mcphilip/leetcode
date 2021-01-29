/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let results = [];
    let rightPtrIdx = numbers.length-1;
    let rightPtr = numbers[rightPtrIdx];
    let leftPtr;
    for (let leftPtrIdx = 0; leftPtrIdx < numbers.length; leftPtrIdx++) {
        results[0] = leftPtrIdx + 1;
        leftPtr = numbers[leftPtrIdx];

        if (leftPtr + rightPtr > target) {
            while (leftPtr + rightPtr > target) {
                rightPtrIdx--;
                rightPtr = numbers[rightPtrIdx];
            }
        }

        if (leftPtr + rightPtr === target) {
            results[1] = rightPtrIdx + 1;
            break;
        }
    }

    return results;
};

module.exports = {twoSum};
