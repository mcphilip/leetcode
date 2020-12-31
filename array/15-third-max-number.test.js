const {thirdMax} = require('./15-third-max-number');

describe('thirdMax', () => {
    it('should return null for null input', () => {
        expect(thirdMax(null)).toEqual(null);
    });
    it('should return null for undefined input', () => {
        expect(thirdMax()).toEqual(null);
    });
    it('should return null for [] input', () => {
        expect(thirdMax([])).toEqual(null);
    });
    it('should return a[0] for a.length = 1', () => {
        expect(thirdMax([5])).toEqual(5);
    });
    it('should return 2 for [1,2] input', () => {
        expect(thirdMax([1,2])).toEqual(2);
    });
    it('should return 1 for [2, 2, 3, 1]', () => {
        expect(thirdMax([2, 2, 3, 1])).toEqual(1);
    });
    it('should return 1 for [3, 2, 1]', () => {
        expect(thirdMax([3, 2, 1])).toEqual(1);
    });
});
