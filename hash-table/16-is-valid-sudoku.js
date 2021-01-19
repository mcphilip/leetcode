/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if (!board || board.length !== 9) return false;

    const rowMaps = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const columnMaps = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const boxMaps = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    let n;
    let k;

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            n = board[i][j];

            if (n !== '.') {
                k = buildKey(i,j);

                if (rowMaps[i][n] || columnMaps[j][n] || boxMaps[k][n]) {
                    console.log(`conflicting number: ${n} in row=${i+1}, columns=${j+1}`);
                    return false;
                }

                rowMaps[i][n] = true;
                columnMaps[j][n] = true;
                boxMaps[k][n] = true;
            }
        }
    }

    return true;
};

var buildKey = function(i,j) {
    // return box number 0-8
    let box = null;

    if (i <= 2) {
        if (j <= 2) {
            box = 0;
        }
        else if (j >= 3 && j <= 5) {
            box = 1;
        }
        else {
            box = 2;
        }
    }
    else if (i >= 3 && i <= 5) {
        if (j <= 2) {
            box = 3;
        }
        else if (j >= 3 && j <= 5) {
            box = 4;
        }
        else {
            box = 5;
        }
    }
    else {
        if (j <= 2) {
            box = 6;
        }
        else if (j >= 3 && j <= 5) {
            box = 7;
        }
        else {
            box = 8;
        }
    }

    return box;
};

module.exports = {buildKey, isValidSudoku};
