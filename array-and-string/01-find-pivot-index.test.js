const {pivotIndex} = require('./01-find-pivot-index');

describe('pivotIndex', () => {
    it('should handle edge cases', () => {
        expect(pivotIndex([])).toEqual(-1);
        expect(pivotIndex([1])).toEqual(0);
        expect(pivotIndex([0,1])).toEqual(1);
        expect(pivotIndex([1,0])).toEqual(0);
    })
    it('should return 3 for [1,7,3,6,5,6]', () => {
        expect(pivotIndex([1,7,3,6,5,6])).toEqual(3);
    })
    it('should return -1 for [1,2,3]', () => {
        expect(pivotIndex([1,2,3])).toEqual(-1);
    });
    it('should return 0 for [0,1,2,-3]', () => {
        expect(pivotIndex([0,1,2,-3])).toEqual(0);
    });
    it('should return -1 for [1,-1,0]', () => {
        expect(pivotIndex([1,-1,0])).toEqual(2);
    });
}); 
