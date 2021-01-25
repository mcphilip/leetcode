var spiralOrder = function(matrix) {
    if (matrix.length === 1) return matrix[0];

    let results = [];
    let xLen = matrix.length;
    let yLen = matrix[0].length;
    let size = xLen * yLen;
    let left = 0;
    let top = 0;
    let bottom = xLen-1;
    let right = yLen-1;

    while (results.length !== size) {

        // traverse left to right
        for (let y = top; y <= right; y++) {
            results.push(matrix[left][y]);
        }
        if (results.length === size) break;
        console.log(`results: ${results}`)
        top++;
        // traverse top to bottom
        for (let x = top; x <= bottom; x++) {
            results.push(matrix[x][right]);
        }
        if (results.length === size) break;
        console.log(`results: ${results}`)
        // traverse right to left
        right--;
        for (let y = right; y >= left; y--) {
            results.push(matrix[bottom][y]);
        }
        if (results.length === size) break;
        console.log(`results: ${results}`)
        bottom--;
        // traverse bottom to top
        for (let x = bottom; x >= top; x--) {
            results.push(matrix[x][left]);
        }
        left++;
        console.log(`results: ${results}`)
    }

    return results;
};

module.exports = {spiralOrder};
