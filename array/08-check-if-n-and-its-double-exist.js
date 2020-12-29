/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    if (!arr || arr.length < 2) return false;

    const numberMap = {};
    for (let i = 0; i < arr.length; i++) {
        // check if exists before adding current:
        if (numberMap[(arr[i]*2).toString()] === true) return true;
        if ((arr[i] % 2) == 0 && numberMap[(arr[i]/2).toString()] === true) return true;

        numberMap[arr[i].toString()] = true;
    }

    return false;
};

module.exports = {checkIfExist};
