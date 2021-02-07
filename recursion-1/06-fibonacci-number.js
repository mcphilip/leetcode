/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 1;

    const map = new Map();
    map.set(0, 0);
    map.set(1, 1);
    map.set(2,1);

    let cachedVal;
    const r = function(n) {
        cachedVal = map.get(n);
        if (cachedVal !== undefined && cachedVal !== null) {
            return cachedVal;
        }

        cachedVal = r(n-1) + r(n-2);

        map.set(n, cachedVal);

        return cachedVal;
    }

    return r(n);
};

module.exports = {fib};
