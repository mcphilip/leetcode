/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (!arr || arr.length == 0) return [];
    if (arr.length == 1) {
        arr[0] = -1;
        return arr;
    }
    if (arr.length == 2) {
        arr[0] = arr[1];
        arr[1] = -1;
        return arr;
    }

    let i = 0;
    let greatestIndex = findIndexOfGreatest(arr, 1);
    while (i < arr.length - 1) {
        if (i == greatestIndex) {
            greatestIndex = findIndexOfGreatest(arr, greatestIndex + 1);
        }
        arr[i] = arr[greatestIndex];

        i++;
    }

    arr[arr.length-1] = -1;

    console.debug(`arr: ${arr}`);
    return arr;
};

function findIndexOfGreatest(arr, startIndex) {
    let greatestIndex = startIndex;
    let i = startIndex + 1;
    while (i < arr.length) {
        if (arr[i] >= arr[greatestIndex]) {
            greatestIndex = i;
        }
        i++;
    }

    return greatestIndex;
};

module.exports = {replaceElements, findIndexOfGreatest};
