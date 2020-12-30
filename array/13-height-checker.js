/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    if (!heights || heights.length < 2) return 0;

    let minMoves = 0;

    const heightsClone = [...heights];
    heights.sort((a,b) => a == b ? 0 : a < b ? - 1 : 1);
    for (let i = 0; i < heights.length; i++) {
        if (heightsClone[i] !== heights[i]) minMoves++;
    }

    return minMoves;
};

module.exports = {heightChecker};
