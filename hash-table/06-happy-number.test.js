const {isHappy} = require('./06-happy-number');

describe('isHappy', () => {
    it('should handle bad input', () => {
        expect(isHappy(null)).toEqual(false);
        expect(isHappy()).toEqual(false);
        expect(isHappy(0)).toEqual(false);
    });
    it('should handle leetcode examples', () => {
        expect(isHappy(2)).toEqual(false);
        expect(isHappy(19)).toEqual(true);
    });
});
