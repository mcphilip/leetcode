const {duplicateZeros} = require('./04-duplicate-zeros');

describe('duplicateZeros', () => {
    it('should leave array alone if no zeroes', () => {
        const a = [1,2,3,4,5];
        duplicateZeros(a);
        
        expect(a).toEqual([1,2,3,4,5]);
    })
    it('should set array to [1,0,0,2,3,0,0,4] for [1,0,2,3,0,4,5,0] input', () => {
        const a = [1,0,2,3,0,4,5,0];
        duplicateZeros(a);

        expect(a).toEqual([1,0,0,2,3,0,0,4]);
    });
    it('should set array to [0] for [0] input', () => {
        const a = [0];
        duplicateZeros(a);

        expect(a).toEqual([0]);
    });
});
