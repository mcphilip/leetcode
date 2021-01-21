const {numJewelsInStones} = require('./18-jewels-and-stones');

describe('numJewelsInStones', () => {
    it('should handle bad input', () => {
        expect(numJewelsInStones(null, "a")).toEqual(0);
        expect(numJewelsInStones("a", null)).toEqual(0);
        expect(numJewelsInStones(null, null)).toEqual(0);
        expect(numJewelsInStones("", "a")).toEqual(0);
        expect(numJewelsInStones("a", "")).toEqual(0);
        expect(numJewelsInStones("", "")).toEqual(0);
        expect(numJewelsInStones("a")).toEqual(0);
        expect(numJewelsInStones(undefined, "a")).toEqual(0);
        expect(numJewelsInStones()).toEqual(0);
    });
    it('should handle first leetcode example', () => {
        expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
    });
    it('should handle second leetcode example', () => {
        expect(numJewelsInStones("z", "ZZ")).toEqual(0);
    });
});
