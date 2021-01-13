/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (!n || n <= 0) return false;

    const set = new Set();
    let nStr = n + '';
    let nextN = 0;

    while (true) {
        nextN = 0;
        for (let i = 0; i < nStr.length; i++) {
            nextN += Number(nStr[i]) * Number(nStr[i]);
        }
        if (nextN === 1) return true;
        else {
            if (set.has(nextN)) break;

            set.add(nextN);
            nStr = nextN + '';            
        }
    }

    return false;
};

module.exports = {isHappy};
