const {getRow} = require("./05-pascals-triangle");

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
    it('should get row 9', () => {
        expect(getRow(9)).toEqual([1,9,36,84,126,126,84,36,9,1]);
    });
});
