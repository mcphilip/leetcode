const { findNumbers } = require('./02-find-even-number-of-digits');

describe('findNumbers', () => {
    it('should return 0 for null input', () => {
        expect(findNumbers(null)).toEqual(0);
    });
    it('should return 0 for undefined input', () => {
        expect(findNumbers()).toEqual(0);
    });
    it('should return 0 for empty array input', () => {
        expect(findNumbers([])).toEqual(0);
    });
    it('should return 2 for [12,345,2,6,7896]', () => {
        expect(findNumbers([12,345,2,6,7896])).toEqual(2);
    })
    it('should return 1 for [555,901,482,1771]', () => {
        expect(findNumbers([555,901,482,1771])).toEqual(1);
    })
})
