const {reverseString} = require('./10-reverse-array');

describe('reverseString', () => {
    it('should handle edge cases', () => {
        let s = ['c'];
        expect(s).toEqual(['c']);
        s = [];
        expect(s).toEqual([]);
    });
    it('should handle leetcode test case #1', () => {
        let s = ['h','e','l','l','o'];
        reverseString(s);
        expect(s).toEqual(["o","l","l","e","h"]);
    })
    it('should handle leetcode test case #2', () => {
        let s = ["H","a","n","n","a","h"];
        reverseString(s);
        expect(s).toEqual(["h","a","n","n","a","H"]);
    });
});
