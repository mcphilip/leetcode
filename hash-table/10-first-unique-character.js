/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s) return -1;
    if (s.length === 1) return 0;

    let map = new Map();
    let val;

    for (let i = 0; i < s.length; i++) {
        val = map.get(s[i]);
        if (!val) {
            map.set(s[i], [i, 1]);
        }
        else {
            map.set(s[i], [val[0], val[1] + 1]);
        }
    }

    let mapEntries = map.entries();
    val = mapEntries.next().value;

    while (val) {
        if (val[1][1] === 1) return val[1][0];

        val = mapEntries.next().value;
    }

    return -1;
};

module.exports = {firstUniqChar};
