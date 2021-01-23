/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    if (A.length === 0) return 0; 
    if (A.length === 1) return A[0] + B[0] + C[0] + D[0] === 0 ? 1 : 0;

    let total = 0;

    const cdSumsMap = new Map();
    let cdSum;
    let cdSumsMapEntry;

    for (let j = 0; j < C.length; j++) {
        for (let k = 0; k < D.length; k++) {
            cdSum = C[j] + D[k];
            cdSumsMapEntry = cdSumsMap.get(cdSum);
            cdSumsMapEntry = cdSumsMapEntry || 0;

            cdSumsMap.set(cdSum, cdSumsMapEntry + 1);
        }
    }

    console.log(`cdSumsMap: ${[...cdSumsMap.entries()]}`)

    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            cdSumsMapEntry = cdSumsMap.get((A[i]+B[j]) * -1);
            if (cdSumsMapEntry) {
                total += cdSumsMapEntry;
            }
        }
    }

    return total;
};

module.exports = {fourSumCount};
