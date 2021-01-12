const {containsDuplicate} = require('./03-contains-duplicate');

describe('containsDuplicate', () => {
    it('should handle bad data', () => {
        expect(containsDuplicate(null)).toEqual(false);
        expect(containsDuplicate()).toEqual(false);
        expect(containsDuplicate([])).toEqual(false);
    });
    it('should return false for single element array', () => {
        expect(containsDuplicate([0])).toEqual(false);
    });
    it('should handle 2 element array with duplicate', () => {
        expect(containsDuplicate([0,0])).toEqual(true);
    });
    it('should handle 2 element array without duplicate', () => {
        expect(containsDuplicate([0,1])).toEqual(false);
    });
    it('should handle N element array with duplicates', () => {
        expect(containsDuplicate([0,1,2,3,0])).toEqual(true);
    });
    it('should handle N element array without duplicate', () => {
        expect(containsDuplicate([0,1,2,3,4,5])).toEqual(false);
    });
});
