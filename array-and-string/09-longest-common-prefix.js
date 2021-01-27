var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return '';
    if (strs.length === 1) return strs[0];

    let commonPrefixArray = strs[0].split('');
    let curStr;

    for (let i = 1; i < strs.length; i++) {
        if (strs[i][0] !== commonPrefixArray[0]) return '';

        curStr = strs[i];
        if (curStr.length < commonPrefixArray.length) {
            commonPrefixArray.length = curStr.length;
        }
        for (let j = 1; j < curStr.length; j++) {
            if (curStr[j] !== commonPrefixArray[j]) {
                commonPrefixArray.length = j;
            }
            if (j === curStr.length - 1) {
                commonPrefixArray.length = j+1;
            }
        }
    }

    return commonPrefixArray.join('');
};

module.exports = {longestCommonPrefix};
