const {ValidWordAbbr} = require('./23-unique-word-abbreviation');

describe('ValidWordAbbr', () => {
    it('should handle leetcode example', () => {
        const validWordAbbr = new ValidWordAbbr(["deer", "door", "cake", "card"]);
        expect(validWordAbbr.isUnique("dear")).toEqual(false);
        expect(validWordAbbr.isUnique("cart")).toEqual(true);
        expect(validWordAbbr.isUnique("cane")).toEqual(false);
        expect(validWordAbbr.isUnique("make")).toEqual(true);
        expect(validWordAbbr.isUnique("cake")).toEqual(true);
    });
    it('should handle failed leetcode test case #1', () => {
        const validWordAbbr = new ValidWordAbbr(["deer", "door", "cake", "card"]);
        expect(validWordAbbr.isUnique("dear")).toEqual(false);
        expect(validWordAbbr.isUnique("door")).toEqual(false);
        expect(validWordAbbr.isUnique("cart")).toEqual(true);
        expect(validWordAbbr.isUnique("cake")).toEqual(true);
    });
    it('should handle failed leetcode test case #2', () => {
        const validWordAbbr = new ValidWordAbbr(['a','a']);
        expect(validWordAbbr.isUnique("a")).toEqual(true);
    });
});
