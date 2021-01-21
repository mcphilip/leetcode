const {lengthOfLongestSubstring} = require('./19-longest-substring-no-repeating-chars');

describe('lengthOfLongestSubstring', () => {
    it('should handle bad input', () => {
        expect(lengthOfLongestSubstring(null)).toEqual(0);
        expect(lengthOfLongestSubstring()).toEqual(0);
        expect(lengthOfLongestSubstring("")).toEqual(0);
    });
    it('should handle single char edge case', () => {
        expect(lengthOfLongestSubstring("a")).toEqual(1);
    });
    it('should handle first leetcode example', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    });
    it('should handle second leetcode example', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    });
    it('should handle third leetcode example', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    });
});
