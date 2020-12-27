/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(!nums || nums.length == 0) return 0;

    let bestStreak = 0;
    let currentStreak = 0;

    nums.forEach(e => {
        if (e === 1) {
            currentStreak++;
        }
        else {
            if (currentStreak > bestStreak) bestStreak = currentStreak;
            currentStreak = 0;
        }
    });

    return bestStreak > currentStreak ? bestStreak : currentStreak;
}

module.exports = {
    maxConsecutiveOnes
}
