const {singleNumber} = require('./04-single-number');

describe('singleNumber', () => {
    it('should handle bad data', () => {
        expect(singleNumber(null)).toEqual(null);
        expect(singleNumber()).toEqual(null);
        expect(singleNumber([])).toEqual(null);
        expect(singleNumber([2,2])).toEqual(null);
    });
    it('should handle single element array', () => {
        expect(singleNumber([0])).toEqual(0);
    });
    it('should handle 3 element array', () => {
        expect(singleNumber([0,1,0])).toEqual(1);
    });
    it('should handle N element array', () => {
        expect(singleNumber([4,1,2,1,2])).toEqual(4);
    });
});
