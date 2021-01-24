const {findDiagonalOrder} = require('./04-diagonal-traverse');

describe('findDiagonalOrder', () => {
    it('should handle 1 x 1 test case', () => {
        expect(findDiagonalOrder([[1]])).toEqual([1]);
    });
    it('should handle 2 x 2 test case', () => {
        expect(findDiagonalOrder([[1,2],[3,4]])).toEqual([1,2,3,4]);
    });
    it('should handle 3 X 2 test case', () => {
        expect(findDiagonalOrder([[1,2],[4,3],[7,8]])).toEqual([1,2,4,7,3,8]);
    });
    it('should handle 3 x 3 test case', () => {
        expect(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,4,7,5,3,6,8,9]);
    });
    it('should handle 2 x 3 test case', () => {
        expect(findDiagonalOrder([[1,2,3],[4,5,6]])).toEqual([1,2,4,5,3,6]);
    });
    it('should handle 3 x 1 test case', () => {
        expect(findDiagonalOrder([[1,2,3]])).toEqual([1,2,3]);
    });
    it('should handle 1 x 0 test case', () => {
        expect(findDiagonalOrder([[]])).toEqual([]);
    });
    it('should handle 0 x 0 test case', () => {
        expect(findDiagonalOrder([])).toEqual([]);
    });
    it('should handle failed test case #1', () => {
        expect(findDiagonalOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])).toEqual([1,2,5,9,6,3,4,7,10,13,14,11,8,12,15,16]);
    });
});
