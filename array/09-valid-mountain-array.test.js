const {validMountainArray} = require('./09-valid-mountain-array');

describe('validMountainArray', () => {
    it('should return false for null input', () => {
        expect(validMountainArray(null)).toEqual(false);
    });
    it('should return false for undefined input', () => {
        expect(validMountainArray()).toEqual(false);
    });
    it('should return false for array length less than 3', () => {
        expect(validMountainArray([])).toEqual(false);
        expect(validMountainArray([1,2])).toEqual(false);
    });
    it('should return false for [3,5,5]', () => {
        expect(validMountainArray([3,5,5])).toEqual(false);
    });
    it('should return true for [0,3,2,1]', () => {
        expect(validMountainArray([0,3,2,1])).toEqual(true);
    });
    it('should return false for [3,2,1,0]', () => {
        expect(validMountainArray([3,2,1,0])).toEqual(false);
    });
    it('should return true for [1,2,1]', () => {
        expect(validMountainArray([1,2,1])).toEqual(true);
    });
    it('should return false for [1,3,3,2,1]', () => {
        expect(validMountainArray([1,3,3,2,1])).toEqual(false);
    });
    it('should return true for [1,2,3,2]', () => {
        expect(validMountainArray([1,2,3,2])).toEqual(true);
    });
    it('should return false for [1,2,2,1]', () => {
        expect(validMountainArray([1,2,2,1])).toEqual(false);
    });
});
