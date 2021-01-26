const {strStr} = require('./08-index-of');

describe('strStr', () => {
    it('should handle leetcode example #1', () => {
        expect(strStr("hello", "ll")).toEqual(2);
    });
    it('should handle empty string edge case', () =>{
        expect(strStr("f", "")).toEqual(0);
    });
    it('should handle leetcode example #2', () => {
        expect(strStr("aaaaaa", "bba")).toEqual(-1);
    });
    it('should handle needle longer than haystack', () => {
        expect(strStr("aa", "aaa")).toEqual(-1);
    });
});
