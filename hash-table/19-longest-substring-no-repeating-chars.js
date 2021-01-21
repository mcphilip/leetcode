/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    if (s.length === 1) return 1;

    let longestStreak = 0;
    let set, currentStreak, c;

    for (let i = 0; i < s.length; i++) {
        c = s[i];
        set = new Set();
        currentStreak = 0;
        
        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) break;

            set.add(s[j]);
            currentStreak++;
        }

        if (currentStreak > longestStreak) longestStreak = currentStreak;
    }

    return longestStreak;
};

module.exports = {lengthOfLongestSubstring};
