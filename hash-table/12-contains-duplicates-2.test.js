const {containsNearbyDuplicate} = require('./12-contains-duplicates-2');

describe('containsNearbyDuplicate', () => {
    it('should handle bad input', () => {
        expect(containsNearbyDuplicate()).toEqual(false);
        expect(containsNearbyDuplicate(null, 1)).toEqual(false);
        expect(containsNearbyDuplicate([1,2,3], null)).toEqual(false);
        expect(containsNearbyDuplicate(null, null)).toEqual(false);
        expect(containsNearbyDuplicate(undefined, 1)).toEqual(false);
        expect(containsNearbyDuplicate([1,2,3])).toEqual(false);
    });
    it('should handle array length less than 2 input', () => {
        expect(containsNearbyDuplicate([], 1)).toEqual(false);
        expect(containsNearbyDuplicate([1], 1)).toEqual(false);
    });
    it('should handle k input less than 1', () => {
        expect(containsNearbyDuplicate([1,2], 0)).toEqual(false);
    });
    it('should optimally handle k = 1 input', () => {
        expect(containsNearbyDuplicate([1,2,3,4,5,6,7,8,1,1], 1)).toEqual(true);
    });
    it('should handle k = 2 input', () => {
        expect(containsNearbyDuplicate([1,2,3,4,5,6,1,8,0,1], 2)).toEqual(false);
    });
    it('should return true for [1,2,3,1], k = 3', () => {
        expect(containsNearbyDuplicate([1,2,3,1], 3)).toEqual(true);
    });
    it('should return true for [1,0,1,1], k = 1', () => {
        expect(containsNearbyDuplicate([1,0,1,1], 1)).toEqual(true);
    });
    it('should return false for [1,2,3,1,2,3], k = 2', () => {
        expect(containsNearbyDuplicate([1,2,3,1,2,3], 2)).toEqual(false);
    });
});
