/*
  solution optimzed for minimum memory usage via in-place array operations
*/
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];

    let row = [];
    let rowJMinus1;
    let nextNum;

    for (let i = 2; i <= rowIndex; i++) {
        if (i === 2) row = [1,2,1];
        else {
            rowJMinus1 = 1;
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) row[j] = 1;
                else {
                    nextNum = rowJMinus1 + row[j];
                    rowJMinus1 = row[j];
                    row[j] = nextNum;
                }
            }
        }
    }

    return row;
};

module.exports = {getRow};
