/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (needle.length > haystack.length) return -1;

    for (let idxH = 0; idxH < haystack.length - needle.length; idxH++) {
        if (needle[0] === haystack[idxH]) {
            let idxN = 0;
            let idxH2 = idxH;
            while (haystack[idxH2] === needle[idxN]) {
                if (idxN === needle.length - 1) {
                    return idxH;
                }
                idxH2++;
                idxN++;
            }
        } 
    }

    return -1;
};

module.exports = {strStr};
