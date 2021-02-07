const {climbStairs} = require('./07-climbing-stairs');

describe('climbStairs', () => {
    it('should handle 1', () => {
        expect(climbStairs(1)).toEqual(1);
    });
    it('should handle 2', () => {
        expect(climbStairs(2)).toEqual(2);
    });
    it('should handle 3', () => {
        expect(climbStairs(3)).toEqual(3);
    });
    it('should handle 11', () => {
        expect(climbStairs(11)).toEqual(144);
    });
});
