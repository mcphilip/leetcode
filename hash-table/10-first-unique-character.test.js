const {firstUniqChar} = require('./10-first-unique-character');

describe('firstUniqChar', () => {
    it('should handle bad data', () => {
        expect(firstUniqChar(null)).toEqual(-1);
        expect(firstUniqChar()).toEqual(-1);
        expect(firstUniqChar("")).toEqual(-1);
    });
    it('should handle 1 char string', () => {
        expect(firstUniqChar("s")).toEqual(0);
    });
    it('should handle leetcode example 1', () => {
        expect(firstUniqChar("leetcode")).toEqual(0);
    });
    it('should handle leetcode example 2', () => {
        expect(firstUniqChar("loveleetcode")).toEqual(2);
    });
    it('should handle leetcode failed test case', () => {
        expect(firstUniqChar("dddccdbba")).toEqual(8);
    })
});
