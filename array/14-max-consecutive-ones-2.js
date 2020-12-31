/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if (!nums || nums.length == 0) return 0;
    if (nums.length == 1) return 1;

    // length of 1 streak with flipped 0 = length of 1 streak to the left + 1 + length of 1 streak to the right

    // unoptimized solution, calculate left and right streak for every zero, storing max value:
    let maxStreak = 1;
    let currentStreak = 1;
    let zeroFound = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroFound = true;
            currentStreak = calculateStreak(nums, i)
            if (currentStreak > maxStreak) maxStreak = currentStreak;
        }
    }

    if (!zeroFound) return nums.length;

    return maxStreak;
};

var calculateStreak = function(a, startIndex) {
    let streak = 1; // account for the zero being flipped
    // left:
    for (let i = startIndex - 1; i >= 0; i--) {
        if (a[i] === 1) streak++;
        else break;
    }

    // right:
    for (let j = startIndex + 1; j < a.length; j++) {
        if (a[j] === 1) streak++;
        else break;
    }

    return streak;
};

module.exports = {calculateStreak, findMaxConsecutiveOnes};
