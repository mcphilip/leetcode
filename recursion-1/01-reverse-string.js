/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (!s || s.length < 2) return;

    const recursiveStep = function(letter, idx) {
        if (idx < s.length - 1) {
            recursiveStep(s[idx + 1], idx + 1);
        }
        let newIdx = s.length - 1 - idx;
        s[newIdx] = letter;
    };

    return recursiveStep(s[0], 0);
};

module.exports = {reverseString};
