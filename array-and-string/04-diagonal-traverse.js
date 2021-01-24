/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (!matrix.length) return [];
    if (matrix.length === 1) return matrix[0];

    let xLen = matrix.length;
    let yLen = matrix[0].length;
    let numStripes = xLen >= yLen ? (xLen*2)-1 : (yLen*2)-1
    let result = [matrix[0][0]];
    let i,j;

    for (let stripe = 1; stripe <= numStripes; stripe++) {
        if (stripe % 2 === 0) {
            for (i = stripe, j = 0; j <= stripe; j++, i--) {
                if (i < xLen && j < yLen ) {
                    result.push(matrix[i][j]);
                }
            }
        }
        else {
            for (i = 0, j = stripe; i <= stripe; i++, j--) {
                if (i < xLen && j < yLen ) {
                    result.push(matrix[i][j]);
                }
            }
        }
    }

    return result;
};

module.exports = {findDiagonalOrder};
