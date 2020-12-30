const {moveZeroes} = require('./11-move-zeroes');

describe('moveZeroes', () => {
    it('should set [] for [] input', () => {
        const a = [];
        moveZeroes(a);
        expect(a).toEqual([]);
    });
    it('should set [1,3,12,0,0] for [0,1,0,3,12] input', () => {
        const a = [0,1,0,3,12];
        moveZeroes(a);
        expect(a).toEqual([1,3,12,0,0]);
    });
    it('should do nothing for no zeroes', () => {
        const a = [1,2,3];
        moveZeroes(a);
        expect(a).toEqual([1,2,3]);
    });
    it('should handle all zeroes input', () => {
        const a = [0,0];
        moveZeroes(a);
        expect(a).toEqual([0,0]);
    });
});
