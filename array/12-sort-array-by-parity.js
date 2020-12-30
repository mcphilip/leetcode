/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    if (!A || A.length === 0) return [];
    if (A.length === 1) return A;

    let nextEvenIndex = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 1) {
            if (nextEvenIndex < i) nextEvenIndex = i;

            nextEvenIndex = findNextEvenIndex(A, nextEvenIndex + 1);

            if (nextEvenIndex === null) break;
            else {
                let tmp = A[nextEvenIndex];
                A[nextEvenIndex] = A[i];
                A[i] = tmp;
            }
        }
    }

    return A;
};

var findNextEvenIndex = function(arr, index) {
    while (index < arr.length) {
        if (arr[index] % 2 === 0) return index;

        index++;
    }

    return null;
}

module.exports = {sortArrayByParity};
