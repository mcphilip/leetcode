const {getRow} = require('./15-pascals-triangle-2');

describe('getRow', () => {
    it('should get row 0', () => {
        expect(getRow(0)).toEqual([1]);
    });
    it('should get row 1', () => {
        expect(getRow(1)).toEqual([1,1]);
    });
    it('should get row 2', () => {
        expect(getRow(2)).toEqual([1,2,1]);
    });
    it('should get row 3', () => {
        expect(getRow(3)).toEqual([1,3,3,1]);
    });
    it('should get row 10', () => {
        expect(getRow(10)).toEqual([1,10,45,120,210,252,210,120,45,10,1]);
    })
});
