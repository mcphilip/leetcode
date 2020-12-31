const {calculateStreak, findMaxConsecutiveOnes} = require('./14-max-consecutive-ones-2');

describe('calculateStreak', () => {
    it('should return 2 for [0,1,0], 0 input', () => {
        expect(calculateStreak([0,1,0], 0)).toEqual(2);
    });
    it('should return 2 for [0,1,0], 2 input', () => {
        expect(calculateStreak([0,1,0], 2)).toEqual(2);
    });
    it('should return 5 for [1,1,0,1,1], 2 input', () => {
        expect(calculateStreak([1,1,0,1,1], 2)).toEqual(5);
    });
});

describe('findMaxConsecutiveOnes', () => {
    it ('should return 0 for null input', () => {
        expect(findMaxConsecutiveOnes(null)).toEqual(0);
    });
    it('should return 0 for undefined input', () => {
        expect(findMaxConsecutiveOnes()).toEqual(0);
    });
    it('should return 0 for empty array input', () => {
        expect(findMaxConsecutiveOnes([])).toEqual(0);
    });
    it('should return 1 for array length 1', () => {
        expect(findMaxConsecutiveOnes([0])).toEqual(1);
    });
    it('should return [x].length for all 1s', () => {
        expect(findMaxConsecutiveOnes([1,1,1])).toEqual(3);
    });
    it('should reutrn 1 for all 0s', () => {
        expect(findMaxConsecutiveOnes([0,0,0])).toEqual(1);
    });
    it('should return 4 for [1,0,1,1,0]', () => {
        expect(findMaxConsecutiveOnes([1,0,1,1,0])).toEqual(4);
    });
});
