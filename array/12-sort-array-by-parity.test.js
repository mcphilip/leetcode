const {sortArrayByParity} = require('./12-sort-array-by-parity');

describe('sortArrayByParity', () => {
    it('should return [] for null input', () => {
        expect(sortArrayByParity(null)).toEqual([]);
    });
    it('should return [] for undefined input', () => {
        expect(sortArrayByParity()).toEqual([]);
    });
    it('should return [] for [] input', () => {
        expect(sortArrayByParity([])).toEqual([]);
    });
    it('should return [2,4,3,1] for [3,1,2,4]', () => {
        const a = [3,1,2,4];
        expect(sortArrayByParity(a)).toEqual([2,4,3,1]);
        expect(a).toEqual([2,4,3,1]);
    })
});
