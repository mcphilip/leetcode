/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1],[1,1]];

    let results = [[1],[1,1]];
    let rowIdx = 2;
    let newRow = [];
    let j = 0;

    while (rowIdx < numRows) {
        for (j = 0; j <= rowIdx; j++) {
            if (j === 0 || j === rowIdx) {
                newRow.push(1);
            }
            else {
                newRow.push(results[rowIdx-1][j-1] + results[rowIdx-1][j])
            }
        }

        results.push(newRow);
        newRow = [];
        rowIdx++;
    }

    return results;
};

module.exports = {generate};
