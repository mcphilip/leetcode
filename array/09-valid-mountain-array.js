/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (!arr || arr.length < 3) return false;
    if (arr[0] > arr[1] || arr[arr.length-1] > arr[arr.length-2]) return false;

    let left = 0;
    let right = arr.length - 1;
    let stillValid = true;

    while (stillValid) {
        if (left === right) return true;
        if (left > right) return false;
        if (arr[right] >= arr[right-1] && arr[left] >= arr[left+1]) stillValid = false;
        if (arr[left] < arr[left+1]) left++; 
        if (arr[right] < arr[right-1]) right--;
    }

    return false;
};

module.exports = {validMountainArray};
