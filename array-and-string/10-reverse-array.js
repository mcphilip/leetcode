/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if (!s || s.length === 0 || s.length === 1) return;

    let tmp;
    for (let start = 0, end = s.length - 1; start !== end && start < end; start++, end--) {
        tmp = s[start];
        s[start] = s[end];
        s[end] = tmp;
    };
};

module.exports = {reverseString};
