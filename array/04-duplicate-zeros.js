/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0;
    while (i < arr.length-1) {
        if (arr[i] === 0) {
            for (let j = arr.length-1; j > i; j--) {
                arr[j] = arr[j-1];
            }
            arr[i+1] = 0;
            i += 2;
        }
        else {
            i++;
        }
    }
};

module.exports = {
    duplicateZeros
};
