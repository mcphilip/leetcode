/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];

    let nextRow;

    const r = function(previousRow) {
        console.log(`previousRow: ${previousRow}`);
        nextRow = [1];
        for (let i = 1; i < rowIndex; i++) {
            nextRow.push(previousRow[i-1] + previousRow[i]);
        }
        nextRow.push(1);

        if (nextRow.length < rowIndex + 1) {
            getRow(nextRow);
        }
    }

    r([1,1]);

    return nextRow;
};

module.exports = {getRow};
