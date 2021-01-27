const {longestCommonPrefix} = require('./09-longest-common-prefix');

describe('longestCommonPrefix', () => {
    it('should handle empty list', () => {
        expect(longestCommonPrefix([])).toEqual("");
        expect(longestCommonPrefix(null)).toEqual("");
        expect(longestCommonPrefix()).toEqual("");
    });
    it('should handle single element list', () => {
        expect(longestCommonPrefix(["adjfkkdf"])).toEqual('adjfkkdf');  
    });
    it('should handle leetcode example #1', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
    });
    it('should handle leetcode example #2', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
    });
    it('should handle leetcode failed test case #1', () => {
        expect(longestCommonPrefix(["ab","a"])).toEqual("a");
    });
});
