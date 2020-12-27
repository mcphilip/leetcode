const { sortedSquares } = require('./03-squares-of-sorted-array');

describe('sortedSquares', () => {
    it('should return [] for null input', () => {
        expect(sortedSquares(null)).toEqual([]);
    });
    it('should return [] for undefined input', () => {
        expect(sortedSquares()).toEqual([]);
    });
    it('should return [] for [] input', () => {
        expect(sortedSquares([])).toEqual([]);
    });
    it('should return [0,1,9,16,100] for [-4,-1,0,3,10]', () => {
        expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
    });
    it('should return [4,9,9,49,121] for [-7,-3,2,3,11]', () => {
        expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
    });
    it('should return [0,4,9,81] for [0,2,3,9]', () => {
        expect(sortedSquares([0,2,3,9])).toEqual([0,4,9,81]);
    });
    it('should return [4,9,81] for [-9,-3,-2]', () => {
        expect(sortedSquares([-9,-3,-2])).toEqual([4,9,81]);
    });
});
