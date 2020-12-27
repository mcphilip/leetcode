const {maxConsecutiveOnes} = require('./max-consecutive-ones');

describe('maxConsecutiveOnes', () => {
    it('should return 0 for null input', () => {
        expect(maxConsecutiveOnes(null)).toEqual(0);
    })
    it('should return 0 for undefined input', () => {
        expect(maxConsecutiveOnes()).toEqual(0);
    });
    it('should return 0 for empty array', () => {
        expect(maxConsecutiveOnes([])).toEqual(0);
    });
    it('should return 3 for [1,1,0,1,1,1]', () => {
        expect(maxConsecutiveOnes([1,1,0,1,1,1])).toEqual(3);
    });
    it('should return 6 for crazy input', () => {
        expect(maxConsecutiveOnes([1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1])).toEqual(6);
    });    
});
