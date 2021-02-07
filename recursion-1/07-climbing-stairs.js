/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 3;

    const map = new Map();
    map.set(1, 1);
    map.set(2, 2);
    map.set(3, 3);

    let stepVal;
    const r = function(step) {
        stepVal = map.get(step);
        if (stepVal) return stepVal;

        stepVal = r(step-1) + r(step-2);

        map.set(step, stepVal);

        return stepVal;
    };

    return r(n);
};

module.exports = {climbStairs};
