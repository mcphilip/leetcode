/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    if (!jewels || !stones) return 0;

    const jewelCounts = {};
    jewels.split('').forEach(j => jewelCounts[j] = 0);

    stones.split('').forEach(s => {
        if (jewelCounts[s] !== undefined) jewelCounts[s] += 1;
    });

    return Object.values(jewelCounts).reduce((prev, curr) => prev + curr);
};

module.exports = {numJewelsInStones};
