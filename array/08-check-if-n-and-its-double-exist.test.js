const {checkIfExist} = require('./08-check-if-n-and-its-double-exist');

describe('checkIfExist', () => {
    it('should return false if null input', () => {
        expect(checkIfExist(null)).toEqual(false);
    });
    it('should return false if undefined input', () => {
        expect(checkIfExist()).toEqual(false);
    });
    it('should return false if length less than 2', () => {
        expect(checkIfExist([])).toEqual(false);
        expect(checkIfExist([1])).toEqual(false);
    });
    it('should return true for [10,2,5,3]', () => {
        expect(checkIfExist([10,2,5,3])).toEqual(true);
    });
    it('should handle zeros without error', () => {
        expect(checkIfExist([0,1,0])).toEqual(true);
    });
    it('should return true for [7,1,14,11]', () => {
        expect(checkIfExist([7,1,14,11])).toEqual(true);
    });
    it('should return false for [3,1,7,11]', () => {
        expect(checkIfExist([3,1,7,11])).toEqual(false);
    });
    it('should handle two element input when false', () => {
        expect(checkIfExist([-2,4])).toEqual(false);
    });
    it('should handle two element input when true', () => {
        expect(checkIfExist([-2,-4])).toEqual(true);
    });
});
