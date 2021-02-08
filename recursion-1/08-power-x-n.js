var myPow = function(x, n) {
    return x ** n;
    /*
        tail recusion doesn't work in leetcode, even with 'use strict' on...
        if (n === 0) return 1;

        return r(x, n, n < 0 ? (1/x) : x, 1);
    */
};

const r = function(x, n, total, idx) {
    if (idx === Math.abs(n)) {
        return total;
    }

    return r(x, n, n < 0 ? ((1/x)*total) : (total*x), idx + 1);
}

module.exports = {myPow};
